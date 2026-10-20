"""Generate cached Cedar vocabulary recordings, with bounded retries and budget."""
import concurrent.futures, hashlib, json, os, re, subprocess, tempfile, threading, time
from pathlib import Path
import cedar_samples
ROOT=Path(__file__).resolve().parent.parent
DEST=ROOT/"audio"/"cedar-vocab"
LOCK=threading.Lock()
STOP=threading.Event()
NEXT=0.0
DEADLINE=time.monotonic()+20*60
SPENT=0.0
ATTEMPTS=0

def sig(t):
    return hashlib.sha256(("cedar-vocab-v1\n"+cedar_samples.MODEL+"\n"+t["spoken"]).encode()).hexdigest()

def norm(s):
    s=re.sub(r"[\u0610-\u061a\u064b-\u065f\u0670\u0640\u06d6-\u06ed]","",s)
    return re.sub(r"[^\w]","",re.sub("[أإآٱ]","ا",s).replace("ى","ي"))

def slot():
    global NEXT
    with LOCK:
        if STOP.is_set() or SPENT>=9.8 or time.monotonic()>=DEADLINE:
            STOP.set()
            raise RuntimeError("Stopped at budget or account-credit guard")
        now=time.monotonic()
        wait=max(0,NEXT-now)
        NEXT=max(NEXT,now)+0.21
    time.sleep(wait)

def one(t,key):
    global SPENT,ATTEMPTS
    last=""
    for attempt in range(4):
        slot()
        request={"id":t["id"],"ar":t["spoken"],"max_output_tokens":512 if len(t["spoken"])>30 else 256,"min_audio_seconds":0.12}
        request["pronunciation_instructions"]=" This is vocabulary pronunciation, not conversation. Speak only the supplied Arabic once. Do not name letters, translate, answer questions, add articles, or correct grammar. Read slash-separated alternatives with a short pause without adding words. Do not speak ellipses or punctuation. English meaning for silent context only: "+t.get("en","")[:140]+"."
        syllables={"لِ":"li","بِ":"bi","كَ":"ka","وَ":"wa","فَ":"fa","سَ":"sa"}
        if t["spoken"] in syllables:
            request["pronunciation_instructions"]+=" Pronounce the syllable "+syllables[t["spoken"]]+", not the letter name."
        if attempt:
            request["pronunciation_instructions"]+=" Preserve every supplied letter and vowel exactly."
        try:
            with LOCK: ATTEMPTS+=1
            r=cedar_samples.generate(request,key)
            u=r.get("usage",{})
            a=u.get("output_token_details",{}).get("audio_tokens",0)
            cost=(u.get("input_tokens",0)*0.6+a*20+max(0,u.get("output_tokens",0)-a)*2.4)/1000000
            with LOCK: SPENT+=cost
            if norm(r["transcript"])!=norm(t["spoken"]):
                last="Transcript mismatch: "+r["transcript"]
                continue
            target=DEST/(t["id"]+".mp3")
            temporary=target.with_suffix(".tmp.mp3")
            wav=cedar_samples.OUT/r["file"]
            subprocess.run(["ffmpeg","-hide_banner","-loglevel","error","-y","-i",str(wav),"-codec:a","libmp3lame","-b:a","64k",str(temporary)],check=True)
            if temporary.stat().st_size<500: raise RuntimeError("Invalid MP3")
            temporary.replace(target)
            wav.unlink(missing_ok=True)
            return {"ar":t["ar"],"spoken":t["spoken"],"file":target.name,"signature":sig(t),"seconds":r["seconds"],"transcript":r["transcript"],"usage":u}
        except Exception as e:
            last=str(e) if type(e) is RuntimeError else type(e).__name__
            if "insufficient_quota" in last:
                STOP.set()
                raise RuntimeError("OpenAI account has insufficient credit")
            if "guard" in last: raise
            if "rate_limit" in last or getattr(e,"status_code",None)==429: time.sleep(min(45,8*(attempt+1)))
            elif attempt<3: time.sleep(1)
    raise RuntimeError(last[:500])

