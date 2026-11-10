# How to write a Cutaway reel script

Every reel is one file: `how-things-work/<series>/vid-N.md`. The build reads the frontmatter and the
` ```yaml ` scenes block; everything else is for humans. `npm run lint` (in `video/`) checks every
script against the rules below. A script that passes always renders.

## File layout

````markdown
---
id: vid-123                       # must match the file name
title: "Why your toaster never burns the bread twice"   # YouTube title, max 70 chars, max one emoji at the end
series: cut-it-open               # folder name, see the series table
topic: "Pop-up toaster"           # the object, unique across the channel
status: ready-to-build
duration: 38                      # = sum of scene durs, 25-45 is the sweet spot
music: investigations             # slug from music/tracks.tsv (series default below)
accent: "#FFD60A"                 # optional #RRGGBB, one per reel, used for highlights
hashtags: [howthingswork, engineering, toaster, shorts]
description: "One or two plain sentences that restate the hook and the payoff."
pinned: "What should we cut open next?"
---

# vid-123 · Why your toaster never burns the bread twice

## Hook

- **Chosen (0-3s):** "Your toaster has a tiny bimetal timer inside." Big text: BIMETAL TIMER
- **Backup hooks:**
    1. "..."
    2. "..."
    3. "..."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your toaster has a tiny bimetal timer inside."
    text: "BIMETAL TIMER"
    highlight: "BIMETAL"
    visual: { kind: hero, icon: bolt, motion: pulse, color: orange }
    sfx: whoosh
  - at: 3
    dur: 5
    ...
```

## Fact check

- Claim → source or reasoning. Every number on screen and in the voiceover is listed here.
````

## Series

| series (folder) | angle | default music | pinned comment |
| --- | --- | --- | --- |
| `cut-it-open` | "This is what's inside your ___." The hidden mechanism. | investigations (or cipher for anything digital) | What should we cut open next? |
| `youve-been-using-it-wrong` | "There's a reason this ___ has a ___." A feature people misuse or ignore. | sneaky-snitch | What else have we all been using wrong? |
| `why-is-it-shaped-like-that` | "This is why ___ are never ___." Shape = engineering. | pixel-peeker-polka | What shape should we explain next? |
| `the-1-second-machine` | "This happens faster than you can blink." Speed, timing, split seconds. | hyperfun | What else happens in under a second? |
| `before-it-existed` | "Before ___, people ___." History of an everyday thing. | wallpaper | What should we go back in time for next? |

## Scene rules (the checker enforces these)

- Scenes are back to back: each `at` = previous `at` + `dur`. `dur` 1.5-12 s. Whole reel 15-60 s (aim 30-45).
- `vo`: what the narrator says. At most **3.4 words per second** of the scene, rounded down (3 s ≤ 10 words, 5 s ≤ 17, 7 s ≤ 23). Scene 1 (the hook) is ≤ 3 s and ≤ 10 words.
- `text`: big top text, ≤ 28 characters, CAPITALS. Can be `""` (the last loop scene usually is). `highlight` must appear inside `text` exactly.
- `sfx` (optional): whoosh, slice, thunk, buzz, click, unlock, pop.
- `note` (optional): free text for humans.
- Quote every string with double quotes. No `:` inside unquoted text.
- The last scene's `vo` should run straight back into scene 1 (loop). No "subscribe", no outro.

## Visuals

Each scene has one `visual`. Use the generic kinds below (written as a one-line `{ ... }` map). Change the visual
every scene so the screen moves every 2-5 s.

Icons (`icon:`): gear, spring, magnet, battery, bolt, drop, flame, snowflake, wave, chip, eye, key, lock, wheel,
coil, lens, sun, fan, plug, bulb, clock, coin, phone, car, house, globe, molecule, bubble, thermometer, box,
speaker, wifi, cloud, leaf, bottle, cup, shield, star, pipe, person, antenna, screen, germ, plane, heart,
barcode, card, pill, wrench, arrow, question, wind, water, tooth, food, shirt, ball, tree, bag, door, tool

