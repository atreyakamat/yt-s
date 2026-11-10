# Cutaway: channel strategy

**One line:** faceless 25 to 45 second Shorts that cut open everyday objects and show the one hidden trick that makes them work, drawn as clean 3D-style vector animation.

## 1. Positioning

- **Niche:** hidden engineering in things people touch every day (locks, zippers, microwaves). Not space or physics theory.
- **Why it can win views:** everyone owns the object (huge audience), "I use this daily and never knew" is a strong curiosity gap, and every video ends on a visual reveal.
- **Look:** dark background, one object in the middle, big top text, word-by-word captions. Same look every time so viewers recognise us in the first frame.
- **Faceless:** voiceover + code-drawn visuals. No camera, no stock footage, no copyright risk.

## 2. Series (rotate them)

| Series | Folder | Hook pattern | Music |
| --- | --- | --- | --- |
| Cut It Open (lead, ~50% of uploads) | `how-things-work/cut-it-open/` | "This is what's inside your ___." | investigations / cipher |
| You've Been Using It Wrong | `youve-been-using-it-wrong/` | "There's a reason this ___ has a ___." | sneaky-snitch |
| Why Is It Shaped Like That? | `why-is-it-shaped-like-that/` | "This is why ___ are never ___." | pixel-peeker-polka |
| The 1-Second Machine | `the-1-second-machine/` | "This happens faster than you can blink." | hyperfun |
| Before It Existed | `before-it-existed/` | "Before ___, people ___." | wallpaper |

## 3. Hook rules (first 2 seconds decide everything)

1. Frame 1 is already moving and already shows the object. No logo, no intro.
2. The first spoken line and the on-screen text say the same promise.
3. Use one of: a specific number ("5 secret passwords"), a "you" claim ("your key..."), or a mild contradiction ("this hole is not for the ink").
4. Under 10 words. Readable in one glance.
5. Every script carries 3 backup hooks. If a video stalls under 60% "viewed vs swiped away" after 48 hours, re-cut it with a backup hook and re-upload a week later.

## 4. Retention rules

- One idea per scene, a visual change at least every 2 to 3 seconds.
- Captions always on; most people watch muted at first.
- No outro, no "subscribe". The last line runs straight back into the first line (loop), so replays count.
- Keep the bottom 380px and the right 140px clear: YouTube's buttons cover them.

## 5. Production pipeline (per reel)

1. **Script:** copy an existing `vid-xx.md`, fill the hook, beats and the `scenes` YAML block. Fact-check every claim.
2. **Visual:** if the topic needs a new visual (e.g. `zipper`), build it in `video/src/visuals/` like `Lock.tsx`, register it in `sync.mjs` and `Reel.tsx`, and set `status: ready-to-build`.
3. **Voice:** `python3 tools/voiceover.py vid-xx` (Piper, free, offline) or record your own to the scene times and save as `assets/vo/vid-xx.mp3`. Hook line must be speakable in about 3 seconds (8 words max).
4. **Music:** pick a slug from `music/tracks.tsv`, run `./music/download.sh <slug>` once.
5. **Build:** `cd video && npm run build:reel -- vid-xx` → `out/vid-xx.mp4`.
6. **Review:** watch it once on a phone. Check the hook, the captions and the loop.
7. **Offload:** copy the MP4 to the pendrive. Optional: `./tools/chunk.sh out/vid-xx.mp4` to back it up to GitHub in 45 MB parts.
8. **Upload:** title, description (hook + music credit), pinned comment "What should we cut open next?".

## 6. Cadence and targets

| Phase | Weeks | Uploads | Goal |
| --- | --- | --- | --- |
| Launch | 1-4 | 1 per day (the 10 launch scripts, then 18 more) | Find which 2 series retain best |
| Double down | 5-12 | 1-2 per day, 70% from the top 2 series | First Short over 100k views; 1,000 subscribers |
| Scale | 13+ | 2 per day, batch-built weekly | 10M Shorts views in 90 days (YouTube Partner threshold for Shorts) |

Batching: write 7 scripts on one day, build visuals over 2 days, record all voiceovers in one sitting, render overnight.

## 7. What to measure (weekly)

- **Viewed vs swiped away** (Shorts feed): the hook score. Target above 70%.
- **Average percentage viewed:** target above 90% (loops push it over 100%).
- **Subscribers per 1,000 views:** tells you which series builds a channel, not just views.
- Kill a series after 8 uploads if it's bottom on all three.

## 8. Rules that protect the channel

- **Visuals:** only code-drawn vector graphics, or images that are public domain / CC BY, logged in `assets/CREDITS.md`.
- **Music:** only tracks in `music/tracks.tsv` (CC BY, credit in every description) or YouTube's own Shorts audio library. Never chart music.
- **Facts:** every script has a fact-check line. One wrong fact in the comments costs more than one missed upload.
- **Storage:** rendered videos, music and voiceover live on the pendrive, not in this public repo.