def save(records,targets,failed):
    shards={}
    for k,v in records.items(): shards.setdefault(k[3],{})[k]=v
    for k,rows in shards.items(): (DEST/"manifests"/(k+".json")).write_text(json.dumps(rows,ensure_ascii=False,separators=(",",":")))
    mapping={r["ar"]:"./audio/cedar-vocab/"+r["file"]+"?v="+r["signature"][:12] for r in records.values()}
    (ROOT/"cedar-vocab-audio.js").write_text("/* AI-generated Cedar vocabulary, extended forms and broken plurals. */\nwindow.MOSA_VOCAB_IDS="+json.dumps(dict.fromkeys(targets["ids"],True),separators=(",",":"))+";\nwindow.MOSA_VOCAB_AUDIO="+json.dumps(mapping,ensure_ascii=False,separators=(",",":"))+";\n")
    scope=targets.get("scope")
    scoped_ids=set(scope["ids"]) if scope else {t["id"] for t in targets["entries"]}
    scope_remaining=len(scoped_ids-set(records))
    report={"scope":scope["collectionId"] if scope else "all","scopeTargets":len(scoped_ids),"scopeCompleted":len(scoped_ids & set(records)),"scopeRemaining":scope_remaining,"model":cedar_samples.MODEL,"voice":"cedar","targets":len(targets["entries"]),"completed":len(records),"remaining":len(targets["entries"])-len(records),"failed":failed,"estimatedGenerationCostUSD":round(SPENT,6),"requests":ATTEMPTS,"cards":targets["cardCount"],"verbTrees":targets["practiceVerbs"],"brokenPluralPairs":targets["brokenPluralPairs"]}
    (DEST/"summary.json").write_text(json.dumps(report,ensure_ascii=False,indent=2))

def main():
    global SPENT,ATTEMPTS
    targets=json.loads((ROOT/"cedar-vocab-targets.json").read_text())
    data=targets["entries"]
    scope=targets.get("scope")
    scoped_ids=set(scope["ids"]) if scope else {t["id"] for t in data}
    selected=[t for t in data if t["id"] in scoped_ids]
    if not selected or len(selected)!=len(scoped_ids): raise ValueError("Invalid collection scope")
    if not 1000<=len(data)<=10000 or len({t["id"] for t in data})!=len(data): raise ValueError("Invalid vocabulary target count")
    key=os.environ.get("OPENAI_API_KEY")
    if not key: raise ValueError("OPENAI_API_KEY secret is missing")
    (DEST/"manifests").mkdir(parents=True,exist_ok=True)
    if (DEST/"summary.json").exists():
        p=json.loads((DEST/"summary.json").read_text())
        SPENT=p.get("estimatedGenerationCostUSD",0)
        ATTEMPTS=p.get("requests",0)
    records={}
    for p in (DEST/"manifests").glob("*.json"): records.update(json.loads(p.read_text()))
    wanted={t["id"] for t in data}
    records={k:v for k,v in records.items() if k in wanted}
    pending=[t for t in selected if records.get(t["id"],{}).get("signature")!=sig(t) or not (DEST/records[t["id"]]["file"]).exists()]
    failures={}
    print(str(len(data))+" targets; "+str(len(pending))+" missing; "+str(len(records))+" cached",flush=True)
    with tempfile.TemporaryDirectory() as temp:
        cedar_samples.OUT=Path(temp)
        with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
            tasks={pool.submit(one,t,key):t for t in pending}
            completed=0
            for task in concurrent.futures.as_completed(tasks):
                t=tasks[task]
                try: records[t["id"]]=task.result()
                except Exception as e:
                    detail=str(e) if type(e) is RuntimeError else type(e).__name__
                    failures[t["id"]]={"ar":t["ar"],"reason":detail}
                    if not STOP.is_set(): print("Failed "+t["id"]+": "+detail,flush=True)
                completed+=1
                if completed%10==0 or completed==len(pending):
                    save(records,targets,failures)
                    print("Coverage "+str(len(records))+"/"+str(len(data))+"; estimate $"+str(round(SPENT,3)),flush=True)
    save(records,targets,failures)
    missing=[t for t in selected if t["id"] not in records or records[t["id"]].get("signature")!=sig(t) or not (DEST/records[t["id"]]["file"]).exists()]
    if missing: raise ValueError("Incomplete scoped vocabulary generation: "+str(len(missing))+" missing")
    print("PASS: selected vocabulary audio generated",flush=True)

if __name__=="__main__":
    try: main()
    except Exception as e:
        print(str(e) if type(e) in (RuntimeError,ValueError) else "Generation failed: "+type(e).__name__)
        raise SystemExit(1)
