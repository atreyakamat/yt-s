---
id: vid-52
title: "Your combination lock is just notched wheels in a row"
series: cut-it-open
topic: "Combination padlock"
status: ready-to-build
duration: 36
music: investigations
accent: "#32D74B"
hashtags: [howthingswork, locks, engineering, padlock, shorts]
description: "Under each number dial sits a disc with one notch. When every notch lines up, a bar slips through and the lock opens."
pinned: "What should we cut open next?"
---

# vid-52 · Your combination lock is just notched wheels in a row

## Hook

- **Chosen (0-3s):** "Your combination lock is four notched wheels in a row." Big text: FOUR NOTCHED WHEELS
- **Backup hooks:**
    1. "Each number on your combination lock hides a notch."
    2. "Four dials, ten thousand codes, one notch each."
    3. "Your bike lock opens when four notches line up."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your combination lock is four notched wheels in a row."
    text: "FOUR NOTCHED WHEELS"
    highlight: "NOTCHED"
    visual: { kind: hero, icon: lock, motion: pulse, color: accent }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "Under each number dial sits a hidden disc with one small notch cut into it."
    text: "ONE NOTCH EACH"
    highlight: "NOTCH"
    visual: { kind: layers, items: [{ label: "Number dial", color: white }, { label: "Hidden notched disc", color: accent }, { label: "Locking bar", color: steel }, { label: "Shackle", color: grey }] }
    sfx: slice
  - at: 9
    dur: 5
    vo: "Four dials of ten digits gives ten thousand possible codes."
    text: "10,000 CODES"
    highlight: "10,000"
    visual: { kind: counter, to: 10000, label: "possible codes", icon: key }
  - at: 14
    dur: 6
    vo: "A bar runs alongside the wheels. It can only slide when every notch faces it."
    text: "ALL NOTCHES LINE UP"
    highlight: "LINE UP"
    visual: { kind: flow, steps: [{ label: "Right digit on each dial", icon: eye }, { label: "Every notch faces the bar", icon: gear }, { label: "Bar slides into the gaps", icon: arrow }, { label: "Shackle springs free", icon: lock }] }
    sfx: unlock
  - at: 20
    dur: 5
    vo: "One wrong digit, and that disc's solid edge blocks the bar."
    text: "ONE WRONG DIGIT"
    highlight: "WRONG"
    visual: { kind: compare, mode: wrong-right, left: { label: "One notch off", icon: lock, tag: "Blocked" }, right: { label: "All notches aligned", icon: key, tag: "Opens" } }
    sfx: thunk
  - at: 25
    dur: 6
    vo: "To change the code, a reset lever unhooks the dials from the discs underneath."
    text: "RESET THE CODE"
    highlight: "RESET"
    visual: { kind: cycle, icon: gear, steps: ["Open the lock", "Flip the reset lever", "Set new digits", "Lever back"] }
    sfx: click
  - at: 31
    dur: 5
    vo: "No key, no battery, because..."
    text: ""
    visual: { kind: hero, icon: lock, motion: float, color: accent, label: "Notches in a row" }
    note: "Last line runs back into the hook: 'Your combination lock is four notched wheels in a row.'"
```

## Fact check

- Typical resettable 4-dial combination padlocks (luggage, bike and gym style) work this way: each dial drives a sleeve or disc with a notch, and a locking bar or shackle tab can only pass when all notches align.
- 4 dials x 10 digits = 10^4 = 10,000 combinations.
- Resettable models have a reset lever or button, used while open, that disengages the dials from the notched sleeves so a new code can be set.
- Rotary single-dial padlocks use a different (wheel pack) design; the script talks about the four-wheel type, as the hook says.
