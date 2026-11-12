---
id: vid-73
title: "Your quarter-turn tap seals with two ceramic discs 💧"
series: cut-it-open
topic: "Ceramic disc tap cartridge"
status: ready-to-build
duration: 38
music: investigations
accent: "#0A84FF"
hashtags: [howthingswork, tap, plumbing, ceramics, shorts]
description: "Modern taps don't use rubber washers. Two ultra-flat ceramic discs slide over each other, and water flows when their holes line up."
pinned: "What should we cut open next?"
---

# vid-73 · Your quarter-turn tap seals with two ceramic discs

## Hook

- **Chosen (0-3s):** "Your quarter-turn tap seals with two ceramic discs." Big text: TWO CERAMIC DISCS
- **Backup hooks:**
    1. "There's no rubber washer in your tap."
    2. "Two discs flat enough to seal with no rubber."
    3. "Why your tap only needs a quarter turn."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your quarter-turn tap seals with two ceramic discs."
    text: "TWO CERAMIC DISCS"
    highlight: "CERAMIC"
    visual: { kind: hero, icon: drop, label: "Quarter-turn tap", color: cyan, motion: spin }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "Old taps squeezed a rubber washer onto a seat, and washers wore out and dripped."
    text: "NO MORE WASHERS"
    highlight: "WASHERS"
    visual: { kind: compare, mode: versus, left: { label: "Old: rubber washer", icon: drop, color: grey, tag: "Wears, drips" }, right: { label: "New: ceramic discs", icon: shield, color: accent, tag: "Lasts for years" } }
  - at: 9
    dur: 6
    vo: "Inside the cartridge, two discs sit face to face. Each has holes cut into it."
    text: "FACE TO FACE"
    highlight: "FACE"
    visual: { kind: layers, items: [{ label: "Spindle", color: steel }, { label: "Moving ceramic disc", color: accent }, { label: "Fixed ceramic disc", color: white }, { label: "Water inlet", color: cyan }] }
  - at: 15
    dur: 6
    vo: "Turn the handle and the top disc rotates. When the holes line up, water flows."
    text: "LINE UP THE HOLES"
    highlight: "HOLES"
    visual: { kind: flow, steps: [{ label: "Turn the handle", icon: tool }, { label: "Top disc rotates", icon: gear }, { label: "Holes line up: flow", icon: water }] }
    sfx: click
  - at: 21
    dur: 6
    vo: "The discs are polished so flat that they seal against each other with no rubber at all."
    text: "FLAT ENOUGH TO SEAL"
    highlight: "SEAL"
    visual: { kind: zoom, levels: [{ label: "Ceramic disc", icon: shield }, { label: "Polished face", icon: star }, { label: "Almost perfectly flat", icon: eye }] }
  - at: 27
    dur: 6
    vo: "The ceramic is harder than steel, so grit and limescale barely scratch it."
    text: "HARDER THAN STEEL"
    highlight: "HARDER"
    visual: { kind: bars, unit: "Mohs", items: [{ label: "Limescale", value: 3, color: grey }, { label: "Steel", value: 4.5, color: steel }, { label: "Alumina ceramic", value: 9, color: accent }] }
  - at: 33
    dur: 5
    vo: "A quarter turn, no drips. Because your quarter-turn tap..."
    text: ""
    visual: { kind: hero, icon: drop, label: "No washer", color: cyan, motion: float }
    note: "Last line runs back into the hook."
```

## Fact check

- Mohs: calcite (limescale) 3, corundum (alumina ceramic) 9; steel is listed about 4 to 4.5 in Wikipedia's table (a caption says 5.5), so the chart now shows 4.5. FIXED. Source: https://en.wikipedia.org/wiki/Mohs_scale_of_mineral_hardness
