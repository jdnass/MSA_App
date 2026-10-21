"""Literal Cedar speech generation with independent, target-blind audio review."""
import base64, hashlib, json, os, re, subprocess, tempfile, time, urllib.request
from pathlib import Path
ROOT=Path(__file__).resolve().parent.parent
DEST=ROOT/"audio"/"cedar-vocab"
SPEECH_MODEL="gpt-4o-mini-tts"
REVIEW_MODEL="gpt-audio-1.5"
TOKEN=r"[ء-يٱ][ء-يٱ\u064b-\u065f\u0670]*"
MARKS=r"[\u064b-\u065f\u0670]*$"
def canonical(s):
    return re.sub(r"([ء-ي])\u064bا",r"\1ا"+"\u064b",s)

def norm(s):
    s=re.sub(r"[\u0610-\u061a\u064b-\u065f\u0670\u0640\u06d6-\u06ed]","",s)
    return re.sub(r"[^\w]","",re.sub("[أإآٱ]","ا",s).replace("ى","ي"))

def speech_text(text):
    def stop(match):
        word=match.group()
        base=re.sub(r"[\u064b-\u065f\u0670]","",word)
        marks=re.search(MARKS,canonical(word)).group()
        if base[-1] not in "ةاىوي" and not re.search(r"[\u064b-\u0650\u0652]",marks):
            word+="ْ"
        return word
    return re.sub(TOKEN,stop,re.sub(r"\s*[/؛;]\s*","، ",text))

def ending(word):
    marks=re.search(MARKS,canonical(word)).group()
    for mark,value in (("ً","an"),("ٌ","un"),("ٍ","in"),("َ","a"),("ُ","u"),("ِ","i")):
        if mark in marks: return value
    base=norm(word)
    if base.endswith("ة"): return "pausal_taa"
    if base[-1:] in "ايو" and base: return "long_vowel"
    return "consonant"

def validate(review,expected):
    if review.get("uncertain"): raise ValueError("Audio reviewer uncertain")
    source=re.findall(TOKEN,expected)
    heard=review.get("word_endings",[])
    if len(source)!=len(heard): raise ValueError("Extra, missing, or repeated words")
    for s,h in zip(source,heard):
        actual=h.get("word_arabic","")
        # Pausal taa marbuuta is occasionally transcribed as final haa.
        a=norm(actual); e=norm(s)
        if e.endswith("ة") and a.endswith("ه"): a=a[:-1]+"ة"
        if a!=e: raise ValueError("Audio word mismatch: "+actual)
        supplied=ending(s)
        actual_end=h.get("ending","unclear")
        ph=h.get("phonetic","").strip().rstrip(".,!?;:")
        vowels=re.findall(r"[\u064b-\u0650]",re.search(MARKS,canonical(actual)).group())
        expected_vowels=re.findall(r"[\u064b-\u0650]",re.search(MARKS,canonical(s)).group())
        if supplied!="pausal_taa" and vowels and vowels!=expected_vowels:
            raise ValueError("Unmarked or changed vowel in heard word: "+actual)
        if supplied=="pausal_taa":
            if actual_end in ("un","in","an","u","i") or re.search(r"t(?:un|in|an|u|i|a)?$",ph):
                raise ValueError("Unwanted taa marbuuta ending: "+ph)
            if actual_end not in ("a","consonant"): raise ValueError("Unclear pausal ending")
        elif supplied=="consonant":
            written_n=e.count("ن")+len(re.findall("ن[َُِْ]*ّ",s))
            intrinsic_n=e.endswith("ن") and actual_end in ("an","in","un") and ph.endswith("n") and ph.count("n")<=written_n
            if actual_end!="consonant" and not intrinsic_n: raise ValueError("Unwanted final sound: "+ph)
            if not ph or re.search(r"[aeiouāīūɑɐəɪʊæɛɔː:]$",ph):
                raise ValueError("Phonetic ending does not confirm final consonant: "+ph)
        elif supplied=="long_vowel":
            if actual_end not in ("long_vowel","a","i","u"): raise ValueError("Unclear written long vowel")
        elif actual_end!=supplied:
            raise ValueError("Explicitly marked ending not preserved: "+ph)
    return True

