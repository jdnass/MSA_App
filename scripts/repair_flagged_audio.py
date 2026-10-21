"""Repair only the explicitly named 29 readings, with a persistent two-attempt cap."""
import concurrent.futures, hashlib, json, os, re, subprocess, tempfile, threading, unicodedata
from pathlib import Path
from repair_cedar_audio import post, validate

ROOT=Path(__file__).resolve().parent.parent
DEST=ROOT/'audio/cedar-vocab'
REPORT=ROOT/'reports/cedar-flagged-29-repair.json'
MODEL='gpt-4o-mini-tts'
REVIEW_MODEL='gpt-audio-1.5'
LOCK=threading.RLock()
SPEECH_INSTRUCTIONS='''Read only the supplied Arabic vocabulary once, clearly and naturally in Modern Standard Arabic. No introductions, translations, repetition, added words, or grammar corrections. Follow the written vowels and sukun literally. Never add unmarked grammatical case vowels. Retain explicitly written final vowels and tanween. At phrase end taa marbuuta is pausal a/ah, not t. Where the supplied pronunciation input uses a linking t in an idaafa, retain that t without adding a case vowel. Do not exaggerate or stretch consonants. Pronunciation guidance (do not read it aloud): '''
BLIND='''Listen to the complete attached recording. No expected text is supplied. Report EVERYTHING actually spoken; never silently correct a word or a sound. Infer neither grammatical endings nor a dictionary pronunciation. Return ONLY JSON with heard_arabic, word_endings (array of word_arabic, phonetic, ending), uncertain (boolean). Use standard Arabic script in word_arabic and write only final vowel marks actually heard. For each word phonetic MUST describe actual consonants and vowels in scholarly Arabic romanization: long vowels aa/ii/uu; ayn ʿ; hamza ʾ; kh, gh, sh, th, dh; j for jim and y for yaa; ḥ for ح and emphatics ṣ, ḍ, ṭ, ẓ. Double consonants when actually geminated. Do not normalize a weak or missing consonant into the expected dictionary consonant. In particular distinguish m/n, l/n, q/t/k/glottal stop, kh/f, ū/ā, and clearly audible ayn from its absence. Distinguish MSA interdental emphatic ẓ from ordinary z. Preserve epenthetic vowels and repeated fragments. Ending is the actual FINAL SOUND, one of consonant, a, i, u, an, in, un, long_vowel, unclear. A long vowel BEFORE a final consonant is consonant, not long_vowel. A final glottal stop is a consonant. Use ending i for short bi/li (بِ/لِ), not long bii/lii (بي/لي). Use normal taa marbuuta spelling for words with linked t, and record the audible t and any following case vowel in phonetic. Set uncertain true when any relevant sound cannot be determined. No code fences or explanation.'''

def digest(data): return hashlib.sha256(data).hexdigest()

def phonetic(text):
    s=unicodedata.normalize('NFC',text).lower().strip()
    for a,b in [('d͡ʒ','j'),('dʒ','j'),('ʤ','j'),('ðˤ','Z'),('ðˠ','Z'),('dˤ','D'),('tˤ','T'),('sˤ','S'),('zˤ','!z'),('ẓ','Z'),('ḍ','D'),('ṭ','T'),('ṣ','S'),('kh','x'),('ḫ','x'),('χ','x'),('gh','ɣ'),('ġ','ɣ'),('sh','ʃ'),('š','ʃ'),('dh','ð'),('ḏ','ð'),('th','θ'),('ṯ','θ'),('ḥ','ħ'),('ʕ','ʕ'),('ʿ','ʕ'),('ʻ','ʕ'),('‘','ʕ'),('ʾ','ʔ'),('’','ʔ'),('ā','aa'),('ī','ii'),('ū','uu'),('ɑ','a'),('ɐ','a'),('ə','a'),('æ','a'),('ɪ','i'),('ʊ','u')]: s=s.replace(a,b)
    s=re.sub(r'(.)[ː:]',lambda m:m[1]*2,s)
    s=re.sub(r'[\s\[\]()/.,;_\-ˈˌ]','',s)
    s=re.sub(r'^ʔ','',s)
    s=re.sub(r'^alʔ','al',s)
    s=re.sub(r'(?<=a)h$','',s)
    return s

