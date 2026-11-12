---
id: vid-28
title: "Your toilet lid isn't just for looks 🚽"
series: youve-been-using-it-wrong
topic: "Closing the toilet lid before flushing"
status: ready-to-build
duration: 38
music: sneaky-snitch
accent: "#FF9F0A"
hashtags: [howthingswork, toilet, bathroom, science, shorts]
description: "Every flush throws out a plume of tiny droplets. Closing the lid first keeps most of them in the bowl."
pinned: "What else have we all been using wrong?"
---

# vid-28 · Your toilet lid isn't just for looks

## Hook

- **Chosen (0-3s):** "Your toilet lid isn't there just to look tidy." Big text: THE LID HAS A JOB
- **Backup hooks:**
    1. "Every flush sprays a cloud you can't see."
    2. "Scientists filmed a flush with lasers."
    3. "This is why you flush with the lid down."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your toilet lid isn't there just to look tidy."
    text: "THE LID HAS A JOB"
    highlight: "JOB"
    visual: { kind: hero, icon: water, label: "Toilet lid", color: cyan, motion: drop }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "Every flush throws up a cloud of tiny droplets you can't see."
    text: "AN INVISIBLE PLUME"
    highlight: "PLUME"
    visual: { kind: zoom, levels: [{ label: "Flushing bowl", icon: water }, { label: "Spray above it", icon: wind }, { label: "Tiny droplets", icon: drop }] }
  - at: 9
    dur: 6
    vo: "In 2022, scientists lit a flushing toilet with green lasers to film it."
    text: "FILMED WITH LASERS"
    highlight: "LASERS"
    visual: { kind: flow, steps: [{ label: "Toilet flushed", icon: water }, { label: "Green laser sheet", icon: bulb, color: green }, { label: "Camera films droplets", icon: eye }] }
    sfx: click
  - at: 15
    dur: 6
    vo: "The plume shot up more than 1.3 metres in about eight seconds."
    text: "1.3 METRES UP"
    highlight: "1.3"
    visual: { kind: counter, to: 1.3, suffix: " m", decimals: 1, label: "Plume height, about 8 s", icon: wind }
  - at: 21
    dur: 6
    vo: "Droplets that small can hang in the air, then settle on nearby surfaces."
    text: "THEY DRIFT AND LAND"
    highlight: "DRIFT"
    visual: { kind: cycle, icon: wind, steps: ["Flush", "Spray", "Drift", "Settle"] }
  - at: 27
    dur: 6
    vo: "Close the lid first and far fewer droplets get out into the room."
    text: "LID DOWN, THEN FLUSH"
    highlight: "LID DOWN"
    visual: { kind: compare, mode: wrong-right, left: { label: "Lid up", icon: wind, color: red, tag: "Spray escapes" }, right: { label: "Lid down", icon: shield, color: green, tag: "Mostly trapped" } }
    sfx: thunk
  - at: 33
    dur: 5
    vo: "Same flush, one small habit. Because your toilet lid..."
    text: ""
    visual: { kind: hero, icon: water, label: "Lid down first", color: cyan, motion: float }
    note: "Last line runs back into the hook."
```

## Fact check

- 2022 University of Colorado Boulder laser study: plume rose over 1.3 m in about 7.5 to 8 s (press reports say 1.5 m in 8 s). OK as "more than 1.3 metres in about eight seconds". Source: https://www.colorado.edu/today/2022/12/08/cu-scientists-shine-light-what-comes-when-you-flush
- Lid-down flushing reduces droplets escaping; script says "far fewer"; the study itself tested lidless toilets, so this is a reasonable inference, not a measured result.
