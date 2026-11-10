---
id: vid-06
title: Why self-checkout always knows
series: cut-it-open
topic: Self-checkout scale
status: ready-to-build
duration: 36
music: sneaky-snitch
musicVolume: 0.12
accent: "#FFD60A"
---

# vid-06 · Why self-checkout always knows

## Hook

- **Chosen (0-3s):** "Self-checkout isn't watching. It's weighing."
- **Backup hooks:**
    1. "Self-checkout knows what you didn't scan. Here's how."
    2. "'Unexpected item in bagging area' explained in 30 seconds."
    3. "There's a scale watching you at self-checkout."

## Scenes

The build reads this block. `note` is the exact visual to draw for that scene.

```yaml
scenes:
  - at: 0
    dur: 3
    sfx: buzz
    vo: "Self-checkout isn't watching. It's weighing."
    text: "IT'S A SCALE"
    visual: { kind: checkout, state: screen }
    note: "Screen flashing \"Unexpected item in bagging area\""
  - at: 3
    dur: 7
    sfx: pop
    vo: "Under the bagging area are load cells, sensors that weigh everything to a few grams."
    text: "LOAD CELLS"
    visual: { kind: checkout, state: loadcells }
    note: "Bagging area cut away, load cells under the shelf glow"
  - at: 10
    dur: 8
    sfx: pop
    vo: "When you scan something, the machine looks up how much it should weigh."
    text: "EXPECTED: 1,035g"
    visual: { kind: checkout, state: lookup }
    note: "Barcode scan, a database card pops up: \"Milk 1L, 1,035 g\""
  - at: 18
    dur: 7
    sfx: unlock
    vo: "Put it in the bag. If the weight matches, you're fine."
    text: "MATCH"
    visual: { kind: checkout, state: match }
    note: "Item placed, scale reads 1,036 g, green tick"
  - at: 25
    dur: 7
    sfx: buzz
    vo: "Add weight it didn't expect, and it stops everything."
    text: "MISMATCH"
    visual: { kind: checkout, state: mismatch }
    note: "Unscanned item placed, weight jumps, red alert"
  - at: 32
    dur: 4
    sfx: buzz
    vo: "Which is exactly why you keep seeing..."
    text: ""
    visual: { kind: checkout, state: screen }
    note: "Back to the flashing screen"
```

## Notes

**Loop:** "keep seeing..." runs into the opening screen and line.
**Fact check:** many systems now also use cameras; keep claim to the scale's role, not "no cameras ever".

Visual style, safe areas and audio rules: same as [vid-01](../cut-it-open/vid-01.md).
