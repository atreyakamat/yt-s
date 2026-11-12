# Writing new reels

How to add more reels to Cutaway, whether you write them, an agent does (agy-cli, Claude, Codex), or a team of
agents splits the work. Everything here is checked by `npm run check`, so a script that passes will render.

## 1. Get the next ids and the taken topics

```powershell
cd G:\cutaway\video
npm run topics -- 50        # next 50 free ids + writes how-things-work/TOPICS.md (every topic already used)
```

Reel `vid-N` lives in `how-things-work/batch-NN/vid-N.md`, where `NN` = ceil(N / 50), zero-padded
(vid-1801 → `batch-37`). Posting order is the id order.

## 2. Read the format

- `how-things-work/SCRIPT_SPEC.md`: the file format, the series, every visual and its limits, icons and colours.
- A good example to copy: `how-things-work/batch-01/vid-11.md` (pop-up toaster).
- `BRAND.md`: voice, title formulas, what we never do.

## 3. Write each reel

- **Topic:** an everyday object, feature or phenomenon people actually touch or see, and not in `TOPICS.md` (no
  repeats under another name either: "Door closer" and "Hydraulic door closer" are the same topic).
- **Series:** one of the five (see SCRIPT_SPEC). Across a batch, about half `cut-it-open`, and the rest spread evenly.
  Never 3 of the same series in a row.
- **Shape:** 6-9 scenes, 28-45 s. Scene 1 is the hook (2.5-3 s, at most 10 words; the big text says the same promise).
  The last scene loops back into the hook. At least 4 different visual kinds per reel; change visual every scene.
- **Frontmatter:** id, title (under 50 characters if possible, object name in it, at most one emoji at the end), series,
  topic, status: ready-to-build, duration, music (the series default), accent (one of `#FFD60A #FF9F0A #32D74B #64D2FF
  #0A84FF #BF5AF2 #FF375F #FF453A #30D158 #FFCC00`), hashtags (3-5, object first, ending in `shorts`), description
  (1-2 sentences: hook + payoff, object named), pinned (the series' pinned question).
- **Body:** `# vid-N · Title`, `## Hook` (the chosen hook + 3 backup hooks), `## Scenes` (the yaml block),
  `## Fact check` (one line per specific claim, with `Source: <url>` for every number, year, name, "first" or record).
- **Facts:** only what you can back with a reliable page (Wikipedia, manufacturer, standards body, agency, university).
  Can't confirm it? Round it ("about"), give a range, or drop it. No medical, legal or financial advice. No brand
  names unless the brand is the common name (Velcro).
- **Style:** short, punchy, plain words. Quote every yaml string with double quotes. One-line `visual: { ... }` maps.

## 4. Check, as you go and at the end

```powershell
cd G:\cutaway\video
node tools/precheck.mjs vid-1801 vid-1802 ...   # just your reels (also catches topics another writer already used)
npm run check                                   # everything
```

Fix every error it prints (word budget per scene, text length, field limits, unknown icon, duplicate topic).

## 5. Finish

```powershell
npm run topics     # refresh TOPICS.md
npm run sheet      # refresh the publishing sheet
node tools/index.mjs
```

Then commit on a new branch and open a PR. `npm run daily` picks the new reels up automatically, in id order.

## Splitting a big batch between several writers

Give each writer a different **domain** (kitchen, cars, sports...) and an **interleaved id list** (writer k of W gets
ids `start + k, start + k + W, ...`) so the posting order mixes domains. Writers run `precheck` often; a topic clash is
reported to whoever writes second, and they change their topic.
