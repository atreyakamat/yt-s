---
id: vid-62
title: "This is why your keyboard isn't in alphabetical order"
series: why-is-it-shaped-like-that
topic: "QWERTY layout"
status: ready-to-build
duration: 42
music: pixel-peeker-polka
accent: "#64D2FF"
hashtags: [keyboard, history, typewriter, howthingswork, shorts]
description: "QWERTY comes from 1870s typewriters, where the order of the letters is commonly said to have helped stop the metal arms from jamming."
pinned: "What shape should we explain next?"
---

# vid-62 · This is why your keyboard isn't in alphabetical order

## Hook

- **Chosen (0-3s):** "Your keyboard layout comes from a jamming machine." Big text: BUILT FOR JAMS
- **Backup hooks:**
    1. "Your keyboard layout was designed for a machine that jammed."
    2. "You can type TYPEWRITER on one row. That's no accident."
    3. "Why isn't your keyboard A, B, C?"

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your keyboard layout comes from a jamming machine."
    text: "BUILT FOR JAMS"
    highlight: "JAMS"
    visual: { kind: hero, icon: key, motion: shake, color: accent, label: "QWERTY" }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "Early typewriters had a metal arm for every letter, swinging up to the paper."
    text: "ONE ARM PER LETTER"
    highlight: "ONE ARM"
    visual: { kind: callout, icon: wrench, parts: ["Metal arm per letter", "Arms swing to one spot", "Neighbours can clash"] }
  - at: 9
    dur: 6
    vo: "Type two neighbouring arms fast and they could hit each other and jam."
    text: "NEIGHBOURS JAM"
    highlight: "JAM"
    visual: { kind: flow, steps: [{ label: "Press two keys fast", icon: key }, { label: "Arms swing together", icon: arrow }, { label: "Clash and jam", icon: wrench, color: red }] }
    sfx: thunk
  - at: 15
    dur: 6
    vo: "The common story: letters often typed together were spread apart."
    text: "SPREAD THEM OUT"
    highlight: "SPREAD"
    visual: { kind: compare, mode: before-after, left: { label: "A B C order", icon: key, color: grey, tag: "more jams" }, right: { label: "QWERTY", icon: key, color: accent, tag: "fewer jams" } }
  - at: 21
    dur: 6
    vo: "It was tuned on typewriters in the 1870s and sold to the world."
    text: "1870S"
    highlight: "1870S"
    visual: { kind: timeline, events: [{ year: "1868", label: "Early typewriter patent" }, { year: "1870s", label: "Letters shuffled to QWERTY" }, { year: "1874", label: "First QWERTY typewriters sold" }] }
  - at: 27
    dur: 5
    vo: "Fun proof: TYPEWRITER fits on the top row alone."
    text: "TYPEWRITER"
    highlight: "TYPEWRITER"
    visual: { kind: grid, icon: key, count: 10, highlight: 10, label: "All top-row letters" }
    sfx: click
  - at: 32
    dur: 6
    vo: "Computers never jam, but everyone already knew QWERTY, so it stayed."
    text: "IT JUST STAYED"
    highlight: "STAYED"
    visual: { kind: bars, items: [{ label: "Jams today", value: 0, color: grey }, { label: "People trained on it", value: 100, color: accent }] }
  - at: 38
    dur: 4
    vo: "So every time you type, you're using..."
    text: ""
    visual: { kind: hero, icon: key, motion: float, color: accent, label: "1870s layout" }
    note: "Loops into: a layout that comes from a jamming machine."
```

## Fact check

- Sholes patent 1868, sold to Remington 1873, on sale 1874. OK. Source: https://www.ebsco.com/research-starters/biography/christopher-latham-sholes
- Anti-jam purpose is contested by historians, so "built for" SOFTENED to "comes from" and the description now says "commonly said"; the voiceover already says "the common story". Source: https://hackaday.com/2016/03/15/the-origin-of-qwerty
