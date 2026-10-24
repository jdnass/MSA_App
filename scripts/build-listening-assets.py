"""Re-encode legacy recordings for continuous listening; never generate speech."""
import json
import pathlib
import subprocess

root = pathlib.Path(__file__).resolve().parent.parent
output = root / "audio/listening-legacy"
output.mkdir(exist_ok=True)
inventory = json.loads(subprocess.check_output(
    ["node", "scripts/check-listening.cjs", "--inventory"], cwd=root
))
mapping = {}
for entry in inventory:
    source = entry["src"]
    destination = output / (pathlib.Path(source).stem + ".mp3")
    subprocess.run([
        "ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(root / source),
        "-ar", "24000", "-ac", "1", "-c:a", "libmp3lame", "-b:a", "64k", str(destination)
    ], check=True)
    mapping[source] = "./" + str(destination.relative_to(root))
(root / "listening-legacy.js").write_text(
    "/* Format-compatible copies of existing recordings; no new speech. */\n"
    + "window.MOSA_LISTENING_LEGACY=" + json.dumps(mapping, ensure_ascii=False) + ";\n"
)
subprocess.run([
    "ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-f", "lavfi", "-i",
    "anullsrc=r=24000:cl=mono", "-t", "3.1", "-c:a", "libmp3lame", "-b:a", "64k",
    str(root / "audio/listening-silence.mp3")
], check=True)
print(f"Prepared {len(mapping)} legacy recordings and the silence asset")
