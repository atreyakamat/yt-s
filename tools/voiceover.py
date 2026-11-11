#!/usr/bin/env python3
"""Generate voiceover MP3s for the reels, one per vid-xx.md, timed to the scenes.

    python3 tools/voiceover.py              # every reel
    python3 tools/voiceover.py vid-01       # one reel
    python3 tools/voiceover.py --engine espeak vid-01

Engines (pick with --engine or VO_ENGINE; default: kokoro if downloaded, else piper):
  kokoro     free, offline, the most human-sounding. One-time setup (in the repo root):
               pip install kokoro-onnx soundfile
               curl -L -o tools/voices/kokoro-v1.0.onnx https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/kokoro-v1.0.onnx
               curl -L -o tools/voices/voices-v1.0.bin https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/voices-v1.0.bin
             Voice: KOKORO_VOICE (default af_heart; e.g. am_michael, bm_george). Pace: KOKORO_SPEED (default 1.08).
  piper      free, offline, clear but more robotic. One-time setup:
               pip install piper-tts
               python3 -m piper.download_voices en_US-lessac-medium --data-dir tools/voices
             Another voice: set PIPER_VOICE=en_US-ryan-high (see the Piper voice list).
  espeak     robotic, for a quick check only (needs espeak-ng installed).
  test-tone  silent-ish beeps with the right length, only to check timing.

Each scene's line is spoken, then sped up (at most 1.3x) if it is longer than its scene,
and placed at the scene's start time. Output: assets/vo/<id>.mp3 (gitignored).
If a line still doesn't fit at 1.3x the script says so: shorten that `vo:` line.
"""
import argparse
import json
import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MAX_TEMPO = 1.3


def run(cmd, **kw):
    return subprocess.run(cmd, check=True, **kw)


def duration(path):
    out = run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(path)], capture_output=True, text=True)
    return float(out.stdout.strip())


VOICES = ROOT / "tools" / "voices"
KOKORO_MODEL = VOICES / "kokoro-v1.0.onnx"
KOKORO_VOICES = VOICES / "voices-v1.0.bin"
_kokoro = None


def default_engine():
    """Kokoro (natural, free) when its model is downloaded, else Piper."""
    if os.environ.get("VO_ENGINE"):
        return os.environ["VO_ENGINE"]
    return "kokoro" if KOKORO_MODEL.exists() and KOKORO_VOICES.exists() else "piper"


def speak(engine, text, wav):
    global _kokoro
    if engine == "kokoro":
        if not KOKORO_MODEL.exists():
            sys.exit(f"Kokoro model missing: {KOKORO_MODEL}\nSee the header of tools/voiceover.py for the download.")
        import soundfile
        from kokoro_onnx import Kokoro

        if _kokoro is None:
            _kokoro = Kokoro(str(KOKORO_MODEL), str(KOKORO_VOICES))
        voice = os.environ.get("KOKORO_VOICE", "af_heart")
        speed = float(os.environ.get("KOKORO_SPEED", "1.08"))
        samples, rate = _kokoro.create(text, voice=voice, speed=speed, lang="en-us")
        soundfile.write(str(wav), samples, rate)
    elif engine == "piper":
        voice = os.environ.get("PIPER_VOICE", "en_US-lessac-medium")
        model = ROOT / "tools" / "voices" / f"{voice}.onnx"
        if not model.exists():
            sys.exit(f"Voice model missing: {model}\nRun: python3 -m piper.download_voices {voice} --data-dir tools/voices")
        run([sys.executable, "-m", "piper", "--model", str(model), "--output_file", str(wav)], input=text, text=True)
    elif engine == "espeak":
        if not shutil.which("espeak-ng"):
            sys.exit("espeak-ng not found. Install it, or use --engine piper.")
        run(["espeak-ng", "-s", "165", "-w", str(wav), text])
    elif engine == "test-tone":
        secs = max(0.6, len(text.split()) / 2.6)  # ~156 words per minute
        run(["ffmpeg", "-y", "-loglevel", "error", "-f", "lavfi", "-i", f"sine=frequency=220:duration={secs}", "-ar", "22050", str(wav)])
    else:
        sys.exit(f"Unknown engine: {engine}")


def build_reel(reel, engine, tmp):
    inputs, filters, labels = [], [], []
    warnings = []
    k = 0
    for i, scene in enumerate(reel["scenes"]):
        text = scene.get("vo", "").strip()
        if not text:
            continue
        wav = tmp / f"{reel['id']}-{i}.wav"
        speak(engine, text, wav)
        length = duration(wav)
        slot = scene["dur"] - 0.15  # keep a small gap before the next scene
        tempo = 1.0
        if length > slot:
            need = length / slot
            tempo = min(need, MAX_TEMPO)
            if need > MAX_TEMPO:
                warnings.append(f"  ! scene {i + 1}: line is {length:.1f}s but the slot is {slot:.1f}s even at {MAX_TEMPO}x; shorten it: \"{text}\"")
        inputs += ["-i", str(wav)]
        delay = int(scene["at"] * 1000)
        chain = f"[{k}:a]aresample=44100,atempo={tempo:.3f},adelay={delay}|{delay}[a{k}]"
        filters.append(chain)
        labels.append(f"[a{k}]")
        k += 1
    if not labels:
        return None, warnings
    out = ROOT / "assets" / "vo" / f"{reel['id']}.mp3"
    out.parent.mkdir(parents=True, exist_ok=True)
    mix = "".join(labels) + f"amix=inputs={len(labels)}:normalize=0,apad=whole_dur={reel['duration']},atrim=0:{reel['duration']}[out]"
    run(["ffmpeg", "-y", "-loglevel", "error", *inputs, "-filter_complex", ";".join(filters + [mix]), "-map", "[out]", "-b:a", "192k", str(out)])
    return out, warnings


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("reels", nargs="*", help="e.g. vid-01 (default: all)")
    ap.add_argument("--engine", default=default_engine(), choices=["kokoro", "piper", "espeak", "test-tone"])
    args = ap.parse_args()

    # Only the requested reels must be valid: one broken script elsewhere must not silence today's voice.
    sync = ["node", "tools/sync.mjs"] + (["--only", ",".join(args.reels)] if args.reels else [])
    result = subprocess.run(sync, cwd=ROOT / "video", capture_output=True, text=True, encoding="utf-8")
    if result.returncode != 0:
        sys.exit("Script check failed:\n" + (result.stderr or result.stdout))
    reels = json.loads((ROOT / "video" / "src" / "reels.generated.json").read_text(encoding="utf-8"))
    if args.reels:
        reels = [r for r in reels if r["id"] in args.reels]
        if not reels:
            sys.exit("No matching reel.")

    bad = 0
    with tempfile.TemporaryDirectory() as d:
        for reel in reels:
            out, warnings = build_reel(reel, args.engine, Path(d))
            print(f"  ✓ {out.relative_to(ROOT)}" if out else f"  - {reel['id']}: no voiceover lines")
            for w in warnings:
                print(w)
            bad += len(warnings)
    print("\nDone." + (f" {bad} line(s) too long: shorten them and rerun." if bad else ""))


if __name__ == "__main__":
    main()
