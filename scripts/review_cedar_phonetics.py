"""Direct audio-input review of all Part 1 Cedar clips. Does not modify audio."""
import base64, collections, concurrent.futures, hashlib, json, os, re, subprocess, threading, time, urllib.request, urllib.error
from pathlib import Path
ROOT=Path(__file__).resolve().parent.parent
OUT=ROOT/"reports"/"cedar-part1-phonetic-review.json"
MODEL="gpt-audio-1.5"
DEADLINE=time.monotonic()+18*60
LOCK=threading.Lock()
CALLS=0
USAGE={"prompt_tokens":0,"completion_tokens":0,"audio_input_tokens":0}
SYSTEM="""You are auditing the actual SOUND of short Modern Standard Arabic vocabulary recordings.
Listen to the entire attached audio. Do not merely transcribe it, infer its sound from the supplied spelling, or correct it in your head.
The target Arabic is the exact card text. IMPORTANT: an audible FINAL short vowel or tanween on ANY word is unwanted unless explicitly marked in that target word, even if normal Arabic grammar would call for it. Preserve explicitly written endings.
Do not flag unmarked INTERNAL vowels, root-letter long vowels, the long -uun/-iin of a written plural, or letters actually present in the target.
An unmarked taa marbuuta should end in pausal a/ah, not at, atun, atan, atin, atu, ati, or ata. A supplied final damma on a verb must be pronounced.
Tanween on either side of a supporting final alif is equivalent; e.g. فعلاً and فِعْلًا both require -an.
Slashes mean alternative target forms with a pause, not permission to add a spoken connector.
Identify extra sentences or words, repetitions, wrong consonants/words, and unmarked final vowels. Do not mistake the next word's article for a case ending.
Give phonetic evidence of what you HEAR: especially word endings. If you cannot reliably hear an ending, mark uncertain; do not infer correctness or an error solely from grammar.
Return ONLY a compact JSON object with keys:
heard_phonetic (short Latin transliteration of the whole actual clip, INCLUDING added speech),
verdict (matches, needs_review, or uncertain),
issues (array of objects with type in unwanted_ending, extra_speech, repetition, wrong_word, uncertain; word; heard; confidence high/medium/low),
notes (brief).
Use at most 5 issues. A matches verdict means only that you detected no mismatch, not a certification."""
PRIORITY=set(json.loads((ROOT/"phonetic-priority.json").read_text()))

def assess(t,r,key):
    global CALLS
    path=ROOT/"audio/cedar-vocab"/r["file"]
    clip=path.read_bytes()
    request_body={"model":MODEL,"modalities":["text"],"temperature":0,"max_completion_tokens":500,"store":False,
      "messages":[{"role":"system","content":SYSTEM},{"role":"user","content":[
        {"type":"text","text":"Compare the sound with this exact target: "+t["ar"]},
        {"type":"input_audio","input_audio":{"data":base64.b64encode(clip).decode(),"format":"mp3"}}]}]}
    for attempt in range(3):
        if time.monotonic()>DEADLINE: raise RuntimeError("Review deadline reached")
        with LOCK:
            if CALLS>=1000: raise RuntimeError("Review request limit reached")
            CALLS+=1
        req=urllib.request.Request("https://api.openai.com/v1/chat/completions",data=json.dumps(request_body).encode(),
            headers={"Authorization":"Bearer "+key,"Content-Type":"application/json"})
        try:
            with urllib.request.urlopen(req,timeout=90) as response: result=json.loads(response.read())
            usage=result.get("usage",{})
            with LOCK:
                for field in ("prompt_tokens","completion_tokens"): USAGE[field]+=usage.get(field,0)
                USAGE["audio_input_tokens"]+=usage.get("prompt_tokens_details",{}).get("audio_tokens",0)
            text=result["choices"][0]["message"].get("content","")
            if isinstance(text,list): text="".join(x.get("text","") for x in text)
            match=re.search(r"\{[\s\S]*\}",text)
            if not match: raise ValueError("Review response was not JSON")
            review=json.loads(match.group())
            if review.get("verdict") not in ("matches","needs_review","uncertain") or not isinstance(review.get("issues"),list): raise ValueError("Invalid review schema")
            return {"id":t["id"],"en":t.get("en",""),"ar":t["ar"],"file":r["file"],"signature":r["signature"],
                "audioSHA256":hashlib.sha256(clip).hexdigest(),"priority":t["id"] in PRIORITY,"review":review,"usage":usage}
        except urllib.error.HTTPError as error:
            code=error.code
            if code in (400,401,403,404):
                try:
                    detail=json.loads(error.read()).get("error",{})
                    safe="; code="+str(detail.get("code"))+"; parameter="+str(detail.get("param"))
                except Exception: safe=""
                raise RuntimeError("Audio reviewer unavailable: HTTP "+str(code)+safe)
            reason="HTTP "+str(code)
        except (ValueError,KeyError) as error: reason=type(error).__name__
        except Exception as error:
            if type(error) is RuntimeError: raise
            reason=type(error).__name__
        if attempt<2: time.sleep(3*(attempt+1))
    raise RuntimeError("Review request failed: "+reason)

