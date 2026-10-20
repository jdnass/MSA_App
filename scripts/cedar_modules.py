"""Generate cached Cedar MP3 audio for MoSA Modules sentences only."""
import concurrent.futures
import hashlib
import json
import os
from pathlib import Path
import re
import subprocess
import sys
import tempfile

import cedar_samples

ROOT = Path(__file__).resolve().parent.parent
DEST = ROOT / "audio" / "mosa-modules"
MODEL = cedar_samples.MODEL
VERSION = "cedar-msa-v1"


def signature(entry):
    return hashlib.sha256((VERSION + "\n" + MODEL + "\n" + entry["ar"]).encode()).hexdigest()


def entries():
    data = json.loads((ROOT / "module-sentences.json").read_text())
    source = (ROOT / "index.html").read_text()
    if not 1 <= len(data) <= 500 or len({s["id"] for s in data}) != len(data):
        raise ValueError("Invalid or unexpectedly large sentence list")
    decoder = json.JSONDecoder()
    for entry in data:
        if not re.fullmatch(r"mosa-m\d+-s\d+-(?:s|exchange-)\d+", entry["id"]):
            raise ValueError("Non-Module sentence in generation list")
        matches = list(re.finditer(r'\{\s*"id"\s*:\s*"' + re.escape(entry["id"]) + '"', source))
        versions = [decoder.raw_decode(source[m.start():])[0] for m in matches]
        if not any(v.get("ar") == entry["ar"] and v.get("en") == entry["en"] for v in versions):
            raise ValueError("Sentence list does not match index.html: " + entry["id"])
    return data


def normalized(text):
    text = re.sub(r"[\u064b-\u065f\u0670\u0640]", "", text)
    text = re.sub("[أإآٱ]", "ا", text).replace("ى", "ي")
    return re.sub(r"[^\w]", "", text, flags=re.UNICODE)


def one(entry, key):
    record = cedar_samples.generate(entry, key)
    if not record["transcript"] or normalized(record["transcript"]) != normalized(entry["ar"]):
        # Keep the transcript for diagnosis; do not activate a differing reading.
        (cedar_samples.OUT / (entry["id"] + ".json")).write_text(json.dumps(record, ensure_ascii=False, indent=2))
        print("Transcript mismatch " + entry["id"] + ": " + json.dumps(record["transcript"], ensure_ascii=False), flush=True)
        raise ValueError("Transcript differs from source: " + entry["id"])
    wav = cedar_samples.OUT / record["file"]
    target = DEST / (entry["id"] + ".mp3")
    temporary = target.with_suffix(".tmp.mp3")
    subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
                    "-i", str(wav), "-codec:a", "libmp3lame", "-b:a", "64k",
                    str(temporary)], check=True)
    if temporary.stat().st_size < 1000:
        raise ValueError("Invalid MP3: " + entry["id"])
    temporary.replace(target)
    return {**record, "file": target.name, "signature": signature(entry)}


def write_manifest(records):
    manifest = {"model": MODEL, "voice": "cedar", "version": VERSION, "sentences": records}
    (DEST / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2))
    mapping = {sid: {"ar": r["ar"], "src": "./audio/mosa-modules/" + r["file"] + "?v=" + r["signature"][:12]}
               for sid, r in sorted(records.items())}
    (ROOT / "cedar-module-audio.js").write_text(
        "/* AI-generated Cedar recordings for MoSA Modules sentences. */\n"
        "window.MOSA_MODULE_AUDIO=" + json.dumps(mapping, ensure_ascii=False, separators=(",", ":")) + ";\n"
    )


def main():
    data = entries()
    if "--dry-run" in sys.argv:
        print("Validated " + str(len(data)) + " MoSA Modules sentences")
        return
    key = os.environ.get("OPENAI_API_KEY")
    if not key:
        raise ValueError("OPENAI_API_KEY repository secret is missing")
    DEST.mkdir(parents=True, exist_ok=True)
    manifest_path = DEST / "manifest.json"
    previous = json.loads(manifest_path.read_text()).get("sentences", {}) if manifest_path.exists() else {}
    valid_ids = {s["id"] for s in data}
    records = {sid: r for sid, r in previous.items() if sid in valid_ids}
    pending = [s for s in data if records.get(s["id"], {}).get("signature") != signature(s)
               or not (DEST / records[s["id"]]["file"]).exists()]
    print(str(len(pending)) + " recordings to generate; " + str(len(data) - len(pending)) + " cached", flush=True)
    failures = []
    with tempfile.TemporaryDirectory() as temporary:
        cedar_samples.OUT = Path(temporary)
        with concurrent.futures.ThreadPoolExecutor(max_workers=1) as pool:
            tasks = {pool.submit(one, s, key): s for s in pending}
            for task in concurrent.futures.as_completed(tasks):
                entry = tasks[task]
                try:
                    record = task.result()
                    records[entry["id"]] = record
                    write_manifest(records)
                    print("Saved " + entry["id"] + " (" + str(record["seconds"]) + "s)", flush=True)
                except Exception as error:
                    # No HTTP headers or key-bearing exception objects are printed.
                    detail = str(error) if type(error) in (RuntimeError, ValueError) else type(error).__name__
                    print("Failed " + entry["id"] + ": " + detail, flush=True)
                    failures.append(entry["id"])
        # Save rejected transcripts/recordings to the workflow artifact for diagnosis.
        if failures:
            import shutil
            shutil.copytree(temporary, ROOT / "cedar-review", dirs_exist_ok=True)
    write_manifest(records)
    completed = sum(records.get(s["id"], {}).get("signature") == signature(s)
                    and (DEST / records[s["id"]]["file"]).exists() for s in data)
    print("Coverage: " + str(completed) + "/" + str(len(data)), flush=True)
    if failures or completed != len(data):
        raise ValueError("Incomplete Cedar generation: " + ", ".join(failures))


if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        print(str(error) if isinstance(error, ValueError) else "Generation failed: " + type(error).__name__)
        raise SystemExit(1)
