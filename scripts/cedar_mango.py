"""Missing-only Mango Cedar batch; preserve all existing clips; bounded automated QA."""
import base64, concurrent.futures, hashlib, json, os, re, threading, time, unicodedata
from pathlib import Path
from repair_cedar_audio import post, speech_text, validate, TOKEN, ending
from repair_flagged_audio import BLIND, SPEECH_INSTRUCTIONS, clean_audio, atomic_json, phonetic
ROOT=Path(__file__).resolve().parent.parent
DEST=ROOT/'audio/cedar-vocab'
REPORT=ROOT/'reports/cedar-mango-missing.json'
BATCH='mango-missing-2026-10-21'
LOCK=threading.RLock()
# Explicitly reviewed construct-state positions; adjectives must retain pausal taa.
LINKS={'دَرَجَة الْحَرَارَة':[0], 'مَتاجِر مُتَعَدِّدَة الْأَقْسام':[1],
       'كُرَة اليَد':[0], 'قَائِمَة الطَّعَام':[0], 'اِمْرَأَة إِطْفَاء':[0],
       'عُطْلَة نِهَايَة الأُسْبُوع':[0,1]}
def digest(x):return hashlib.sha256(x).hexdigest()
def equivalence(s):
    # Only remove silent sukun/tatweel and normalize equivalent diacritic order.
    # Preserve all vowels, shadda, hamza, and word boundaries.
    return unicodedata.normalize('NFD',s).replace('ْ','').replace('ـ','').strip()
def check(review,entry):
    linked=LINKS.get(entry['ar'],[])
    # Existing general checker assumes only definite second nouns; check each
    # token independently, explicitly enforcing all reviewed construct links.
    tokens=re.findall(TOKEN,entry['spoken']); words=review.get('word_endings',[])
    if review.get('uncertain') or len(tokens)!=len(words):raise ValueError('Uncertain, extra, missing or repeated words')
    for i,(token,heard) in enumerate(zip(tokens,words)):
        if i in linked:
            from repair_cedar_audio import norm
            if norm(heard.get('word_arabic','')).rstrip('ه')!=norm(token).rstrip('ه'):
                raise ValueError('Idaafa word mismatch')
            if heard.get('ending')!='consonant' or not phonetic(heard.get('phonetic','')).endswith('t'):
                raise ValueError('Missing idaafa t or added case vowel')
        else:validate({'uncertain':False,'word_endings':[heard]},token)
    return True