def check_review(review,entry):
    validate(review,entry['ar'])
    words=review['word_endings']
    if len(words)!=len(entry['expectedPhonetics']): raise ValueError('Extra, missing or repeated words')
    for word,expected in zip(words,entry['expectedPhonetics']):
        heard=phonetic(word.get('phonetic','')); target=phonetic(expected)
        if 'y' in target and 'y' not in heard: heard=heard.replace('j','y')
        if heard!=target: raise ValueError('Pronunciation mismatch: '+word.get('phonetic',''))
    if entry.get('requireLinkedT') and not phonetic(words[0]['phonetic']).endswith('t'):
        raise ValueError('Required idaafa linking t missing')
    return True

def atomic_json(path,data):
    path.parent.mkdir(parents=True,exist_ok=True)
    temporary=path.with_suffix('.tmp')
    temporary.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
    temporary.replace(path)

def clean_audio(clip):
    with tempfile.TemporaryDirectory() as tmp:
        raw=Path(tmp)/'source.mp3'; raw.write_bytes(clip)
        out=Path(tmp)/'clean.mp3'
        subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y','-i',str(raw),'-af',
            'silenceremove=start_periods=1:start_duration=0.02:start_threshold=-55dB:start_silence=0.04,areverse,silenceremove=start_periods=1:start_duration=0.02:start_threshold=-55dB:start_silence=0.06,areverse',
            '-codec:a','libmp3lame','-b:a','96k',str(out)],check=True)
        seconds=float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','default=noprint_wrappers=1:nokey=1',str(out)],text=True).strip())
        return out.read_bytes(),seconds

def signature(entry,model,batch):
    return digest(('cedar-vocab-v1\n'+model+'\n'+entry['spoken']+'\n'+batch).encode())

