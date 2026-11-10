---
id: vid-57
title: "This is why drink cans are never flat on the bottom 🥫"
series: why-is-it-shaped-like-that
topic: "Can domed base"
status: ready-to-build
duration: 33
music: pixel-peeker-polka
accent: "#64D2FF"
hashtags: [howthingswork, design, sodacan, engineering, shorts]
description: "The dent under a drink can is an arch. It holds back the gas pressure with far less metal than a flat base."
pinned: "What shape should we explain next?"
---

# vid-57 · This is why drink cans are never flat on the bottom

## Hook

- **Chosen (0-3s):** "Drink cans are never flat on the bottom." Big text: NEVER FLAT
- **Backup hooks:**
    1. "Flip your can over. That dome is holding back the pressure."
    2. "A flat-bottomed can would bulge and rock."
    3. "The dent under your can is an upside-down arch."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Drink cans are never flat on the bottom."
    text: "NEVER FLAT"
    highlight: "FLAT"
    visual: { kind: hero, icon: cup, motion: spin, color: steel, label: "Flip it over" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "A sealed fizzy can is pushing outward at a few times normal air pressure."
    text: "PRESSURE INSIDE"
    highlight: "PRESSURE"
    visual: { kind: gauge, value: 75, low: "Air", high: "Sealed can", label: "Gas pushes outward" }
  - at: 8
    dur: 6
    vo: "A flat base would bulge out under that push, and the can would rock on the table."
    text: "FLAT = BULGE"
    highlight: "BULGE"
    visual: { kind: compare, mode: wrong-right, left: { label: "Flat base bulges", icon: cup, tag: "Wobbles" }, right: { label: "Domed base holds", icon: shield, tag: "Stands firm" } }
    sfx: buzz
  - at: 14
    dur: 4
    vo: "So the base curves inward, like an arch turned upside down."
    text: "AN ARCH"
    highlight: "ARCH"
    visual: { kind: callout, icon: cup, parts: ["Inward dome", "Thick rim", "Narrow foot"], color: steel }
  - at: 18
    dur: 5
    vo: "An arch spreads the push around its curve, so thin metal can take it."
    text: "SPREAD THE LOAD"
    highlight: "SPREAD"
    visual: { kind: flow, steps: [{ label: "Gas pushes on dome", icon: wind }, { label: "Curve spreads the force", icon: arrow }, { label: "Rim takes the load", icon: shield }] }
  - at: 23
    dur: 7
    vo: "That saves aluminium on billions of cans, and the small foot fits into the lid of the can below."
    text: "STACKS NEATLY"
    highlight: "STACKS"
    visual: { kind: layers, items: [{ label: "Can on top", color: steel }, { label: "Foot in the rim", color: accent }, { label: "Can below", color: steel }] }
    sfx: click
  - at: 30
    dur: 3
    vo: "Thin metal, strong shape. That's why drink cans..."
    text: ""
    visual: { kind: hero, icon: cup, motion: float, color: steel, label: "Domed base" }
    note: "Last line runs back into the hook: 'Drink cans are never flat on the bottom.'"
```

## Fact check

- Carbonated drink cans are pressurised internally, typically a few times atmospheric pressure (roughly 2-4 bar depending on drink and temperature).
- The inward dome works like an arch/dome under pressure, letting the can resist the internal pressure with a thinner base than a flat one would need.
- Can makers have thinned cans for decades, and the dome is a major part of making a light can strong.
- The narrow base foot nests inside the rim of the lid below, which helps stacking.