def main():
    targets=json.loads((ROOT/'cedar-vocab-targets.json').read_text())
    if targets['scope']['collectionId']!='mango-msa':raise ValueError('Mango-only scope required')
    selected=set(targets['scope']['ids']); all_entries={t['id']:t for t in targets['entries']}
    shards={p:json.loads(p.read_text()) for p in (DEST/'manifests').glob('*.json')}
    records={k:v for rows in shards.values() for k,v in rows.items()}
    original_records=json.loads(json.dumps(records))
    original_audio={p.name:digest(p.read_bytes()) for p in DEST.glob('*.mp3')}
    mp=ROOT/'cedar-vocab-audio.js';js=mp.read_text();off=js.index('window.MOSA_VOCAB_AUDIO=')+len('window.MOSA_VOCAB_AUDIO=')
    mapping,end=json.JSONDecoder().raw_decode(js[off:]);original_mapping=dict(mapping)
    if REPORT.exists():report=json.loads(REPORT.read_text())
    else:
        missing=[i for i in sorted(selected) if i not in records or not (DEST/records[i]['file']).exists()]
        report={'batch':BATCH,'scope':'mango-msa','scopeTargets':len(selected),'existingReused':len(selected)-len(missing),
            'selected':len(missing),'maxAttemptsPerEntry':2,'speechRequests':0,'blindReviewRequests':0,'targetReviewRequests':0,
            'speechAudioSeconds':0,'reviewUsage':{},'entries':{i:{'ar':all_entries[i]['ar'],'en':all_entries[i]['en'],'attempts':0,'status':'pending'} for i in missing},
            'method':'Missing only; silence trim; blind word/ending review plus separate targeted phonetic review. Automated checks, not human certification.'}
    if report['batch']!=BATCH or not set(report['entries'])<=selected:raise ValueError('Unexpected batch')
    allowed=set(report['entries'])
    key=os.environ.get('OPENAI_API_KEY')
    if not key:raise ValueError('Configured API key missing')
    def checkpoint():atomic_json(REPORT,report)
    def count(field):
        with LOCK:
            if report[field]>=2*report['selected']:raise ValueError('Persistent request cap reached')
            report[field]+=1;checkpoint()
    def review(clip,entry,targeted=False):
        count('targetReviewRequests' if targeted else 'blindReviewRequests')
        prompt=BLIND if not targeted else ('Check the attached Arabic vocabulary audio against the supplied target. Return only JSON with pass (boolean), issues (array), uncertain (boolean). Reject any added introduction, sentence, repeated word, repeated or extra syllable, missing/changed consonant or vowel, long leading pause, or unmarked case ending. Preserve written final verb vowels and tanween. Taa marbuuta must be pausal a unless its word index is listed as idaafa; then require linking t WITHOUT a case vowel. Do not confuse a legitimate phrase in the target with added speech. Be strict about actual audio, not intended pronunciation. Target: '+entry['spoken']+'; zero-based idaafa word indices: '+json.dumps(LINKS.get(entry['ar'],[])))
        r=post('https://api.openai.com/v1/chat/completions',{'model':'gpt-audio-1.5','modalities':['text'],'temperature':0,'max_completion_tokens':1800,'store':False,
            'messages':[{'role':'system','content':prompt},{'role':'user','content':[{'type':'text','text':'Review the complete recording.'},{'type':'input_audio','input_audio':{'data':base64.b64encode(clip).decode(),'format':'mp3'}}]}]},key)
        with LOCK:
            for k,v in r.get('usage',{}).items():
                if isinstance(v,int):report['reviewUsage'][k]=report['reviewUsage'].get(k,0)+v
            checkpoint()
        match=re.search(r'\{[\s\S]*\}',r['choices'][0]['message'].get('content',''))
        if not match:raise ValueError('Invalid review JSON')
        result=json.loads(match.group())
        if targeted:
            if result.get('pass') is not True or result.get('uncertain') is not False or result.get('issues'):raise ValueError('Target phonetic review: '+str(result)[:350])
        else:check(result,entry)
        return result
    def generate(entry):
        row=report['entries'][entry['id']]
        if entry['id'] in records and (DEST/records[entry['id']]['file']).exists():return None
        tokens=re.findall(TOKEN,entry['spoken']);linked=LINKS.get(entry['ar'],[])
        spoken=speech_text(entry['spoken'])
        if linked:
            changed=[]
            for i,t in enumerate(tokens):changed.append(re.sub('ة[َُِْ]*$','تْ',t) if i in linked else speech_text(t))
            spoken=' '.join(changed)
        reason=(row.get('rejections') or ['Persistent attempt cap already reached'])[-1]
        while row['attempts']<2:
            with LOCK:row['attempts']+=1;row['status']='reviewing';checkpoint()
            try:
                count('speechRequests')
                raw=post('https://api.openai.com/v1/audio/speech',{'model':'gpt-4o-mini-tts','voice':'cedar','input':spoken,'instructions':SPEECH_INSTRUCTIONS,'response_format':'mp3','speed':1.0},key,True)
                clip,seconds=clean_audio(raw)
                with LOCK:report['speechAudioSeconds']+=round(seconds,3);checkpoint()
                if len(clip)<500 or not 0.2<=seconds<=max(4,2.5*len(tokens)):raise ValueError('Unexpected audio duration')
                blind=review(clip,entry);targeted=review(clip,entry,True)
                sig=digest(('cedar-vocab-v1\ngpt-4o-mini-tts\n'+entry['spoken']+'\n'+BATCH).encode())
                record={'ar':entry['ar'],'spoken':entry['spoken'],'file':entry['id']+'.mp3','signature':sig,'seconds':round(seconds,3),'revision':BATCH,
                    'generation_engine':'speech','generation_model':'gpt-4o-mini-tts','voice':'cedar','speechInput':spoken,'audioSHA256':digest(clip),'audioReview':blind,'phoneticReview':targeted,'speechAttempts':row['attempts']}
                return entry,record,clip
            except Exception as error:
                reason=str(error)[:450] if isinstance(error,ValueError) else type(error).__name__
                with LOCK:row.setdefault('rejections',[]).append(reason);checkpoint()
        with LOCK:row['status']='unresolved';checkpoint()
        print('UNRESOLVED '+entry['ar']+': '+reason,flush=True)
        return None
    def save(entry,record,clip=None):
        if clip is not None:
            p=DEST/record['file'];tmp=p.with_suffix('.accepted.tmp');tmp.write_bytes(clip);tmp.replace(p)
        records[entry['id']]=record
        p=DEST/'manifests'/(entry['id'][3]+'.json');shards.setdefault(p,{})[entry['id']]=record
        p.write_text(json.dumps(shards[p],ensure_ascii=False,separators=(',',':')))
        mapping[entry['ar']]='./audio/cedar-vocab/'+record['file']+'?v='+record['signature'][:12]
        prefix='/* AI-generated Cedar vocabulary, extended forms and broken plurals. */\nwindow.MOSA_VOCAB_IDS='+json.dumps(dict.fromkeys(targets['ids'],True),separators=(',',':'))+';\nwindow.MOSA_VOCAB_AUDIO='
        mp.write_text(prefix+json.dumps(mapping,ensure_ascii=False,separators=(',',':'))+';\n')
        with LOCK:report['entries'][entry['id']]['status']='reused' if clip is None else 'accepted';checkpoint()
    # Reuse exact phonetic spellings which differ only in optional silent sukun.
    reusable={equivalence(r.get('spoken',r['ar'])):(i,r) for i,r in records.items() if (DEST/r['file']).exists()}
    for i in sorted(allowed):
        if i in records and (DEST/records[i]['file']).exists():continue
        t=all_entries[i];found=reusable.get(equivalence(t['spoken']))
        if found:
            source,r=found;save(t,{**r,'ar':t['ar'],'spoken':t['spoken'],'reusedFrom':source})
    checkpoint()
    pending=[all_entries[i] for i in sorted(allowed) if i not in records or not (DEST/records[i]['file']).exists()]
    print(f'Mango targets {len(selected)}; existing {report["existingReused"]}; pending generation {len(pending)}',flush=True)
    groups={}
    for t in pending:groups.setdefault(equivalence(t['spoken']),[]).append(t)
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        tasks=[pool.submit(generate,group[0]) for group in groups.values()]
        for n,future in enumerate(concurrent.futures.as_completed(tasks),1):
            result=future.result()
            if result:
                save(*result)
                entry,record,clip=result
                for alias in groups[equivalence(entry['spoken'])][1:]:
                    save(alias,{**record,'ar':alias['ar'],'spoken':alias['spoken'],'reusedFrom':entry['id']})
            if n%10==0:print(f'Checked {n}/{len(pending)}',flush=True)
    for name,sha in original_audio.items():
        if digest((DEST/name).read_bytes())!=sha:raise ValueError('Existing audio changed')
    for i,r in original_records.items():
        if records[i]!=r:raise ValueError('Existing manifest changed')
    for ar,url in original_mapping.items():
        if mapping[ar]!=url:raise ValueError('Existing mapping changed')
    report.update(accepted=sum(r['status']=='accepted' for r in report['entries'].values()),reused=sum(r['status']=='reused' for r in report['entries'].values()),unresolved=sum(r['status']=='unresolved' for r in report['entries'].values()),existingAudioUnchanged=True)
    checkpoint();print(json.dumps({k:report[k] for k in ['selected','accepted','reused','unresolved','speechRequests','blindReviewRequests','targetReviewRequests','existingAudioUnchanged']}),flush=True)
if __name__=='__main__':main()
