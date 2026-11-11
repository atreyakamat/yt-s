---
id: vid-67
title: "This is why nuts always have six sides"
series: why-is-it-shaped-like-that
topic: "Hex nut"
status: ready-to-build
duration: 37
music: pixel-peeker-polka
accent: "#64D2FF"
hashtags: [engineering, tools, design, diy, shorts]
description: "Six sides let you re-grip a nut every 60 degrees in tight spaces, while keeping the corners big and strong."
pinned: "What shape should we explain next?"
---

# vid-67 · This is why nuts always have six sides

## Hook

- **Chosen (0-3s):** "This is why nuts always have six sides." Big text: SIX SIDES, NOT FOUR
- **Backup hooks:**
    1. "Why aren't nuts square?"
    2. "Six sides is the perfect number for a nut."
    3. "Twelve-sided nuts would round off faster."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "This is why nuts always have six sides."
    text: "SIX SIDES, NOT FOUR"
    highlight: "SIX"
    visual: { kind: hero, icon: gear, motion: spin, color: steel, label: "Hex nut" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "With a square nut, you need a quarter turn before you can re-grip it."
    text: "SQUARE NEEDS 90°"
    highlight: "90°"
    visual: { kind: compare, mode: versus, left: { label: "Square: 90° per grip", icon: box }, right: { label: "Hex: 60° per grip", icon: gear } }
  - at: 8
    dur: 6
    vo: "Behind an engine or under a sink, there's rarely room for a big swing."
    text: "NO ROOM TO SWING"
    highlight: "NO ROOM"
    visual: { kind: flow, steps: [{ label: "Tight space", icon: house }, { label: "Short swing", icon: arrow }, { label: "Lift off and re-grip", icon: wrench }] }
    sfx: thunk
  - at: 14
    dur: 6
    vo: "Six sides lets you re-grip every sixty degrees. Flip an angled spanner and it's even less."
    text: "RE-GRIP EVERY 60°"
    highlight: "60°"
    visual: { kind: bars, unit: "°", items: [{ label: "Square nut", value: 90, color: grey }, { label: "Hex nut", value: 60, color: accent }, { label: "Hex, flipped spanner", value: 30, color: green }] }
  - at: 20
    dur: 6
    vo: "So why not more sides? More corners means smaller corners, and those round off."
    text: "WHY NOT MORE?"
    highlight: "MORE?"
    visual: { kind: gauge, value: 30, low: "Rounds off", high: "Strong grip", label: "Grip with many tiny corners" }
    sfx: buzz
  - at: 26
    dur: 6
    vo: "Six is the sweet spot: big strong corners, short swings, and easy to make from hex bar."
    text: "THE SWEET SPOT"
    highlight: "SWEET SPOT"
    visual: { kind: callout, icon: gear, parts: ["Six strong corners", "60° swing to re-grip", "Cut from hex bar"] }
    sfx: click
  - at: 32
    dur: 5
    vo: "Next time you grab a spanner, remember..."
    text: ""
    visual: { kind: hero, icon: wrench, motion: float, color: accent, label: "Six is the sweet spot" }
    note: "Last line runs back into the hook: 'This is why nuts always have six sides.'"
```

## Fact check

- A square nut has 90° symmetry, a hexagonal nut 60°, so a spanner can be repositioned every 60° on a hex nut.
- Open-end spanners usually have heads angled about 15° to the handle; flipping the spanner over lets you work in about a 30° swing on a hex nut.
- Nuts with more, smaller corners give less contact per corner and round off more easily under high torque; hexagons balance access and strength.
- Many nuts and bolts are made from hexagonal bar stock or forged to a hex shape.
