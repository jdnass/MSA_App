"""Audit saved Part 1 vocabulary audio without changing any recording."""
import concurrent.futures, collections, json, os, re, time
from pathlib import Path
from cedar_vocabulary import norm, transcript_matches, verify_recording
ROOT=Path(__file__).resolve().parent.parent
OUT=ROOT/"reports"/"cedar-part1-audit.json"
DEADLINE=time.monotonic()+12*60
PREFIX="Independent audio check rejected extra or incorrect words: "

def tokens(s):
    return [norm(w) for w in re.findall(r"[ء-يٱ][ء-يٱ\u064b-\u065f\u0670]*",s)]

def classify(expected,heard):
    if transcript_matches(heard,expected): return "no_lexical_mismatch_detected"
    e,h=tokens(expected),tokens(heard)
    if norm(expected)==norm(heard): return "unmarked_or_changed_ending_in_transcript"
    if len(h)>len(e) and e:
        cursor=0
        for token in h:
            if cursor<len(e) and token==e[cursor]: cursor+=1
        if cursor==len(e):
            return "suspected_repetition" if len(e)==1 and h.count(e[0])>1 else "suspected_added_speech"
    return "uncertain_word_or_pronunciation"

def check(t,records,key):
    r=records.get(t["id"])
    row={"id":t["id"],"en":t.get("en",""),"ar":t["ar"],"spoken":t["spoken"]}
    if not r or not (ROOT/"audio/cedar-vocab"/r["file"]).exists():
        return {**row,"status":"missing_recording"}
    row.update(file=r["file"],seconds=r.get("seconds"),originalTranscript=r.get("transcript",""))
    row["metadataEndingFlag"]=norm(r.get("transcript",""))==norm(t["spoken"]) and not transcript_matches(r.get("transcript",""),t["spoken"])
    if r.get("verifiedTranscript") and transcript_matches(r["verifiedTranscript"],t["spoken"]):
        return {**row,"status":"no_lexical_mismatch_detected","heard":r["verifiedTranscript"],"check":"previous_independent_transcription"}
    for attempt in range(3):
        if time.monotonic()>DEADLINE: return {**row,"status":"audit_time_limit"}
        try:
            heard=verify_recording(ROOT/"audio/cedar-vocab"/r["file"],key,t["spoken"])
            return {**row,"heard":heard,"status":classify(t["spoken"],heard),"check":"new_independent_transcription"}
        except RuntimeError as error:
            if str(error).startswith(PREFIX):
                heard=str(error)[len(PREFIX):]
                return {**row,"heard":heard,"status":classify(t["spoken"],heard),"check":"new_independent_transcription"}
            reason=type(error).__name__
        except Exception as error:
            reason=type(error).__name__
        if attempt<2: time.sleep(2*(attempt+1))
    return {**row,"status":"transcription_unavailable","reason":reason}

def save(rows,scope_size,finished):
    summary=dict(collections.Counter(r["status"] for r in rows))
    report={"collection":"alkitaab1","scopeReadings":scope_size,"checked":len(rows),"finished":finished,
        "summary":summary,"metadataEndingFlags":sum(bool(r.get("metadataEndingFlag")) for r in rows),
        "limitations":"Automated transcription is not a phonetic certification. Extra speech and pronunciation flags require review; short-word recognizer errors are possible. No recordings changed.",
        "rows":sorted(rows,key=lambda r:r["id"])}
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(json.dumps(report,ensure_ascii=False,indent=2)+"\n")
    return report

def main():
    targets=json.loads((ROOT/"cedar-vocab-targets.json").read_text())
    scope=set(targets["scope"]["ids"])
    entries=[t for t in targets["entries"] if t["id"] in scope]
    records={}
    for p in (ROOT/"audio/cedar-vocab/manifests").glob("*.json"): records.update(json.loads(p.read_text()))
    key=os.environ.get("OPENAI_API_KEY")
    if not key: raise ValueError("Missing configured API credential")
    rows=[]
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        tasks=[pool.submit(check,t,records,key) for t in entries]
        for task in concurrent.futures.as_completed(tasks):
            rows.append(task.result())
            if len(rows)%25==0:
                report=save(rows,len(entries),False)
                print(json.dumps({"checked":len(rows),"total":len(entries),"flags":report["summary"]}),flush=True)
    report=save(rows,len(entries),True)
    print(json.dumps({"checked":report["checked"],"summary":report["summary"]}),flush=True)

if __name__=="__main__": main()
