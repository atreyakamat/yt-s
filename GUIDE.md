# GUIDE: tell agy (or any agent) to run the pipeline

Paste the prompt below into agy-cli, opened in `G:\cutaway`. It does everything and reports back.
Full rules for the agent are in [AGENTS.md](AGENTS.md).

## The prompt (copy this)

```
Read GUIDE.md and AGENTS.md in G:\cutaway. Then:
1. git pull origin main
2. cd video && npm run doctor   (fix any FAIL line it tells you to; npm install if needed)
3. npm run daily                (2 reels; use "npm run daily -- 3" for three)
4. Report: the reels rendered, any skipped scripts with the error text, and the output folder path.
Do not edit scripts or code. Do not push to main. Do not copy files anywhere.
```

Other asks you can give it:

| You say | It runs (in `G:\cutaway\video`) |
| --- | --- |
| "Preview what's next" | `npm run daily -- --dry` |
| "Render 5 today" | `npm run daily -- 5` |
| "Redo vid-26" | `npm run daily -- --redo vid-26` |
| "Render these specific ones" | `npm run build:reel -- vid-26 vid-41` |
| "Is everything set up?" | `npm run doctor` |
| "Check every script" | `npm run check` |

## What you get

In `G:\cutaway\out\<date>\`, per reel:

- `vid-N.mp4`: 1080x1920 Short with captions, voice (if set up), music (if set up), SFX
- `vid-N.txt`: title, description (with music credit), hashtags, pinned comment
- `vid-N.transcript.txt` and `vid-N.srt`: transcript and captions file

Progress is remembered in `.cutaway-progress.json` (keep it; it is not in git).

## One-time setup (you, on the PC)

1. `cd G:\cutaway\video && npm install`
2. Voice (optional but recommended): in `G:\cutaway`, `pip install piper-tts` then
   `python -m piper.download_voices en_US-lessac-medium --data-dir tools/voices`
3. Music (optional): `pip install yt-dlp`; tracks download automatically on first use.
4. `npm run doctor` should end with "Ready".

## Good to know

- **New Year set (300 reels)** waits until 1 Dec, then jumps the queue until 5 Jan. To render some earlier: set `DAILY_SEASON=1` (PowerShell: `$env:DAILY_SEASON=1`).
- Total: 1,800 scripts. Order = `how-things-work/INDEX.md`.
- A failing script is skipped; the rest still render.
- Slow PC? `$env:CONCURRENCY=4` before the command. A 40 s reel takes about 3 min on the Ryzen 5700G.
- Pull `main` before each session so you get script and fact fixes.

## After every run

Renders are big and not in git. Copy `out\<date>\` to the **pendrive only**. Agents must never copy there without your yes.

## Before you post

- Read the `fact:` line of each script against its claim; the New Year set got a first audit but some claims (hail record, Dead Sea, Arctic warming, ozone dates) are still being checked.
- YouTube's mass-produced content policy: add your own voice, curation, or commentary where you can. Post 1-2 a day.
