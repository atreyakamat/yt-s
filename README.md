# Cutaway Shorts

Faceless "how things work" YouTube Shorts, built from text scripts into 1080×1920 videos with [Remotion](https://www.remotion.dev). Strategy: [STRATEGY.md](STRATEGY.md).

## Every day: one command

Open a terminal in `G:\cutaway\video` and run:

```bash
npm run daily
```

It renders the next 2 reels in order (voice + music + captions), and puts them in `out/<today's date>/`:

- `vid-N.mp4`: the Short, 1080×1920, ready to upload.
- `vid-N.txt`: the title, the description (with the music credit and hashtags) and the pinned comment to paste.

Post them, and run the same command tomorrow. It remembers what's done (in `.cutaway-progress.json`, keep that file),
so you never pick reels or edit anything by hand. If a script ever fails, it's skipped and the rest still render.

| Want to | Run (in `video/`) |
| --- | --- |
| Render 3 today instead of 2 | `npm run daily -- 3` |
| See what's next without rendering | `npm run daily -- --dry` |
| Re-render one reel | `npm run daily -- --redo vid-26` |
| Render specific reels to `out/` | `npm run build:reel -- vid-26 vid-41` |
| Preview a reel in the browser editor | `npm run dev` |
| Check every script | `npm run check` |

## One-time setup

```bash
cd video
npm install                 # Remotion + friends (Node 20.19+, 22.13+ or 24)
```

That's enough to render (captions + sound effects). For the voice and the music, see **Sound** below; the daily
command uses them automatically once they're set up, and downloads each music track the first time it's needed (yt-dlp).

## Layout

```
how-things-work/<series>/vid-N.md   one file per reel (1,500 of them): hook, backup hooks, scenes (YAML), fact check, upload text
how-things-work/SCRIPT_SPEC.md      the script format and every visual you can use
how-things-work/INDEX.md            every reel in posting order
video/                              Remotion render engine (TypeScript)
  src/visuals/generic/              reusable animated templates (layers, flow, compare, cycle, counter, ...) + icon library
  src/visuals/*.tsx                 hand-built visuals for the first 10 reels
  tools/daily.mjs                   the everyday command
  tools/validate.mjs                every rule a script must pass (used by sync, check and daily)
  tools/sync.mjs                    validates scripts, writes src/reels.generated.json, copies assets
  tools/build.mjs                   renders chosen reels to out/
music/tracks.tsv + download.sh      music list and yt-dlp downloader (files land in music/files/, gitignored)
assets/vo, assets/sfx               voiceover (gitignored) and synthesised sound effects
assets/CREDITS.md                   every outside image/sound must be logged here
tools/chunk.sh, unchunk.sh          split big files into 45 MB parts for GitHub, and rebuild them
out/                                rendered MP4s (gitignored): offload to the pendrive
```
## Sound

Three layers, all optional (the build skips whatever is missing):

| Layer | How you get it | Where it lands |
| --- | --- | --- |
| Sound effects | `python3 tools/make_sfx.py` (synthesised, already committed) | `assets/sfx/*.mp3` |
| Voiceover | `python3 tools/voiceover.py` (Piper TTS, free and offline; setup in the file header) | `assets/vo/vid-xx.mp3` (gitignored) |
| Music | `./music/download.sh` (yt-dlp) | `music/files/*.mp3` (gitignored) |

The voiceover is built scene by scene: each `vo:` line is spoken, sped up (at most 1.3x) if it is longer than its scene, and placed at the scene start. The script checker keeps every line short enough to fit.

Voice setup, once (Windows: `python`, macOS/Linux: `python3`). After this, `npm run daily` voices every reel automatically:

```bash
pip install piper-tts
python -m piper.download_voices en_US-lessac-medium --data-dir tools/voices
```

Music: `npm run daily` downloads each track the first time a reel needs it (needs yt-dlp + ffmpeg). Check
`music/files/<slug>.source.txt` once: the uploader should be Kevin MacLeod. Or run `./music/download.sh` to fetch them all.

## Reels

All 1,500 scripts are in `how-things-work/`, listed in posting order in [how-things-work/INDEX.md](how-things-work/INDEX.md).
Reels 1-10 use hand-built visuals in `video/src/visuals/`; the rest use the reusable templates in
`video/src/visuals/generic/`, so no new code is needed per topic. To fix a script, edit its `vid-N.md`, run
`npm run check`, then `npm run daily -- --redo vid-N`.
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
