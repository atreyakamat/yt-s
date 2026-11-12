---
id: vid-27
title: "Your foil box has a lock you've never pressed 🔒"
series: youve-been-using-it-wrong
topic: "Foil box end tabs"
status: ready-to-build
duration: 35
music: sneaky-snitch
accent: "#FF9F0A"
hashtags: [lifehacks, kitchen, foil, packaging, shorts]
description: "Many foil and cling film boxes have small press-in tabs on the ends. Push them in and the roll stops jumping out."
pinned: "What else have we all been using wrong?"
---

# vid-27 · Your foil box has a lock you've never pressed

## Hook

- **Chosen (0-3s):** "Your foil box has a lock you've never used." Big text: A HIDDEN LOCK
- **Backup hooks:**
    1. "There's a reason your foil box has these flaps."
    2. "Your cling film roll is supposed to stay put."
    3. "Most people never press these two tabs."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your foil box has a lock you've never used."
    text: "A HIDDEN LOCK"
    highlight: "LOCK"
    visual: { kind: hero, icon: box, motion: shake, color: steel, label: "Foil box" }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "The usual fight: you pull the sheet, and the whole roll leaps out of the box."
    text: "THE ROLL ESCAPES"
    highlight: "ESCAPES"
    visual: { kind: compare, mode: wrong-right, left: { label: "Roll jumps out", icon: box, tag: "Annoying" }, right: { label: "Roll stays in", icon: lock, tag: "Locked" } }
    sfx: buzz
  - at: 9
    dur: 5
    vo: "Look at the ends of the box. Many have a small flap marked press here."
    text: "PRESS HERE"
    highlight: "PRESS"
    visual: { kind: callout, icon: box, parts: ["End flap", "Press-in tab", "Cutting edge"], color: steel }
  - at: 14
    dur: 4
    vo: "Push it in and the cardboard tab pokes into the roll's tube."
    text: "TAB INTO THE TUBE"
    highlight: "TUBE"
    visual: { kind: flow, steps: [{ label: "Press the end flap", icon: arrow }, { label: "Tab enters the tube", icon: box }, { label: "Roll held on its axis", icon: gear }] }
    sfx: click
  - at: 18
    dur: 4
    vo: "Now the roll can only spin. It can't slide or jump out."
    text: "SPIN, DON'T JUMP"
    highlight: "SPIN"
    visual: { kind: cycle, icon: gear, steps: ["Pull the sheet", "Roll spins", "Box stays put"] }
  - at: 22
    dur: 5
    vo: "So the sheet tears cleanly on the serrated edge instead of dragging the roll."
    text: "CLEAN TEAR"
    highlight: "CLEAN"
    visual: { kind: layers, items: [{ label: "Serrated edge", color: accent }, { label: "Sheet", color: steel }, { label: "Locked roll", color: grey }] }
    sfx: slice
  - at: 27
    dur: 5
    vo: "Two tabs, one on each end. Most of us have never pushed either."
    text: "2 TABS"
    highlight: "2"
    visual: { kind: grid, icon: box, count: 10, highlight: 2, label: "Most never pressed" }
  - at: 32
    dur: 3
    vo: "Go check your kitchen drawer, because your foil box..."
    text: ""
    visual: { kind: hero, icon: box, motion: float, color: steel, label: "Press here" }
    note: "Last line runs back into the hook: 'Your foil box has a lock you've never used.'"
```

## Fact check

- Many aluminium foil and cling film boxes have perforated end tabs (often labelled 'press here to lock end') that push into the cardboard tube to hold the roll.
- With the tube held, the roll rotates in place and the sheet can be torn on the box's serrated edge without the roll lifting out.
- Not every brand has them, so the script says 'many have'.
