# Cutaway Shorts

Faceless "how things work" YouTube Shorts, built from text scripts into 1080×1920 videos with [Remotion](https://www.remotion.dev). Strategy: [STRATEGY.md](STRATEGY.md).

## Layout

```
how-things-work/<series>/vid-xx.md   one file per reel: hook, beats, exact scenes (YAML), audio, upload notes
video/                               Remotion render engine (TypeScript)
  src/visuals/                       one animated vector visual per topic (Lock.tsx, KeyGrid.tsx, ...)
  tools/sync.mjs                     reads every vid-xx.md, validates timings, copies assets
  tools/build.mjs                    renders a reel to out/
music/tracks.tsv + download.sh       music list and yt-dlp downloader (files land in music/files/, gitignored)
assets/vo, assets/sfx                voiceover and sound effects (gitignored)
assets/CREDITS.md                    every outside image/sound must be logged here
tools/chunk.sh, unchunk.sh           split big files into 45 MB parts for GitHub, and rebuild them
uploads/                             where the 45 MB parts go
out/                                 rendered MP4s (gitignored): offload to the pendrive
```

## Quick start

```bash
# 1. Install once (Node 20.19+ / 22.13+)
cd video && npm install

# 2. Music (needs yt-dlp + ffmpeg)
../music/download.sh

# 3. Preview in the browser editor
npm run dev

# 4. Render one reel, or every reel marked ready-to-build
npm run build:reel -- vid-01
npm run build:reel -- all
```

Output: `out/vid-01.mp4`. Then copy it to the pendrive.

## Sound

Three layers, all optional (the build skips whatever is missing):

| Layer | How you get it | Where it lands |
| --- | --- | --- |
| Sound effects | `python3 tools/make_sfx.py` (synthesised, already committed) | `assets/sfx/*.mp3` |
| Voiceover | `python3 tools/voiceover.py` (Piper TTS, free and offline; setup in the file header) | `assets/vo/vid-xx.mp3` (gitignored) |
| Music | `./music/download.sh` (yt-dlp) | `music/files/*.mp3` (gitignored) |

The voiceover is built scene by scene: each `vo:` line is spoken, sped up (at most 1.3x) if it is longer than its scene, and placed at the scene start. The tool tells you which line to shorten if one doesn't fit. Re-run it after editing any `vo:` line, then rebuild.

```bash
pip install piper-tts
python3 -m piper.download_voices en_US-lessac-medium --data-dir tools/voices
python3 tools/voiceover.py            # all reels (or: vid-01)
cd video && npm run build:reel -- all
```

## Reel status

| Reel | Series | Status |
| --- | --- | --- |
| vid-01 Pin tumbler lock | cut-it-open | ready-to-build |
| vid-02 Zipper | cut-it-open | ready-to-build |
| vid-03 Pen cap hole | youve-been-using-it-wrong | ready-to-build |
| vid-04 Airbag | the-1-second-machine | ready-to-build |
| vid-05 Microwave | cut-it-open | ready-to-build |
| vid-06 Self-checkout | cut-it-open | ready-to-build |
| vid-07 Manhole covers | why-is-it-shaped-like-that | ready-to-build |
| vid-08 Clicky pen | cut-it-open | ready-to-build |
| vid-09 Touchscreen | cut-it-open | ready-to-build |
| vid-10 Before fridges | before-it-existed | ready-to-build |

All visuals live in `video/src/visuals/`. A new topic = a new visual component with named states, listed in `video/tools/sync.mjs`, then referenced from the script as `visual: { kind: <name>, state: <state> }`.

## Backing up a big file to GitHub in 45 MB parts

```bash
./tools/chunk.sh out/vid-01.mp4      # writes uploads/vid-01.mp4/*.part-000 ... and prints the push commands
./tools/unchunk.sh uploads/vid-01.mp4 # rebuilds and verifies the file
```

This repo is public, so music files are blocked from chunking. Keep them on the pendrive.

Remotion is free for individuals and teams of up to 3 people.

## Scripts at scale (generator)

Hand-write only the compact sources in `scripts-src/`; `cd video && npm run gen` expands them into
`how-things-work/<series>/<group>/vid-NNN.md` (full timed scenes, voiceover, fact-check, upload text) and `SCRIPTS.md`.
The generator rejects hooks over 8 words, scenes with unknown icons/layouts, missing fact-check lines and runtimes outside 18-55 s.
Scenes use the generic `explainer` visual (layouts: hero, pair, flow, grid, num, bars, timeline) and the icon library in `video/src/visuals/icons.tsx`, so no per-reel code is needed.
