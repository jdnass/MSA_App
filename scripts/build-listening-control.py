"""Build a conventional MP3 control from an existing recording; no new speech."""
from pathlib import Path
import subprocess
import tempfile

root = Path(__file__).resolve().parent.parent
output = root / 'audio/listening-control.mp3'
with tempfile.TemporaryDirectory() as work:
    cycle = Path(work) / 'cycle.wav'
    subprocess.run([
        'ffmpeg', '-hide_banner', '-loglevel', 'error', '-y',
        '-i', str(root / 'audio/listening-legacy/hot.mp3'),
        '-af', 'apad=pad_dur=3', '-ar', '24000', '-ac', '1', str(cycle)
    ], check=True)
    subprocess.run([
        'ffmpeg', '-hide_banner', '-loglevel', 'error', '-y',
        '-stream_loop', '-1', '-i', str(cycle), '-t', '120',
        '-ar', '24000', '-ac', '1', '-c:a', 'libmp3lame', '-b:a', '64k',
        '-write_xing', '1', '-map_metadata', '-1', str(output)
    ], check=True)
print(f'Created {output.name}: {output.stat().st_size} bytes')
