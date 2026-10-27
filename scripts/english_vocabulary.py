"""Generate reusable English Cedar clips; preserve existing Arabic assets."""
import concurrent.futures, json, os, shutil, subprocess, tempfile, time, urllib.request
import imageio_ffmpeg
FFMPEG=shutil.which("ffmpeg") or imageio_ffmpeg.get_ffmpeg_exe()
from pathlib import Path
ROOT=Path(__file__).resolve().parent.parent
DEST=ROOT/'audio'/'english-vocab'

def generate(t):
    target=DEST/(t['id']+'.mp3')
    if target.exists(): return t
    request=urllib.request.Request('https://api.openai.com/v1/audio/speech',data=json.dumps({
        'model':'gpt-4o-mini-tts','voice':'cedar','input':t['en'],
        'instructions':'Read only this English vocabulary meaning once in a clear, natural American English voice. Do not introduce it, translate it, explain it, or add words. Pause briefly between alternative meanings.',
        'response_format':'mp3','speed':0.95}).encode(),headers={
        'Authorization':'Bearer '+os.environ['OPENAI_API_KEY'],'Content-Type':'application/json'})
    for attempt in range(3):
        try:
            with urllib.request.urlopen(request,timeout=90) as response: clip=response.read()
            with tempfile.TemporaryDirectory() as directory:
                raw=Path(directory)/'raw.mp3'; raw.write_bytes(clip)
                output=Path(directory)/'out.mp3'
                # Match the continuous player's MPEG-2 Layer III / 24kHz / mono format.
                subprocess.run([FFMPEG,'-hide_banner','-loglevel','error','-y','-i',str(raw),'-ar','24000','-ac','1','-codec:a','libmp3lame','-b:a','64k',str(output)],check=True)
                pcm=subprocess.check_output([FFMPEG,'-v','error','-i',str(output),'-ar','24000','-ac','1','-f','s16le','pipe:1'])
                duration=len(pcm)/(24000*2)
                if not 0.15<duration<25 or output.stat().st_size<500: raise ValueError('Invalid English clip')
                target.write_bytes(output.read_bytes())
            return t
        except Exception as e:
            if attempt==2: raise RuntimeError(t['id']+': '+type(e).__name__) from None
            time.sleep(3*(attempt+1))

def save(targets):
    available={t['en']:'./audio/english-vocab/'+t['id']+'.mp3' for t in targets if (DEST/(t['id']+'.mp3')).exists()}
    (ROOT/'english-vocab-audio.js').write_text('window.MOSA_ENGLISH_AUDIO='+json.dumps(available,ensure_ascii=False,separators=(',',':'))+';\n')
    return len(available)

def main():
    targets=json.loads((ROOT/'english-vocab-targets.json').read_text())
    if not 100<=len(targets)<=1500: raise ValueError('Unexpected scope')
    DEST.mkdir(parents=True,exist_ok=True)
    failed=[]
    try:
        with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
            futures={pool.submit(generate,t):t for t in targets}
            for i,future in enumerate(concurrent.futures.as_completed(futures),1):
                try: future.result()
                except Exception as e: failed.append(str(e))
                if i%25==0: print(f'Processed {i}/{len(targets)}; available {save(targets)}',flush=True)
    finally: count=save(targets)
    print(f'English recordings: {count}/{len(targets)}; failures: {len(failed)}')
    if failed: raise RuntimeError('; '.join(failed[:10]))

if __name__=='__main__': main()
