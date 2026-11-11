---
id: vid-54
title: "There's a cork ball hiding inside every baseball ⚾"
series: cut-it-open
topic: "Baseball"
status: ready-to-build
duration: 35
music: investigations
accent: "#32D74B"
hashtags: [howthingswork, baseball, sports, engineering, shorts]
description: "Under the leather, a baseball is a cork core, rubber, and a long run of tightly wound yarn. Then 108 double stitches hold it shut."
pinned: "What should we cut open next?"
---

# vid-54 · There's a cork ball hiding inside every baseball

## Hook

- **Chosen (0-3s):** "Your baseball has a cork ball hiding inside." Big text: CORK INSIDE
- **Backup hooks:**
    1. "Every pro baseball has exactly 108 double stitches."
    2. "This is what's inside a baseball."
    3. "Your baseball is mostly yarn."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your baseball has a cork ball hiding inside."
    text: "CORK INSIDE"
    highlight: "CORK"
    visual: { kind: hero, icon: ball, motion: spin, color: white }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "At the very center sits a small cork core, wrapped in layers of rubber."
    text: "THE CORK CENTER"
    highlight: "CORK"
    visual: { kind: layers, items: [{ label: "Cork core", color: brown }, { label: "Black rubber", color: dark }, { label: "Red rubber", color: red }] }
    sfx: slice
  - at: 8
    dur: 4.5
    vo: "Around that, a machine winds a very long run of tight wool yarn."
    text: "WOUND WITH YARN"
    highlight: "YARN"
    visual: { kind: flow, steps: [{ label: "Cork and rubber center", icon: ball }, { label: "Wool yarn wound tight", icon: coil }, { label: "Thin finishing layer", icon: shirt }] }
  - at: 12.5
    dur: 4.5
    vo: "The yarn makes it firm but springy, so it flies off the bat."
    text: "FIRM BUT SPRINGY"
    highlight: "SPRINGY"
    visual: { kind: gauge, value: 70, low: "Soft", high: "Rock hard", label: "Firm but springy" }
  - at: 17
    dur: 4
    vo: "Then two figure-eight pieces of leather wrap around it like a puzzle."
    text: "TWO FIGURE EIGHTS"
    highlight: "FIGURE EIGHTS"
    visual: { kind: callout, icon: ball, parts: ["Leather piece one", "Leather piece two", "Figure-eight shapes"] }
  - at: 21
    dur: 4.5
    vo: "They're sewn together by hand with exactly 108 double stitches of red thread."
    text: "108 STITCHES"
    highlight: "108"
    visual: { kind: counter, to: 108, label: "double stitches", icon: tool }
    sfx: click
  - at: 25.5
    dur: 5.5
    vo: "Those raised seams grab the air when the ball spins, which helps pitchers make it curve."
    text: "SEAMS BEND THE PITCH"
    highlight: "SEAMS"
    visual: { kind: flow, steps: [{ label: "Pitcher adds spin", icon: person }, { label: "Seams grip the air", icon: wind }, { label: "Ball curves", icon: arrow }] }
  - at: 31
    dur: 4
    vo: "Next time one flies out of the park, remember. Your baseball..."
    text: ""
    visual: { kind: hero, icon: ball, motion: float, color: white, label: "Cork at the core" }
    note: "Last line runs back into the hook."
```

## Fact check

- Baseball cover uses 108 double stitches (216 stitches) of red thread over a cork or rubber core wrapped in yarn. OK. Source: https://en.wikipedia.org/wiki/Baseball_(ball)
