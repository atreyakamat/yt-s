---
id: vid-94
title: "Contrails freeze into ice faster than you can blink ❄️"
series: the-1-second-machine
topic: "Contrails"
status: ready-to-build
duration: 35
music: hyperfun
accent: "#BF5AF2"
hashtags: [howthingswork, aviation, contrails, science, shorts]
description: "Those white lines behind planes are not smoke. Water from the engines freezes into ice crystals almost instantly in the cold air."
pinned: "What else happens in under a second?"
---

# vid-94 · Contrails freeze into ice faster than you can blink

## Hook

- **Chosen (0-3s):** "That white line behind a plane is pure ice." Big text: THAT TRAIL IS ICE
- **Backup hooks:**
    1. "Those white plane trails are made of ice."
    2. "A contrail is a cloud the plane makes itself."
    3. "Plane trails are not smoke. They're frozen water."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "That white line behind a plane is pure ice."
    text: "THAT TRAIL IS ICE"
    highlight: "ICE"
    visual: { kind: hero, icon: plane, motion: float, color: white, label: "Contrail" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Burning jet fuel makes hot exhaust full of water vapour."
    text: "FULL OF WATER"
    highlight: "WATER"
    visual: { kind: flow, steps: [{ label: "Fuel burns", icon: flame }, { label: "Hot, wet exhaust", icon: drop }] }
    sfx: click
  - at: 8
    dur: 6
    vo: "Up at cruising height, the air outside can be colder than minus forty degrees."
    text: "-40°C OUTSIDE"
    highlight: "-40°C"
    visual: { kind: counter, from: 15, to: -40, suffix: "°C", label: "ground vs cruise height", icon: thermometer }
  - at: 14
    dur: 6
    vo: "The moisture hits that air and freezes into tiny ice crystals in a split second."
    text: "FROZEN IN AN INSTANT"
    highlight: "INSTANT"
    visual: { kind: zoom, levels: [{ label: "The trail", icon: cloud }, { label: "Tiny ice crystals", icon: snowflake }, { label: "Frozen water molecules", icon: molecule }] }
    sfx: slice
  - at: 20
    dur: 5
    vo: "That's why the line starts a short gap behind the engines."
    text: "A GAP, THEN A LINE"
    highlight: "GAP"
    visual: { kind: callout, icon: plane, parts: ["Engine", "Clear gap: still cooling", "White trail starts"] }
  - at: 25
    dur: 6
    vo: "In dry air the trail vanishes fast. In damp air it spreads and lingers for ages."
    text: "SHORT OR LONG?"
    highlight: "LONG?"
    visual: { kind: compare, mode: versus, left: { label: "Dry air", icon: sun, tag: "Fades fast" }, right: { label: "Humid air", icon: cloud, tag: "Lingers" } }
  - at: 31
    dur: 4
    vo: "It's a cloud made by the plane. And remember..."
    text: ""
    visual: { kind: hero, icon: snowflake, motion: spin, color: white, label: "Made of ice" }
    note: "Last line runs back into the hook."
```

## Fact check

- Cruise-altitude air is typically below minus 40 C (often minus 50 to 56 C), so "colder than minus forty" holds; no source read in this pass beyond standard-atmosphere knowledge.