Colours (`color:`): accent, brass, steel, grey, dark, red, green, blue, cyan, orange, purple, pink, white, brown

| kind | use it for | fields (limits) | example |
| --- | --- | --- | --- |
| `hero` | the hook and the loop scene: one big object | `icon`, `label`? (30), `color`?, `motion`? float/spin/pulse/shake/drop | `{ kind: hero, icon: fan, motion: spin, label: "Ceiling fan" }` |
| `layers` | "cut it open": what it's made of, top to bottom | `items`: 2-6 × `{ label (26), color? }` | `{ kind: layers, items: [{ label: "Glass", color: cyan }, { label: "Touch grid", color: accent }, { label: "LCD" }] }` |
| `flow` | a process, step by step | `steps`: 2-5 × `{ label (36), icon?, color? }` | `{ kind: flow, steps: [{ label: "Coin drops", icon: coin }, { label: "Weight checked", icon: gear }] }` |
| `compare` | wrong vs right, old vs new, A vs B | `mode`? wrong-right/versus/before-after, `left`/`right`: `{ label (24), icon?, color?, tag? (16) }` | `{ kind: compare, mode: wrong-right, left: { label: "Pull straight", icon: arrow }, right: { label: "Twist first", icon: wrench } }` |
| `cycle` | anything that loops | `steps`: 3-5 texts (30), `icon`?, `color`? | `{ kind: cycle, icon: snowflake, steps: ["Compress", "Condense", "Expand", "Evaporate"] }` |
| `counter` | one striking number | `to`, `from`?, `prefix`? (6), `suffix`? (8), `decimals`? 0-2, `label`? (30), `icon`?; shown number ≤ 14 chars | `{ kind: counter, to: 7776, label: "possible keys", icon: key }` |
| `timeline` | history, before-it-existed | `events`: 2-5 × `{ year (12), label (50) }` | `{ kind: timeline, events: [{ year: "1893", label: "First zip, it jammed" }, { year: "1913", label: "Teeth that lock" }] }` |
| `bars` | comparing amounts | `items`: 2-5 × `{ label (30), value ≥ 0, color? }`, `unit`? (8) | `{ kind: bars, unit: "°C", items: [{ label: "Oven", value: 220 }, { label: "Toaster wire", value: 600 }] }` |
| `zoom` | zooming into something smaller | `levels`: 2-4 × `{ label (30), icon, color? }` | `{ kind: zoom, levels: [{ label: "Your phone", icon: phone }, { label: "The chip", icon: chip }, { label: "Atoms", icon: molecule }] }` |
| `callout` | an object with its key parts labelled | `icon`, `parts`: 2-5 texts (30), `color`? | `{ kind: callout, icon: bulb, parts: ["Tungsten wire", "Argon gas", "Glass bulb"] }` |
| `grid` | many of something, "1 in N" | `icon`, `count` 1-40, `highlight`? (how many in accent), `label`? (30) | `{ kind: grid, icon: person, count: 20, highlight: 1, label: "1 in 20 people" }` |
| `gauge` | a level: heat, pressure, speed | `value` 0-100, `low`? (12), `high`? (12), `label`? (30) | `{ kind: gauge, value: 85, low: "Cold", high: "Boiling", label: "121°C inside" }` |
| `wave` | sound, radio, light, vibration | `waves`: 1-2 × `{ label (30), freq 1-10, color? }` | `{ kind: wave, waves: [{ label: "Low hum", freq: 2 }, { label: "High beep", freq: 8 }] }` |

## Quality bar

- One idea per scene. Facts only: if you're not sure a number is right, don't use a number.
- Hook = a specific number, a "your ___" claim, or a mild contradiction. Under 10 words. The big text and the spoken hook make the same promise.
- Plain words a 12-year-old gets. No "basically", "actually", "in this video".
- No brand names in titles or hooks unless the brand is the topic's common name (Velcro, Post-it). No medical advice.
