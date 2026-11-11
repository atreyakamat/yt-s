---
id: vid-42
title: "Your juice carton is six layers thick, not one 🧃"
series: cut-it-open
topic: "Drink carton layers"
status: ready-to-build
duration: 41
music: investigations
accent: "#32D74B"
hashtags: [howthingswork, packaging, carton, recycling, shorts]
description: "A long-life drink carton looks like card, but it's paper, plastic and a whisper of aluminium stacked in about six layers."
pinned: "What should we cut open next?"
---

# vid-42 · Your juice carton is six layers thick, not one

## Hook

- **Chosen (0-3s):** "Your juice carton is six layers thick." Big text: 6 LAYERS
- **Backup hooks:**
    1. "That juice carton is mostly paper, plus a secret metal layer."
    2. "There's aluminium inside your milk carton."
    3. "Why carton juice lasts months without a fridge."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your juice carton is six layers thick."
    text: "6 LAYERS"
    highlight: "6"
    visual: { kind: hero, icon: box, motion: spin, color: accent, label: "Drink carton" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Cut one open and peel it apart. Here's the stack, from outside in."
    text: "PEEL IT APART"
    highlight: "PEEL"
    visual: { kind: layers, items: [{ label: "Plastic coat", color: cyan }, { label: "Paperboard", color: brown }, { label: "Plastic glue", color: cyan }, { label: "Aluminium foil", color: steel }, { label: "Plastic", color: cyan }, { label: "Plastic", color: cyan }] }
    sfx: slice
  - at: 8
    dur: 5
    vo: "The paperboard is most of the weight. It gives the box its stiff shape."
    text: "PAPER = STRENGTH"
    highlight: "STRENGTH"
    visual: { kind: bars, unit: "%", items: [{ label: "Paperboard", value: 75, color: brown }, { label: "Plastic", value: 20, color: cyan }, { label: "Aluminium", value: 5, color: steel }] }
  - at: 13
    dur: 6
    vo: "The plastic layers keep the juice from soaking into the paper, and keep rain out too."
    text: "WATERPROOF"
    highlight: "WATERPROOF"
    visual: { kind: callout, icon: drop, parts: ["Juice side sealed", "Outer side sealed", "Paper stays dry"], color: cyan }
  - at: 19
    dur: 6
    vo: "The foil is thinner than a hair. It blocks light and oxygen, which spoil juice and milk."
    text: "THE METAL SHIELD"
    highlight: "METAL"
    visual: { kind: zoom, levels: [{ label: "Carton wall", icon: box }, { label: "Foil layer", icon: shield }, { label: "Light and air blocked", icon: sun }] }
  - at: 25
    dur: 7
    vo: "The drink is sterilised and sealed in a sterile carton, so it can sit on a shelf for months."
    text: "MONTHS ON A SHELF"
    highlight: "MONTHS"
    visual: { kind: flow, steps: [{ label: "Sterilise the drink", icon: flame }, { label: "Fill a sterile carton", icon: box }, { label: "Seal shut", icon: lock }] }
  - at: 32
    dur: 5
    vo: "Recyclers pulp the paper away from the plastic and foil to reuse it."
    text: "SPLIT TO RECYCLE"
    highlight: "RECYCLE"
    visual: { kind: cycle, icon: leaf, steps: ["Shred", "Soak and pulp", "Paper reused"] }
    sfx: whoosh
  - at: 37
    dur: 4
    vo: "Not just card. Every time you pour, your juice carton is..."
    text: ""
    visual: { kind: hero, icon: box, motion: float, color: accent, label: "Six layers" }
    note: "Last line runs back into the hook: 'Your juice carton is six layers thick.'"
```

## Fact check

- Aseptic drink cartons are commonly described as six layers: polyethylene / paperboard / polyethylene / aluminium foil / two polyethylene layers.
- Typical makeup by weight is roughly 75% paperboard, 20% polyethylene, 5% aluminium (industry figures), shown as rounded bars.
- The aluminium layer is a few micrometres thick, thinner than a human hair (about 50-100 micrometres), and blocks light and oxygen.
- Aseptic (sterile-filled) cartons let UHT milk and juice keep unopened for months without refrigeration.
- Carton recycling pulps the paper fibres and separates the plastic/aluminium remainder.
