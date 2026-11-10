---
id: vid-13
title: "Your toilet tank runs on one floating rubber flap 🚽"
series: cut-it-open
topic: "Toilet flush valve flapper"
status: ready-to-build
duration: 38
music: investigations
accent: "#FFD60A"
hashtags: [howthingswork, toilet, plumbing, bathroom, shorts]
description: "Press the handle and a hollow rubber flapper lifts, floats open while the tank drains, then drops back onto its seal."
pinned: "What should we cut open next?"
---

# vid-13 · Your toilet tank runs on one floating rubber flap

## Hook

- **Chosen (0-3s):** "Your toilet tank runs on one floating rubber flap." Big text: ONE RUBBER FLAP
- **Backup hooks:**
    1. "There's no motor in your toilet tank, just a floating flap."
    2. "This rubber flap decides when your flush stops."
    3. "A drop of food colouring can find a toilet leak."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your toilet tank runs on one floating rubber flap."
    text: "ONE RUBBER FLAP"
    highlight: "FLAP"
    visual: { kind: hero, icon: water, label: "Toilet tank", color: cyan, motion: drop }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "Lift the lid: at the bottom is a big hole sealed by a rubber flapper or plug."
    text: "A PLUG IN THE FLOOR"
    highlight: "PLUG"
    visual: { kind: layers, items: [{ label: "Tank of water", color: cyan }, { label: "Rubber flapper", color: red }, { label: "Hole to the bowl", color: dark }] }
  - at: 9
    dur: 6
    vo: "Press the handle and a chain or rod lifts it up off the hole."
    text: "THE HANDLE LIFTS IT"
    highlight: "LIFTS"
    visual: { kind: flow, steps: [{ label: "Press the handle", icon: tool }, { label: "Chain lifts the flapper", icon: arrow }, { label: "Water rushes down", icon: water }] }
    sfx: click
  - at: 15
    dur: 6
    vo: "The flapper is hollow and traps air, so it floats open while the tank drains."
    text: "IT FLOATS OPEN"
    highlight: "FLOATS"
    visual: { kind: callout, icon: water, parts: ["Hollow flapper", "Trapped air pocket", "Floats while water's high"] }
  - at: 21
    dur: 6
    vo: "Once the water level drops, it loses its float and falls back onto the seal."
    text: "DROPS SHUT"
    highlight: "SHUT"
    visual: { kind: cycle, icon: water, steps: ["Lift", "Float open", "Tank drains", "Drops shut"] }
    sfx: thunk
  - at: 27
    dur: 6
    vo: "Old flappers warp and leak. Food colouring in the tank showing up in the bowl means a leak."
    text: "THE SILENT LEAK"
    highlight: "LEAK"
    visual: { kind: gauge, value: 70, low: "Sealed", high: "Leaking", label: "Old, warped flapper" }
  - at: 33
    dur: 5
    vo: "No electronics at all. Your toilet tank..."
    text: ""
    visual: { kind: hero, icon: water, label: "Floating flap", color: cyan, motion: float }
    note: "Last line runs back into the hook."
```

## Fact check

- Flapper or drop valve → the outlet at the bottom of a cistern is sealed by a rubber flapper (common in North America) or a plug-type drop valve.
- Handle lifts it via chain or rod → standard lever mechanism.
- Flapper floats → flappers are hollow/air-filled so they stay buoyant until the water level falls, then close.
- Food colouring dye test → a standard leak test recommended by water utilities.