BLIND="""Listen to the entire attached Arabic audio. No expected text is supplied.
Return EVERYTHING actually spoken, including any introduction, repetition, fragments, and partial words. Do not correct pronunciation or supply a dictionary form.
Report audible word-final sounds, not endings inferred from grammar. Use standard Arabic letters in word_arabic, adding the ending vowels you actually hear; use normal taa marbuuta spelling when appropriate.
Return ONLY JSON: heard_arabic, heard_phonetic, word_endings (array of word_arabic, phonetic, ending), uncertain (boolean).
ending must be consonant, a, i, u, an, in, un, long_vowel, or unclear. Use unclear if unsure. Preserve each actual vowel in phonetic.
These labels describe the FINAL SOUND, not the last syllable or grammatical case. A long vowel BEFORE a final consonant does not make the ending long_vowel. Examples: ibn, al-taqs, qanun, kulliyyat, an-nahar, ra'is, and fawakih end in consonant; qanunu ends in u; qanunun ends in un. A word ending in its own n is consonant unless an EXTRA tanween syllable is actually heard.
Use Latin/IPA in phonetic, Arabic script only in word_arabic. Supply no grammatical vowels you cannot hear. Each word's phonetic and ending must agree. Output a JSON object without code fences or commentary."""
INSTRUCTIONS="""Read only the supplied Arabic words once, naturally, in Modern Standard Arabic. No introduction, explanation, translation, examples, or repetition.
Follow the supplied vowel and sukun marks literally. Do not infer grammatical case endings on any word.
Keep explicitly written final vowels and tanween. Unmarked final taa marbuuta is pausal a/ah, never at, atun, atan, atin, atu or ati.
Comma separators between alternatives mean a short silent pause; add no connector.
Speak at a natural clear pace without exaggerated consonants."""

def post(url,body,key,binary=False):
    req=urllib.request.Request(url,data=json.dumps(body,ensure_ascii=False).encode(),headers={"Authorization":"Bearer "+key,"Content-Type":"application/json"})
    with urllib.request.urlopen(req,timeout=90) as response:
        data=response.read()
    return data if binary else json.loads(data)

def review_audio(clip,key):
    result=post("https://api.openai.com/v1/chat/completions",{
       "model":REVIEW_MODEL,"modalities":["text"],"temperature":0,"max_completion_tokens":1200,"store":False,
       "messages":[{"role":"system","content":BLIND},{"role":"user","content":[
         {"type":"text","text":"Describe this recording exactly as heard. No expected phrase is given."},
         {"type":"input_audio","input_audio":{"data":base64.b64encode(clip).decode(),"format":"mp3"}}]}]},key)
    text=result["choices"][0]["message"].get("content","")
    match=re.search(r"\{[\s\S]*\}",text)
    if not match: raise ValueError("Audio reviewer did not return JSON")
    review=json.loads(match.group())
    if any(not re.fullmatch(TOKEN,w.get("word_arabic","")) for w in review.get("word_endings",[])):
        raise ValueError("Audio reviewer did not use Arabic script")
    return review

HINTS={
    "cv-4ebcb80a6b059738d5089b4b":"The word means works/businesses: aʿmāl. Clearly pronounce the pharyngeal ayn and final l, with no vowel after l.",
    "cv-772be16d54035c9d444f275e":"The word means the evening: al-masāʾ. Clearly pronounce the final glottal stop hamza after the long aa. End at the hamza.",
    "cv-a3b3b23a3f172ad3b6adc5d8":"The word means salad: salaṭa, with short a vowels and emphatic ṭ. Use normal s, not emphatic ṣ. Do not lengthen the vowels.",
    "cv-af835dba4a4ad94f1572c4cf":"Pronounce idāra, pause, al-aʿmāl. The first word must end in a, with NO t sound before the pause.",
    "cv-ff651625873dd12399f0fe4b":"Pronounce munāsib, pause, li. The final li is a SHORT syllable, not long lī. No vowel follows the b in munāsib.",
    "cv-647899124cf18326f6d37885":"Pronounce ʿilm, pause, al-insān. The first word begins with pharyngeal ayn and ends on m, without a vowel after m."
}

def generate_clip(text,t,key):
    return post("https://api.openai.com/v1/audio/speech",{
        "model":t.get("generation_model",SPEECH_MODEL),"voice":"cedar","input":text,
        "instructions":INSTRUCTIONS+" End on the supplied final sound, then silence. "+HINTS.get(t["id"],""),
        "response_format":"mp3","speed":0.95},key,binary=True)

