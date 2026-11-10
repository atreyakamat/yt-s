---
id: vid-03
title: The hole in your pen cap could save a life
series: youve-been-using-it-wrong
topic: The hole in a pen cap
status: ready-to-build
duration: 26
music: sneaky-snitch
musicVolume: 0.12
accent: "#FFD60A"
---

# vid-03 · The hole in your pen cap could save a life

## Hook

- **Chosen (0-3s):** "This hole is not for the ink."
- **Backup hooks:**
    1. "Pen companies put this hole here on purpose."
    2. "You've chewed this cap. Here's why it has a hole."
    3. "This tiny hole is a safety feature."

## Scenes

The build reads this block. `note` is the exact visual to draw for that scene.

```yaml
scenes:
  - at: 0
    dur: 3
    sfx: whoosh
    vo: "This hole is not for the ink."
    text: "NOT FOR THE INK"
    visual: { kind: pen-cap, state: hook }
    note: "Macro of pen cap top, hole highlighted with a red ring"
  - at: 3
    dur: 5
    sfx: pop
    vo: "Kids chew pen caps. Sometimes they swallow them."
    text: ""
    visual: { kind: pen-cap, state: chew }
    note: "Kid chewing a pen cap (illustration, not real footage)"
  - at: 8
    dur: 7
    sfx: whoosh
    vo: "If a cap gets stuck in the airway, that hole lets air keep flowing."
    text: "AIR STILL FLOWS"
    visual: { kind: pen-cap, state: airway }
    note: "Cutaway of a throat, cap lodged, air arrows flowing through the hole"
  - at: 15
    dur: 6
    sfx: thunk
    vo: "It's part of a safety standard. Many pen caps are required to have one."
    text: "SAFETY STANDARD"
    visual: { kind: pen-cap, state: standard }
    note: "Safety standard document graphic stamps \"ISO 11540\""
  - at: 21
    dur: 5
    sfx: pop
    vo: "So yes, it's tiny. But that's the point of this hole..."
    text: ""
    visual: { kind: pen-cap, state: hook }
    note: "Cut back to the cap, ring pulses"
```

## Notes

**Loop:** "the point of this hole..." runs into "This hole is not for the ink."
**Fact check:** cite ISO 11540 (caps for writing instruments, safety requirements). Avoid medical advice; no real child footage.

Visual style, safe areas and audio rules: same as [vid-01](../cut-it-open/vid-01.md).
