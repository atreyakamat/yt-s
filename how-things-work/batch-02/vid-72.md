---
id: vid-72
title: "Your crisp packet isn't full of air, it's full of nitrogen 🥔"
series: cut-it-open
topic: "Crisp packet nitrogen"
status: ready-to-build
duration: 34
music: investigations
accent: "#0A84FF"
hashtags: [howthingswork, food, crisps, packaging, shorts]
description: "That puffy crisp bag is filled with nitrogen on purpose. It keeps the oil fresh and turns the bag into a pillow."
pinned: "What should we cut open next?"
---

# vid-72 · Your crisp packet isn't full of air, it's full of nitrogen

## Hook

- **Chosen (0-3s):** "Your crisp packet isn't full of air. It's nitrogen." Big text: NOT AIR
- **Backup hooks:**
    1. "Your crisp bag isn't half empty. It's a pillow."
    2. "That 'air' in your crisp packet isn't air."
    3. "Why crisp bags puff up like balloons."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your crisp packet isn't full of air. It's nitrogen."
    text: "NOT AIR"
    highlight: "NOT"
    visual: { kind: hero, icon: bag, motion: pulse, color: orange, label: "Crisp packet" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Air is about a fifth oxygen, and oxygen slowly turns crisp oil stale and rancid."
    text: "OXYGEN = STALE"
    highlight: "STALE"
    visual: { kind: bars, unit: "%", items: [{ label: "Nitrogen in air", value: 78, color: blue }, { label: "Oxygen in air", value: 21, color: red }] }
  - at: 8
    dur: 5
    vo: "So on the line, the bag is flushed with nitrogen just before it's sealed."
    text: "NITROGEN FLUSH"
    highlight: "FLUSH"
    visual: { kind: flow, steps: [{ label: "Crisps drop in", icon: food }, { label: "Nitrogen blown in", icon: wind }, { label: "Bag sealed hot", icon: flame }] }
    sfx: whoosh
  - at: 13
    dur: 6
    vo: "Nitrogen does nothing to the food. No taste, no smell, it just pushes the oxygen out."
    text: "DOES NOTHING"
    highlight: "NOTHING"
    visual: { kind: callout, icon: molecule, parts: ["No taste", "No smell", "Won't react"], color: blue }
  - at: 19
    dur: 5
    vo: "The puffed-up bag also works as a cushion, so the crisps don't arrive as crumbs."
    text: "A PILLOW"
    highlight: "PILLOW"
    visual: { kind: compare, mode: versus, left: { label: "Flat bag", icon: bag, tag: "Crumbs" }, right: { label: "Puffed bag", icon: bag, tag: "Whole crisps" } }
  - at: 24
    dur: 6
    vo: "The film itself is plastic with a thin metal coat inside, to keep out light and damp."
    text: "SHINY INSIDE"
    highlight: "SHINY"
    visual: { kind: layers, items: [{ label: "Printed plastic", color: orange }, { label: "Metal coating", color: steel }, { label: "Sealing plastic", color: grey }] }
    sfx: slice
  - at: 30
    dur: 4
    vo: "So that slack space isn't a trick. Your crisp packet..."
    text: ""
    visual: { kind: hero, icon: bag, motion: float, color: orange, label: "Nitrogen inside" }
    note: "Last line runs back into the hook: 'Your crisp packet isn't full of air. It's nitrogen.'"
```

## Fact check

- Dry air is about 78% nitrogen and 21% oxygen. OK. Source: https://en.wikipedia.org/wiki/Atmosphere_of_Earth
