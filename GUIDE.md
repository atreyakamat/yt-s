# Cutaway pipeline guide

Hand this file to any agent (agy-cli, Claude Code, Codex...) or follow it yourself. It takes you from a fresh
Windows PC to finished YouTube Shorts, every day, with no script editing.

**What the pipeline does:** 1,800 finished scripts (`how-things-work/batch-NN/vid-N.md`) → natural voice (Kokoro,
free, offline) → music (Kevin MacLeod, CC BY) → animated visuals + captions (Remotion) → `out/<date>/vid-N.mp4`
plus the text to paste when posting.

---

## For agents: your job and your limits

1. Your job is to **run the pipeline and report**. The scripts, visuals and tools are finished.
2. Do **not** edit scripts, templates, tools or config unless the owner asks for that exact change.
3. Never commit `out/`, `music/files/`, `assets/vo/`, `tools/voices/` or `.cutaway-progress.json`. Never push to `main`.
4. Never delete `.cutaway-progress.json`: it is how the next run knows where to continue.
5. If a step fails, follow **Troubleshooting** below. If that doesn't fix it, stop and report the exact error text.
6. Run the pipeline from **one place at a time**. Two agents running `daily` together would render the same reels twice.

---

## Step 1: One-time setup (new PC only)

Skip to Step 2 on the main PC: it is already set up.

Open PowerShell and run these in order. Each line is one command.

```powershell
# 1. Tools (skip any you already have; open a NEW terminal afterwards so PATH updates)
winget install OpenJS.NodeJS.LTS
winget install Git.Git
winget install Gyan.FFmpeg
winget install Python.Python.3.12

# 2. Get the code (into G:\cutaway, or any folder you like)
git clone https://github.com/atreyakamat/yt-s G:\cutaway
cd G:\cutaway

# 3. Python packages: voice + music downloader
python -m pip install kokoro-onnx soundfile yt-dlp

# 4. The voice model (about 340 MB, from the Kokoro project's GitHub releases)
curl.exe -L -o tools/voices/kokoro-v1.0.onnx https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/kokoro-v1.0.onnx
curl.exe -L -o tools/voices/voices-v1.0.bin https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/voices-v1.0.bin

# 5. The render engine
cd video
npm install
```

Remotion downloads its own headless Chrome the first time it renders. No accounts, keys or logins are needed anywhere.

## Step 2: Health check (run first, every session)

```powershell
cd G:\cutaway\video
npm run doctor
```

Every line should say `OK` and the last line should say `Ready. Run: npm run daily`.
Any `FIX` line prints the exact command that fixes it: run that, then run `npm run doctor` again.
`WARN` lines are fine to continue with (for example: no music downloader means reels render without music).

## Step 3: Render today's reels

```powershell
cd G:\cutaway\video
npm run daily
```

Takes about 1-2 minutes per reel on a Ryzen 7 5700G. It:

