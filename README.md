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

## Reel status

| Reel | Series | Status |
| --- | --- | --- |
| vid-01 Pin tumbler lock | cut-it-open | ready-to-build (full visuals) |
| vid-02 to vid-10 | various | script-ready: renders with a placeholder card until its visual is built |

## Backing up a big file to GitHub in 45 MB parts

```bash
./tools/chunk.sh out/vid-01.mp4      # writes uploads/vid-01.mp4/*.part-000 ... and prints the push commands
./tools/unchunk.sh uploads/vid-01.mp4 # rebuilds and verifies the file
```

This repo is public, so music files are blocked from chunking. Keep them on the pendrive.

Remotion is free for individuals and teams of up to 3 people.