def main():
    import base64
    config=json.loads((ROOT/'cedar-flagged-batch.json').read_text())
    entries=config['entries']; batch=config['batch']
    if len(entries)!=29 or len({e['id'] for e in entries})!=29 or config['maxAttemptsPerEntry']!=2:
        raise ValueError('The exact 29-entry allowlist and two-attempt cap are mandatory')
    for e in entries:
        if e['id']!='cv-'+digest(e['ar'].encode())[:24]:raise ValueError('Allowlist source identity mismatch')
    allowed={e['id'] for e in entries}; names={i+'.mp3' for i in allowed}
    targets=json.loads((ROOT/'cedar-vocab-targets.json').read_text())
    source={t['id']:t for t in targets['entries']}
    for e in entries:
        if source[e['id']]['ar']!=e['ar'] or source[e['id']]['spoken']!=e['spoken']: raise ValueError('Source text changed')
    shards={p:json.loads(p.read_text()) for p in (DEST/'manifests').glob('*.json')}
    records={k:v for rows in shards.values() for k,v in rows.items()}
    original_records=json.loads(json.dumps(records))
    original_audio={p.name:digest(p.read_bytes()) for p in DEST.glob('*.mp3')}
    mapping_path=ROOT/'cedar-vocab-audio.js'; js=mapping_path.read_text()
    offset=js.index('window.MOSA_VOCAB_AUDIO=')+len('window.MOSA_VOCAB_AUDIO=')
    mapping,end=json.JSONDecoder().raw_decode(js[offset:]); original_mapping=dict(mapping)
    overrides_path=ROOT/'cedar-vocab-pronunciation.json'
    overrides=json.loads(overrides_path.read_text()); original_overrides=json.loads(json.dumps(overrides))
    if REPORT.exists():
        report=json.loads(REPORT.read_text())
        if report['batch']!=batch or set(report['entries'])!=allowed:raise ValueError('Saved batch identity mismatch')
    else:
        report={'batch':batch,'selected':29,'maxGenerationAttemptsPerEntry':2,'maxSpeechRequests':56,'maxAudioReviewRequests':56,
            'speechRequests':0,'audioReviewRequests':0,'speechAudioSeconds':0,'reviewUsage':{},
            'entries':{e['id']:{'label':e['label'],'ar':e['ar'],'status':'pending','attempts':0} for e in entries},
            'unchangedCardText':True,'method':'Exact allowlist; at most two candidate generations and two target-blind phonetic reviews per entry; silence-only trim for king. Automated checks, not human certification.'}
    key=os.environ.get('OPENAI_API_KEY')
    if not key:raise ValueError('Configured API key missing')

    def checkpoint(): atomic_json(REPORT,report)

    def call(kind):
        with LOCK:
            field=kind+'Requests'; limit='max'+kind[0].upper()+kind[1:]+'Requests'
            if report[field]>=report[limit]:raise ValueError('Persistent API request cap reached')
            report[field]+=1; checkpoint()

    def review_clip(clip):
        call('audioReview')
        result=post('https://api.openai.com/v1/chat/completions',{
            'model':REVIEW_MODEL,'modalities':['text'],'temperature':0,'max_completion_tokens':1100,'store':False,
            'messages':[{'role':'system','content':BLIND},{'role':'user','content':[
                {'type':'text','text':'Transcribe the actual recording and its sounds. No expected phrase is provided.'},
                {'type':'input_audio','input_audio':{'data':base64.b64encode(clip).decode(),'format':'mp3'}}]}]},key)
        with LOCK:
            for k,v in result.get('usage',{}).items():
                if isinstance(v,int):report['reviewUsage'][k]=report['reviewUsage'].get(k,0)+v
            checkpoint()
        text=result['choices'][0]['message'].get('content',''); match=re.search(r'\{[\s\S]*\}',text)
        if not match:raise ValueError('Audio reviewer did not return JSON')
        return json.loads(match.group())

    def repair(e):
        row=report['entries'][e['id']]
        if records[e['id']].get('revision')==batch and row['status'] in ('accepted','trimmed'):
            return None
        if e['action']=='trim':
            clip,seconds=clean_audio((DEST/records[e['id']]['file']).read_bytes())
            if not 0.2<=seconds<=records[e['id']]['seconds']+0.1:raise ValueError('Unexpected trimmed recording duration')
            r={**records[e['id']],'seconds':round(seconds,3),'revision':batch,'audioSHA256':digest(clip),
                'edit':'Silence trimmed only; original speech retained'}
            model=r.get('generation_model','gpt-realtime-2.1-mini')
            r['signature']=signature(e,model,batch)
            return e,r,clip,model,'trimmed'
        while row['attempts']<2:
            with LOCK:
                row['attempts']+=1; row['status']='reviewing'; checkpoint()
            review=None
            try:
                call('speech')
                raw=post('https://api.openai.com/v1/audio/speech',{'model':MODEL,'voice':'cedar','input':e['speechInput'],
                    'instructions':SPEECH_INSTRUCTIONS+e['guidance'],'response_format':'mp3','speed':1.0},key,binary=True)
                clip,seconds=clean_audio(raw)
                with LOCK: report['speechAudioSeconds']+=round(seconds,3); checkpoint()
                if len(clip)<500 or not 0.2<=seconds<=max(4,2.5*len(e['expectedPhonetics'])):
                    raise ValueError('Unexpected vocabulary recording duration')
                review=review_clip(clip); check_review(review,e)
                record={'ar':e['ar'],'spoken':e['spoken'],'file':e['id']+'.mp3','signature':signature(e,MODEL,batch),
                    'seconds':round(seconds,3),'revision':batch,'generation_engine':'speech','generation_model':MODEL,'voice':'cedar',
                    'speechInput':e['speechInput'],'audioSHA256':digest(clip),'audioReview':review,'verifiedTranscript':review.get('heard_arabic',''),
                    'transcript':review.get('heard_arabic',''),'speechAttempts':row['attempts']}
                return e,record,clip,MODEL,'accepted'
            except Exception as error:
                reason=str(error)[:200] if isinstance(error,ValueError) else type(error).__name__
                with LOCK:
                    row['reason']=reason
                    row.setdefault('reviews',[]).append({'attempt':row['attempts'],'reason':reason,'review':review})
                    checkpoint()
        with LOCK:row['status']='unresolved';checkpoint()
        print('UNRESOLVED '+e['label']+': '+row.get('reason',''),flush=True)
        return None

    def save_accepted(result):
        if result is None:return
        e,record,clip,model,status=result
        path=DEST/record['file']; temporary=path.with_suffix('.accepted.tmp'); temporary.write_bytes(clip);temporary.replace(path)
        records[e['id']]=record
        p=DEST/'manifests'/(e['id'][3]+'.json');shards[p][e['id']]=record
        p.write_text(json.dumps(shards[p],ensure_ascii=False,separators=(',',':')))
        mapping[e['ar']]='./audio/cedar-vocab/'+record['file']+'?v='+record['signature'][:12]
        mapping_path.write_text(js[:offset]+json.dumps(mapping,ensure_ascii=False,separators=(',',':'))+js[offset+end:])
        settings={**overrides.get(e['id'],{}),'revision':batch,'generation_model':model}
        if status=='accepted': settings.update(generation_engine='speech',verify_audio=True)
        overrides[e['id']]=settings;atomic_json(overrides_path,overrides)
        with LOCK:
            report['entries'][e['id']].update(status=status,audioSHA256=record['audioSHA256'],seconds=record['seconds'])
            report['entries'][e['id']].pop('reason',None);checkpoint()
        print(status.upper()+' '+e['label'],flush=True)

    checkpoint()
    with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
        futures=[pool.submit(repair,e) for e in entries]
        for task in concurrent.futures.as_completed(futures):save_accepted(task.result())
    # Prove that no other recording, mapping, manifest entry or override changed.
    after_audio={p.name:digest(p.read_bytes()) for p in DEST.glob('*.mp3')}
    if {k:v for k,v in original_audio.items() if k not in names}!={k:v for k,v in after_audio.items() if k not in names}:
        raise ValueError('Out-of-scope MP3 modification')
    for key,value in original_records.items():
        if key not in allowed and records[key]!=value:raise ValueError('Out-of-scope manifest entry modification')
    allowed_ar={e['ar'] for e in entries}
    if {k:v for k,v in original_mapping.items() if k not in allowed_ar}!={k:v for k,v in mapping.items() if k not in allowed_ar}:
        raise ValueError('Out-of-scope playback mapping modification')
    if {k:v for k,v in original_overrides.items() if k not in allowed}!={k:v for k,v in overrides.items() if k not in allowed}:
        raise ValueError('Out-of-scope override modification')
    for e in entries:
        if report['entries'][e['id']]['status']=='unresolved' and (records[e['id']]!=original_records[e['id']] or after_audio[e['id']+'.mp3']!=original_audio[e['id']+'.mp3']):
            raise ValueError('Unresolved entry must retain its original recording')
    report.update(accepted=sum(r['status']=='accepted' for r in report['entries'].values()),trimmed=sum(r['status']=='trimmed' for r in report['entries'].values()),
        unresolved=sum(r['status']=='unresolved' for r in report['entries'].values()),outOfScopeChanges=0)
    checkpoint()
    print(json.dumps({k:report[k] for k in ['selected','accepted','trimmed','unresolved','speechRequests','audioReviewRequests','outOfScopeChanges']}),flush=True)

if __name__=='__main__':main()
