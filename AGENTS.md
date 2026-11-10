# Runbook for any agent or CLI (agy-cli, Claude Code, Codex, a person...)

Your only job here is to **render reels**. The scripts are finished and validated; rendering is deterministic.
Do not write or edit scripts, templates or tools unless the owner asks.

## Machine

Windows, Node 20.19+/22.13+/24, ffmpeg, Python 3 with `piper-tts`, yt-dlp. Repo at `G:\cutaway`, branch `cutaway-1500`.

## Render today's reels

```bash
cd G:\cutaway\video
npm run daily            # next 2 reels; `npm run daily -- 5` for 5
```

What it does, in order: validates all 1,500 scripts → picks the next reels not yet done (posting order =
`how-things-work/INDEX.md`) → downloads missing music (yt-dlp) → makes the voiceover (Piper, offline) →
renders with Remotion → writes `out/<YYYY-MM-DD>/vid-N.mp4` and `vid-N.txt` (title, description with music
credit, hashtags, pinned comment) → records it in `G:\cutaway\.cutaway-progress.json`.

Success looks like: `N reel(s) ready in ..\out\<date>` and an `.mp4` + `.txt` per reel.

## Other commands (all in `G:\cutaway\video`)

| Command | Use |
| --- | --- |
| `npm run daily -- --dry` | Show the next reels without rendering |
| `npm run daily -- --redo vid-26` | Render one reel again |
| `npm run build:reel -- vid-26` | Render a reel to `out/vid-26.mp4` without touching progress |
| `npm run check` | Validate every script (no install needed) |
| `npm install` | Only if `node_modules` is missing |

## If something fails

- `Remotion is not installed yet` → `npm install` in `video/`.
- A script error is printed and that reel is skipped; the rest still render. Report the error text to the owner, don't fix scripts yourself.
- `no voice set up` → `pip install piper-tts` then `python -m piper.download_voices en_US-lessac-medium --data-dir tools/voices` (in `G:\cutaway`).
- Render is slow or the PC is busy: set `CONCURRENCY=4` before the command.

## Rules

- Never commit `out/`, `music/files/`, `assets/vo/` or `.cutaway-progress.json` (all gitignored). Never push to `main`.
- Don't delete `.cutaway-progress.json`: it's how the next run knows where to continue.
