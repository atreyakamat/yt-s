---
id: vid-47
title: "Your keyboard is three plastic sheets and a rubber bump"
series: cut-it-open
topic: "Membrane keyboard"
status: ready-to-build
duration: 41
music: cipher
accent: "#32D74B"
hashtags: [howthingswork, keyboard, computers, tech, shorts]
description: "Most cheap keyboards have no switches at all. Each key squashes a rubber dome that presses two plastic sheets together."
pinned: "What should we cut open next?"
---

# vid-47 · Your keyboard is three plastic sheets and a rubber bump

## Hook

- **Chosen (0-3s):** "Your keyboard is three sheets of plastic." Big text: THREE PLASTIC SHEETS
- **Backup hooks:**
    1. "There are no switches in your office keyboard."
    2. "Your keyboard runs on rubber bubbles."
    3. "Pressing a key just squeezes two sheets of plastic."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your keyboard is three sheets of plastic."
    text: "THREE PLASTIC SHEETS"
    highlight: "THREE"
    visual: { kind: hero, icon: key, motion: drop, color: accent, label: "Office keyboard" }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "Open a cheap keyboard and there are no switches, just layers."
    text: "NO SWITCHES"
    highlight: "NO"
    visual: { kind: layers, items: [{ label: "Keycaps", color: grey }, { label: "Rubber domes", color: accent }, { label: "Top sheet", color: cyan }, { label: "Spacer sheet", color: white }, { label: "Bottom sheet", color: cyan }] }
    sfx: slice
  - at: 9
    dur: 6
    vo: "The top and bottom sheets have silver lines printed on them."
    text: "PRINTED WIRES"
    highlight: "WIRES"
    visual: { kind: callout, icon: screen, parts: ["Silver ink tracks", "Pad under every key", "Thin plastic film"] }
  - at: 15
    dur: 6
    vo: "The middle sheet has a hole under each key, keeping them apart."
    text: "A HOLE KEEPS THEM APART"
    highlight: "HOLE"
    visual: { kind: compare, mode: before-after, left: { label: "Resting: gap", icon: box, color: grey }, right: { label: "Pressed: touching", icon: bolt, color: accent } }
  - at: 21
    dur: 6
    vo: "Press a key and a rubber dome squashes the sheets together."
    text: "DOME COLLAPSES"
    highlight: "DOME"
    visual: { kind: flow, steps: [{ label: "Key pressed", icon: key }, { label: "Rubber dome squashes", icon: bubble, color: accent }, { label: "Pads touch", icon: bolt }] }
    sfx: thunk
  - at: 27
    dur: 5
    vo: "The circuit closes and the keyboard knows which key it was."
    text: "CIRCUIT CLOSED"
    highlight: "CLOSED"
    visual: { kind: grid, icon: key, count: 40, highlight: 1, label: "One pad out of 100+" }
  - at: 32
    dur: 5
    vo: "Let go and the dome pops back like a tiny trampoline."
    text: "IT BOUNCES BACK"
    highlight: "BOUNCES"
    visual: { kind: cycle, icon: bubble, steps: ["Squash", "Contact", "Pop back"] }
    sfx: pop
  - at: 37
    dur: 4
    vo: "That squishy feel? It's the rubber, because your keyboard..."
    text: ""
    visual: { kind: hero, icon: key, motion: float, color: accent, label: "Rubber + plastic" }
    note: "Loops into: is three sheets of plastic."
```

## Fact check

- Membrane keyboards use a top and bottom membrane with printed conductive traces and a spacer layer with holes between them: standard construction.
- A rubber dome under each key provides the spring-back and pushes the membranes together: standard rubber-dome design.
- The conductive traces are often silver-based ink: common in membrane switches.
