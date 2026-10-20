"""Generate exactly three Cedar audition clips; never prints credentials."""
import base64
import html
import json
import os
from pathlib import Path
import re
import time
import wave

MODEL = "gpt-realtime-2.1-mini"
IDS = ["mosa-m10-s1-s1", "mosa-m10-s1-s2", "mosa-m10-s2-s3"]
RATE = 24000
OUT = Path("cedar-samples")


def sentences(source):
    result = []
    decoder = json.JSONDecoder()
    for sid in IDS:
        match = re.search(r'\{\s*"id"\s*:\s*"' + re.escape(sid) + r'"', source)
        if not match:
            raise ValueError("Missing source sentence: " + sid)
        entry, _ = decoder.raw_decode(source[match.start():])
        result.append({k: entry[k] for k in ("id", "en", "ar")})
    return result


def generate(entry, key):
    import websocket
    # Independent sessions avoid reading previous sentences or conversation history.
    ws = websocket.create_connection(
        "wss://api.openai.com/v1/realtime?model=" + MODEL,
        header=["Authorization: Bearer " + key], timeout=30,
    )
    chunks, transcript, usage = [], "", {}
    deadline = time.monotonic() + 90
    try:
        ws.send(json.dumps({"type": "session.update", "session": {
            "type": "realtime", "output_modalities": ["audio"],
            "instructions": "Read the user's Arabic text verbatim, once, in clear Modern Standard Arabic. Use a calm, natural teaching voice at a slightly slower pace. Preserve the supplied vowels. Do not translate, explain, greet, or add any words. Do not correct or paraphrase the text. Preserve its grammatical endings and read every word through the end of the sentence." + entry.get("pronunciation_instructions", ""),
            "audio": {"output": {"voice": "cedar", "format": {"type": "audio/pcm", "rate": RATE}}},
        }}))
        requested = False
        while time.monotonic() < deadline:
            event = json.loads(ws.recv())
            kind = event.get("type")
            if kind == "error":
                # Codes suffice for diagnosis; do not log request headers or full errors.
                raise RuntimeError("OpenAI error: " + str(event.get("error", {}).get("code", "unknown")))
            if kind == "session.updated" and not requested:
                ws.send(json.dumps({"type": "conversation.item.create", "item": {
                    "type": "message", "role": "user",
                    "content": [{"type": "input_text", "text": entry["ar"]}],
                }}))
                ws.send(json.dumps({"type": "response.create", "response": {
                    "output_modalities": ["audio"], "max_output_tokens": 1024,
                }}))
                requested = True
            elif kind == "response.output_audio.delta":
                chunks.append(base64.b64decode(event["delta"], validate=True))
                if sum(map(len, chunks)) > RATE * 2 * 30:
                    raise RuntimeError("Sample exceeded 30 seconds; stopped")
            elif kind == "response.output_audio_transcript.done":
                transcript = event.get("transcript", "")
            elif kind == "response.done":
                response = event["response"]
                if response.get("status") != "completed":
                    raise RuntimeError("Audio response did not complete")
                usage = response.get("usage", {})
                break
        else:
            raise RuntimeError("Audio response timed out")
    finally:
        ws.close()
    pcm = b"".join(chunks)
    if len(pcm) < RATE or len(pcm) % 2:
        raise RuntimeError("Missing or invalid PCM audio")
    name = entry["id"] + ".wav"
    with wave.open(str(OUT / name), "wb") as audio:
        audio.setnchannels(1)
        audio.setsampwidth(2)
        audio.setframerate(RATE)
        audio.writeframes(pcm)
    return {**entry, "file": name, "seconds": round(len(pcm) / (RATE * 2), 2),
            "transcript": transcript, "usage": usage}


def main():
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", default="index.html")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()
    entries = sentences(Path(args.source).read_text())
    if args.dry_run:
        print(json.dumps(entries, ensure_ascii=False, indent=2))
        return
    key = os.environ.get("OPENAI_API_KEY")
    if not key:
        raise RuntimeError("OPENAI_API_KEY repository secret is missing")
    OUT.mkdir(exist_ok=True)
    records = []
    for entry in entries:
        print("Generating " + entry["id"], flush=True)
        record = generate(entry, key)
        records.append(record)
        (OUT / "manifest.json").write_text(json.dumps({"model": MODEL, "voice": "cedar", "samples": records}, ensure_ascii=False, indent=2))
        print("Saved " + record["file"] + " (" + str(record["seconds"]) + " seconds)", flush=True)
    cards = "".join('<section><p>' + html.escape(r["en"]) + '</p><p lang="ar" dir="rtl">' + html.escape(r["ar"]) + '</p><audio controls preload="none" src="' + r["file"] + '"></audio></section>' for r in records)
    (OUT / "index.html").write_text('<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>MoSA Cedar samples</title><style>body{max-width:700px;margin:32px auto;padding:20px;font:18px system-ui;background:#faf8f3;color:#203b48}section{background:white;padding:20px;margin:20px 0;border-radius:14px}p[lang=ar]{font-size:28px;line-height:1.8}audio{width:100%}</style><h1>MoSA · Cedar samples</h1><p>AI-generated audio · Modern Standard Arabic · ' + MODEL + '</p>' + cards + '</html>')


if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        # Avoid dumping network exception representations that could contain headers.
        if isinstance(error, (RuntimeError, ValueError)):
            print(str(error))
        else:
            print("Sample generation failed: " + type(error).__name__)
        raise SystemExit(1)