def prepare_clip(spoken,t,key,separate=False):
    # Separate requests prevent inferred case endings inside multiword entries.
    parts=re.findall(TOKEN,spoken) if separate else [spoken]
    with tempfile.TemporaryDirectory() as tmp:
        tmp=Path(tmp); paths=[]
        for i,part in enumerate(parts):
            raw=tmp/(str(i)+".mp3"); raw.write_bytes(generate_clip(part,t,key))
            clean=tmp/(str(i)+".wav")
            subprocess.run(["ffmpeg","-hide_banner","-loglevel","error","-y","-i",str(raw),
                "-af","silenceremove=start_periods=1:start_duration=0.02:start_threshold=-55dB:start_silence=0.04,areverse,silenceremove=start_periods=1:start_duration=0.02:start_threshold=-55dB:start_silence=0.06,areverse,apad=pad_dur=0.12",
                "-ar","24000","-ac","1",str(clean)],check=True)
            paths.append(clean)
        listing=tmp/"concat.txt"
        listing.write_text("".join("file '"+str(path)+"'\n" for path in paths))
        combined=tmp/"candidate.mp3"
        subprocess.run(["ffmpeg","-hide_banner","-loglevel","error","-y","-f","concat","-safe","0","-i",str(listing),
            "-codec:a","libmp3lame","-b:a","96k",str(combined)],check=True)
        seconds=float(subprocess.check_output(["ffprobe","-v","error","-show_entries","format=duration","-of","default=noprint_wrappers=1:nokey=1",str(combined)],text=True).strip())
        return combined.read_bytes(),seconds

def repair_one(t,key,signature):
    spoken=speech_text(t["spoken"])
    last="No accepted candidate"
    # Reuse a fully vocalized spelling's accepted recording for this identical word.
    if t["id"]=="cv-89b308f5d70922c232a8f70c":
        source_id="cv-56cc055892eabf12d07fbdec"
        manifest=json.loads((DEST/"manifests"/"5.json").read_text())
        source=manifest.get(source_id,{})
        if source.get("audioReview"):
            validate(source["audioReview"],t["spoken"])
            clip=(DEST/source["file"]).read_bytes()
            if hashlib.sha256(clip).hexdigest()!=source.get("audioSHA256"):
                raise ValueError("Reusable audio hash mismatch")
            target=DEST/(t["id"]+".mp3"); target.write_bytes(clip)
            return {**source,"ar":t["ar"],"spoken":t["spoken"],"file":target.name,"signature":signature,
                "revision":t["revision"],"reusedFrom":source_id}
    for attempt in range(4):
        review=None
        try:
            separate=attempt>=2 and len(re.findall(TOKEN,spoken))>1
            clip,seconds=prepare_clip(spoken,t,key,separate)
            if len(clip)<500: raise ValueError("Empty speech recording")
            if not 0.2<=seconds<=max(4,3*len(re.findall(TOKEN,t["spoken"]))):
                raise ValueError("Unexpected word-recording duration")
            for review_attempt in range(2):
                try:
                    review=review_audio(clip,key)
                    break
                except ValueError as error:
                    if review_attempt: raise
            validate(review,t["spoken"])
            target=DEST/(t["id"]+".mp3")
            temporary=target.with_suffix(".accepted.tmp")
            temporary.write_bytes(clip); temporary.replace(target)
            return {"ar":t["ar"],"spoken":t["spoken"],"speechInput":spoken,"file":target.name,
              "signature":signature,"seconds":round(seconds,2),"transcript":review.get("heard_arabic",""),
              "verifiedTranscript":review.get("heard_arabic",""),"revision":t["revision"],"generation_engine":"speech",
              "generation_model":t.get("generation_model",SPEECH_MODEL),"voice":"cedar",
              "audioSHA256":hashlib.sha256(clip).hexdigest(),"audioReview":review,"speechAttempts":attempt+1,"separateWords":separate}
        except Exception as error:
            last=str(error)[:180] if type(error) is ValueError else type(error).__name__
            diagnostic=ROOT/"reports"/"cedar-rejected"
            diagnostic.mkdir(parents=True,exist_ok=True)
            (diagnostic/(t["id"]+"-"+str(attempt+1)+".json")).write_text(json.dumps({"ar":t["ar"],"reason":last,"review":review},ensure_ascii=False,indent=2))
            if attempt<3: time.sleep(1+attempt)
    raise RuntimeError("Literal speech repair not accepted: "+last)

def probe():
    key=os.environ.get("OPENAI_API_KEY")
    if not key: raise ValueError("Configured API key missing")
    clip=post("https://api.openai.com/v1/audio/speech",{"model":SPEECH_MODEL,"voice":"cedar","input":"بَلَدْ","response_format":"mp3","instructions":INSTRUCTIONS},key,binary=True)
    if len(clip)<500: raise ValueError("Speech endpoint probe failed")
    print("PASS: dedicated Speech API accepts Cedar",flush=True)

if __name__=="__main__": probe()