def checked(t,records,key):
    try:
        r=records.get(t["id"])
        if not r: raise RuntimeError("Recording missing")
        return assess(t,r,key)
    except Exception as error:
        reason=str(error) if type(error) is RuntimeError else type(error).__name__
        return {"id":t["id"],"en":t.get("en",""),"ar":t["ar"],"priority":t["id"] in PRIORITY,"error":reason}

def save(rows,total,finished):
    counts=collections.Counter("unavailable" if "error" in r else r["review"]["verdict"] for r in rows)
    issues=collections.Counter(i.get("type","unknown") for r in rows for i in r.get("review",{}).get("issues",[]))
    report={"scope":"alkitaab1","model":MODEL,"method":"Each MP3 is sent as input_audio with the exact target text for audible-ending, added-speech, repetition, and word review.",
      "total":total,"reviewed":len(rows),"finished":finished,"summary":dict(counts),"issueCounts":dict(issues),
      "requests":CALLS,"usage":dict(USAGE),
      "limitations":"Automated audio-model judgments, not human listening or phonetic certification. Confidence and uncertainty are preserved. No audio or app content changed.",
      "rows":sorted(rows,key=lambda r:r["id"])}
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(json.dumps(report,ensure_ascii=False,indent=2)+"\n")
    if len(rows)==20 or len(rows)%100==0:
        subprocess.run(["git","add",str(OUT)],check=True)
        subprocess.run(["git","commit","-m","Checkpoint Part 1 audio review: "+str(len(rows))],check=True,stdout=subprocess.DEVNULL)
        subprocess.run(["git","push","origin","HEAD:audio-audit/part1-phonetic"],check=True,stdout=subprocess.DEVNULL)
    return report

def main():
    targets=json.loads((ROOT/"cedar-vocab-targets.json").read_text())
    scope=set(targets["scope"]["ids"])
    entries=[t for t in targets["entries"] if t["id"] in scope]
    entries.sort(key=lambda t:(t["id"] not in PRIORITY,t["id"]))
    if len(entries)!=790: raise ValueError("Part 1 scope changed; inspect before bulk review")
    records={}
    for path in (ROOT/"audio/cedar-vocab/manifests").glob("*.json"): records.update(json.loads(path.read_text()))
    key=os.environ.get("OPENAI_API_KEY")
    if not key: raise ValueError("Configured API credential missing")
    # Check capability and authentication once before dispatching the bulk review.
    first=assess(entries[0],records[entries[0]["id"]],key)
    rows=[first]; save(rows,len(entries),False)
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        tasks=[pool.submit(checked,t,records,key) for t in entries[1:]]
        for task in concurrent.futures.as_completed(tasks):
            rows.append(task.result())
            if len(rows)%20==0 or rows[-1].get("priority"):
                report=save(rows,len(entries),False)
                print(json.dumps({"reviewed":len(rows),"total":len(entries),"summary":report["summary"]}),flush=True)
    report=save(rows,len(entries),True)
    print(json.dumps({"reviewed":len(rows),"summary":report["summary"],"issueCounts":report["issueCounts"]}),flush=True)

if __name__=="__main__":
    try: main()
    except Exception as error:
        print(str(error) if type(error) in (RuntimeError,ValueError) else type(error).__name__,flush=True)
        raise SystemExit(1)
