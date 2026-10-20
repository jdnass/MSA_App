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
            if actual_end in ("un","in","an","u","i") or re.search(r"t(?:un|in|an|u|i|a)$",ph):
                raise ValueError("Unwanted taa marbuuta ending: "+ph)
            if actual_end not in ("a","consonant"): raise ValueError("Unclear pausal ending")
        elif supplied=="consonant":
            intrinsic_n=e.endswith("ن") and actual_end in ("an","in","un") and ph.endswith("n")
            if actual_end!="consonant" and not intrinsic_n: raise ValueError("Unwanted final sound: "+ph)
        elif supplied=="long_vowel":
            if actual_end not in ("long_vowel","a","i","u"): raise ValueError("Unclear written long vowel")
        elif actual_end!=supplied:
            raise ValueError("Explicitly marked ending not preserved: "+ph)
    return True

BLIND="""Listen to the entire attached Arabic audio. No expected text is supplied.
Return EVERYTHING actually spoken, including any introduction, repetition, fragments, and partial words. Do not correct pronunciation or supply a dictionary form.
Report audible word-final sounds, not endings inferred from grammar. Use standard Arabic letters in word_arabic, adding the ending vowels you actually hear; use normal taa marbuuta spelling when appropriate.
Return ONLY JSON: heard_arabic, heard_phonetic, word_endings (array of word_arabic, phonetic, ending), uncertain (boolean).
ending must be consonant, a, i, u, an, in, un, long_vowel, or unclear. Use unclear if unsure. Preserve each actual vowel in phonetic."""
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
    return json.loads(match.group())

def repair_one(t,key,signature):
    spoken=speech_text(t["spoken"])
    last="No accepted candidate"
    for attempt in range(4):
        try:
            clip=post("https://api.openai.com/v1/audio/speech",{
                "model":t.get("generation_model",SPEECH_MODEL),"voice":"cedar","input":spoken,
                "instructions":INSTRUCTIONS+(" Be particularly careful to stop exactly on every sukun." if attempt else ""),
                "response_format":"mp3","speed":0.95},key,binary=True)
            if len(clip)<500: raise ValueError("Empty speech recording")
            with tempfile.TemporaryDirectory() as tmp:
                path=Path(tmp)/"candidate.mp3"; path.write_bytes(clip)
                seconds=float(subprocess.check_output(["ffprobe","-v","error","-show_entries","format=duration","-of","default=noprint_wrappers=1:nokey=1",str(path)],text=True).strip())
            if not 0.2<=seconds<=max(4,3*len(re.findall(TOKEN,t["spoken"]))):
                raise ValueError("Unexpected word-recording duration")
            review=review_audio(clip,key)
            validate(review,t["spoken"])
            target=DEST/(t["id"]+".mp3")
            temporary=target.with_suffix(".accepted.tmp")
            temporary.write_bytes(clip); temporary.replace(target)
            return {"ar":t["ar"],"spoken":t["spoken"],"speechInput":spoken,"file":target.name,
              "signature":signature,"seconds":round(seconds,2),"transcript":review.get("heard_arabic",""),
              "verifiedTranscript":review.get("heard_arabic",""),"revision":t["revision"],"generation_engine":"speech",
              "generation_model":t.get("generation_model",SPEECH_MODEL),"voice":"cedar",
              "audioSHA256":hashlib.sha256(clip).hexdigest(),"audioReview":review,"speechAttempts":attempt+1}
        except Exception as error:
            last=str(error)[:180] if type(error) is ValueError else type(error).__name__
            if attempt<3: time.sleep(1+attempt)
    raise RuntimeError("Literal speech repair not accepted: "+last)

def probe():
    key=os.environ.get("OPENAI_API_KEY")
    if not key: raise ValueError("Configured API key missing")
    clip=post("https://api.openai.com/v1/audio/speech",{"model":SPEECH_MODEL,"voice":"cedar","input":"بَلَدْ","response_format":"mp3","instructions":INSTRUCTIONS},key,binary=True)
    if len(clip)<500: raise ValueError("Speech endpoint probe failed")
    print("PASS: dedicated Speech API accepts Cedar",flush=True)

if __name__=="__main__": probe()
