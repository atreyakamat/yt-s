#!/usr/bin/env python3
"""Synthesises the sound effects the reels use, so there is nothing to download
and no licence to worry about. Writes assets/sfx/<name>.mp3 (needs numpy + ffmpeg).

    python3 tools/make_sfx.py
"""
import subprocess
import tempfile
import wave
from pathlib import Path

import numpy as np

SR = 44100
OUT = Path(__file__).resolve().parent.parent / "assets" / "sfx"
rng = np.random.default_rng(7)  # fixed seed: identical files every run


def t(sec):
    return np.linspace(0, sec, int(SR * sec), endpoint=False)


def env(sig, attack=0.005, release=0.1):
    n = len(sig)
    e = np.ones(n)
    a, r = int(SR * attack), int(SR * release)
    e[:a] = np.linspace(0, 1, a)
    e[-r:] = np.linspace(1, 0, r)
    return sig * e


def lowpass(sig, k):
    kernel = np.ones(k) / k
    return np.convolve(sig, kernel, mode="same")


def whoosh():
    x = t(0.45)
    noise = rng.standard_normal(len(x))
    sweep = lowpass(noise, 40) * 6 + lowpass(noise, 8) * np.linspace(0, 1, len(x))
    body = np.sin(np.pi * x / x[-1]) ** 2
    return env(sweep * body, 0.02, 0.15)


def slice_():
    x = t(0.35)
    noise = rng.standard_normal(len(x))
    return env((noise - lowpass(noise, 6)) * np.linspace(1, 0.2, len(x)), 0.002, 0.2) * 0.8


def thunk():
    x = t(0.3)
    freq = np.linspace(140, 55, len(x))
    return env(np.sin(2 * np.pi * np.cumsum(freq) / SR) * np.exp(-x * 14), 0.002, 0.05)


def buzz():
    x = t(0.4)
    sig = np.sign(np.sin(2 * np.pi * 110 * x)) * 0.5 + np.sin(2 * np.pi * 165 * x) * 0.3
    return env(sig, 0.01, 0.05) * 0.6


def click():
    x = t(0.12)
    tick = np.sin(2 * np.pi * 2600 * x) * np.exp(-x * 90)
    knock = np.sin(2 * np.pi * 900 * x) * np.exp(-x * 60) * 0.6
    return env(tick + knock, 0.0005, 0.02)


def unlock():
    first = click()
    gap = np.zeros(int(SR * 0.09))
    second = thunk()[: int(SR * 0.18)] * 0.9
    return np.concatenate([first, gap, second])


def pop():
    x = t(0.18)
    freq = np.linspace(700, 280, len(x))
    return env(np.sin(2 * np.pi * np.cumsum(freq) / SR) * np.exp(-x * 20), 0.002, 0.04)


SOUNDS = {"whoosh": whoosh, "slice": slice_, "thunk": thunk, "buzz": buzz, "click": click, "unlock": unlock, "pop": pop}


def write_mp3(name, sig):
    sig = sig / max(1e-9, np.max(np.abs(sig))) * 0.9
    pcm = (sig * 32767).astype("<i2")
    with tempfile.TemporaryDirectory() as d:
        wav_path = Path(d) / f"{name}.wav"
        with wave.open(str(wav_path), "wb") as w:
            w.setnchannels(1)
            w.setsampwidth(2)
            w.setframerate(SR)
            w.writeframes(pcm.tobytes())
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", str(wav_path), "-b:a", "128k", str(OUT / f"{name}.mp3")], check=True)


if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    for name, fn in SOUNDS.items():
        write_mp3(name, fn())
        print(f"  ✓ assets/sfx/{name}.mp3")
