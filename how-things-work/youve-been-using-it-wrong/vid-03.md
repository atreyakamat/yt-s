---
id: vid-03
title: The hole in your pen cap could save a life
series: youve-been-using-it-wrong
topic: The hole in a pen cap
status: script-ready
duration: 25
music: sneaky-snitch
musicVolume: 0.12
accent: "#FFD60A"
---

# vid-03 · The hole in your pen cap could save a life

> **Status: script ready, visuals not built yet.** The build renders it with a placeholder card where the `pen-cap-hole` visual will go. Next step: build that visual the way `Lock.tsx` was built for vid-01, then set `status: ready-to-build`.

## Hook

- **Chosen (0-2s):** "This hole is not for the ink."
- **Backup hooks:**
    1. "Pen companies put this hole here on purpose."
    2. "You've chewed this cap. Here's why it has a hole."
    3. "This tiny hole is a safety feature."

## Scenes

The build reads this block. `note` is the exact visual to draw for that scene.

```yaml
scenes:
  - at: 0
    dur: 2
    vo: "This hole is not for the ink."
    text: "NOT FOR THE INK"
    visual: { kind: pen-cap-hole }
    note: "Macro of pen cap top, hole highlighted with a red ring"
  - at: 2
    dur: 5
    vo: "Kids chew pen caps. Sometimes they swallow them."
    text: ""
    visual: { kind: pen-cap-hole }
    note: "Kid chewing a pen cap (illustration, not real footage)"
  - at: 7
    dur: 7
    vo: "If a cap gets stuck in the airway, that hole lets air keep flowing."
    text: "AIR STILL FLOWS"
    visual: { kind: pen-cap-hole }
    note: "Cutaway of a throat, cap lodged, air arrows flowing through the hole"
  - at: 14
    dur: 6
    vo: "It's part of a safety standard. Many pen caps are required to have one."
    text: "SAFETY STANDARD"
    visual: { kind: pen-cap-hole }
    note: "Safety standard document graphic stamps \"ISO 11540\""
  - at: 20
    dur: 5
    vo: "So yes, it's tiny. But that's the point of this hole..."
    text: ""
    visual: { kind: pen-cap-hole }
    note: "Cut back to the cap, ring pulses"
```

## Notes

**Loop:** "the point of this hole..." runs into "This hole is not for the ink."
**Fact check:** cite ISO 11540 (caps for writing instruments, safety requirements). Avoid medical advice; no real child footage.

Visual style, safe areas and audio rules: same as [vid-01](../cut-it-open/vid-01.md).
