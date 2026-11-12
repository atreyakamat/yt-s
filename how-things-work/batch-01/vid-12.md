---
id: vid-12
title: "Your can's ring pull is a tiny lever that never lets go 🥤"
series: cut-it-open
topic: "Stay-on can tab"
status: ready-to-build
duration: 38
music: investigations
accent: "#FFD60A"
hashtags: [howthingswork, engineering, sodacan, packaging, shorts]
description: "The tab on a drink can is a lever riveted to the lid. It cracks the seal, then pushes a scored flap inside without ever coming off."
pinned: "What should we cut open next?"
---

# vid-12 · Your can's ring pull is a tiny lever that never lets go

## Hook

- **Chosen (0-3s):** "Your can's tab is a lever, not a handle." Big text: IT'S A LEVER
- **Backup hooks:**
    1. "The tab on your can is a lever, not a handle."
    2. "There's a hidden groove on every can lid."
    3. "Why can tabs stopped falling off in the 1970s."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your can's tab is a lever, not a handle."
    text: "IT'S A LEVER"
    highlight: "LEVER"
    visual: { kind: hero, icon: cup, motion: drop, color: steel, label: "Drink can" }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "It's fixed to the lid by a tiny rivet, pressed out of the lid's own metal."
    text: "ONE TINY RIVET"
    highlight: "RIVET"
    visual: { kind: callout, icon: cup, parts: ["Tab", "Rivet", "Scored flap"], color: steel }
    sfx: click
  - at: 9
    dur: 6
    vo: "Around the opening is a score line, a groove cut only part way through the aluminium."
    text: "A HALF-CUT GROOVE"
    highlight: "GROOVE"
    visual: { kind: zoom, levels: [{ label: "Can lid", icon: cup }, { label: "Score line", icon: lens }, { label: "Thin metal left", icon: molecule }] }
    sfx: slice
  - at: 15
    dur: 5
    vo: "Lift the back of the tab and the front presses down on that weak spot."
    text: "LIFT THE BACK"
    highlight: "BACK"
    visual: { kind: flow, steps: [{ label: "Lift the tab", icon: arrow }, { label: "Rivet is the pivot", icon: gear }, { label: "Nose presses down", icon: arrow }] }
  - at: 20
    dur: 4
    vo: "First it cracks a small gap. Gas rushes out with that hiss."
    text: "PSSSHT"
    highlight: "PSSSHT"
    visual: { kind: wave, waves: [{ label: "Gas escaping", freq: 9, color: accent }] }
    sfx: pop
  - at: 24
    dur: 5
    vo: "Keep lifting and the flap tears along the groove and folds inside, still hinged on."
    text: "FOLDS INSIDE"
    highlight: "INSIDE"
    visual: { kind: layers, items: [{ label: "Tab stays on", color: accent }, { label: "Flap folds in", color: steel }, { label: "Drink", color: blue }] }
  - at: 29
    dur: 6
    vo: "Older pull tabs came off, and beaches filled with them. Stay-on tabs arrived in the mid 1970s."
    text: "NO MORE LITTER"
    highlight: "LITTER"
    visual: { kind: compare, mode: before-after, left: { label: "Pull-off ring", icon: arrow, tag: "Litter" }, right: { label: "Stay-on tab", icon: cup, tag: "Stays put" } }
  - at: 35
    dur: 3
    vo: "So next time you crack one open, remember..."
    text: ""
    visual: { kind: hero, icon: cup, motion: float, color: steel, label: "Stay-on tab" }
    note: "Last line runs back into the hook: 'Your can's tab is a lever, not a handle.'"
```

## Fact check

- Stay-on tab: Daniel Cudzik, Reynolds Metals, first used on cans in 1975, so "mid 1970s" holds. OK. Source: https://www.smithsonianmag.com/innovation/how-popping-open-a-can-became-the-sound-of-summer-180982527/