1. checks all scripts (a broken one is skipped and named; the rest still render),
2. picks the next reels nobody has rendered yet (order: `how-things-work/INDEX.md`),
3. downloads any missing music track,
4. makes the voiceover,
5. renders, and saves everything to `out\<today's date>\`.

**Success looks like** the last lines saying `N reel(s) ready in ..\out\<date>` and, for each reel:

| File | What it is |
| --- | --- |
| `vid-N.mp4` | The Short: 1080×1920, 25-45 s, voice + music + captions |
| `vid-N.txt` | TITLE, DESCRIPTION (with music credit + hashtags) and PINNED COMMENT to paste |
| `vid-N.srt` | Subtitles, if you want to upload them as captions |
| `vid-N.transcript.txt` | What the voice says |

### Verify the output (agents: always do this before reporting success)

```powershell
cd G:\cutaway\out\<date>
ffprobe -v error -show_entries stream=codec_type,width,height:format=duration -of compact vid-31.mp4
```

Expect a `video` stream at `1080x1920`, an `audio` stream, and a duration of about 25-45 s. If there is **no audio
stream**, or the run printed `no voice set up` / `voiceover failed`, the reel has no narration: fix the voice
(Troubleshooting) and re-render it with `--redo` before anyone posts it.

## Step 4: Post (the owner does this)

For each `vid-N.mp4`: upload to YouTube Shorts, paste TITLE and DESCRIPTION from `vid-N.txt`, post the
PINNED COMMENT and pin it. Then move the files out of `out\` to the pendrive if space is needed (the progress file
remembers they're done).

## More commands (all in `G:\cutaway\video`)

| Want to | Command |
| --- | --- |
| Render 5 instead of 2 | `npm run daily -- 5` |
| Render a week ahead | `npm run daily -- 14` |
| See what's next, render nothing | `npm run daily -- --dry` |
| Re-render one reel | `npm run daily -- --redo vid-26` |
| Re-render a range or a list | `npm run daily -- --redo vid-1..vid-30` / `--redo vid-3,vid-9` |
| Render a reel without touching progress | `npm run build:reel -- vid-26` (to `out\vid-26.mp4`) |
| Check every script | `npm run check` |
| Rebuild the publishing sheet (`publishing/Cutaway-reels.xlsx` + `.csv`) | `npm run sheet` (keeps what the owner typed in the yellow columns) |
| Preview in the browser editor | `npm run dev` |
| Use a different voice | set `KOKORO_VOICE=am_michael` (or `bm_george`, `af_bella`...) before `npm run daily` |
| Get the latest scripts and fixes | `cd G:\cutaway` then `git pull` (on the branch the owner uses, normally `main`) |

## Troubleshooting

| You see | Do this |
| --- | --- |
| `Remotion is not installed yet` | `cd G:\cutaway\video` then `npm install` |
| `no voice set up` or `voiceover failed` | Run Step 1 lines 3-4, then `npm run doctor`, then `npm run daily -- --redo vid-N` for affected reels |
| `music '...' unavailable` | `python -m pip install -U yt-dlp`, check internet, re-run. Reels still render without music. |
| `x vid-N failed to render` | Re-run `npm run daily`; it retries. If it fails again, report the error text above that line. |
| `N script(s) have errors and will be skipped` | Report the listed errors to the owner. Don't edit the scripts. |
| A line `shorten it: "..."` during voiceover | That line runs slightly long. Report the reel id; the video still renders. |
| Render very slow / PC busy | `$env:CONCURRENCY=4; npm run daily` |
| `npm` or `node` not recognised | Install Node (Step 1) and open a new terminal |
| Chrome download fails | Check internet/firewall, re-run. Or set `$env:BROWSER_EXECUTABLE="C:\Program Files\Google\Chrome\Application\chrome.exe"` |

## Report back (agents: send exactly this)

```
Cutaway run <date>
doctor: Ready (or: the FIX/WARN lines)
rendered: vid-31, vid-32 -> G:\cutaway\out\<date>\
verified: video 1080x1920 + audio + <duration>s for each (or: what was missing)
progress: <N> of 1800 done
problems: none (or: exact error text)
```

## Where things are

| Path | What |
| --- | --- |
| `how-things-work/batch-NN/vid-N.md` | The scripts, 50 per batch in posting order. Format: `how-things-work/SCRIPT_SPEC.md` |
| `how-things-work/INDEX.md` | Every reel in posting order |
| `fact-check/` | Fact-check reports and sources |
| `publishing/Cutaway-reels.xlsx` | Every reel's title, description, hashtags, hooks, an optimisation check, and columns for post stats |
| `BRAND.md`, `brand/` | Brand strategy, channel icon, banner, watermark |
| `video/` | Render engine (Remotion). Tools in `video/tools/` |
| `tools/voiceover.py` | Voice generation (Kokoro, falls back to Piper) |
| `music/tracks.tsv` | The music list and credit lines |
| `out/` | Rendered videos (not in git) |
| `.cutaway-progress.json` | Which reels are done (not in git, don't delete) |
