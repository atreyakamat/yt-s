---
id: vid-31
title: "Why your phone stops charging at 80% on purpose 🔋"
series: youve-been-using-it-wrong
topic: "Battery charge limit"
status: ready-to-build
duration: 38
music: sneaky-snitch
accent: "#FF9F0A"
hashtags: [howthingswork, battery, phone, lifehack, shorts]
description: "Your phone pauses at 80% overnight on purpose. Sitting full and warm wears lithium batteries faster."
pinned: "What else have we all been using wrong?"
---

# vid-31 · Why your phone stops charging at 80% on purpose

## Hook

- **Chosen (0-3s):** "Your phone stops charging at 80% on purpose." Big text: STUCK AT 80%?
- **Backup hooks:**
    1. "Your phone stops at 80% on purpose."
    2. "Charging to 100% every night ages your battery."
    3. "That pause at 80% is not a bug."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your phone stops charging at 80% on purpose."
    text: "STUCK AT 80%?"
    highlight: "80%"
    visual: { kind: hero, icon: battery, motion: pulse, color: green }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "Lithium batteries wear out fastest when they sit full, especially while warm."
    text: "FULL + WARM = WEAR"
    highlight: "WEAR"
    visual: { kind: gauge, value: 90, low: "Empty", high: "Full", label: "Most stress near 100%" }
    sfx: thunk
  - at: 9
    dur: 6
    vo: "At full charge the cell sits at its highest voltage, which slowly breaks down the materials inside."
    text: "HIGH VOLTAGE STRESS"
    highlight: "STRESS"
    visual: { kind: layers, items: [{ label: "Electrolyte breaks down", color: red }, { label: "Electrodes age", color: orange }, { label: "Capacity fades", color: grey }] }
    sfx: slice
  - at: 15
    dur: 7
    vo: "So many phones learn your alarm time, hold at about 80% overnight, and finish just before you wake."
    text: "SMART PAUSE"
    highlight: "PAUSE"
    visual: { kind: flow, steps: [{ label: "Charge to about 80%", icon: battery, color: green }, { label: "Wait while you sleep", icon: clock }, { label: "Top up before alarm", icon: bolt, color: accent }] }
    sfx: click
  - at: 22
    dur: 6
    vo: "You still wake up to a full phone, but it spent hours at a gentler level."
    text: "SAME RESULT, LESS WEAR"
    highlight: "LESS WEAR"
    visual: { kind: compare, mode: before-after, left: { label: "Full all night", icon: battery, color: red, tag: "more wear" }, right: { label: "Full at sunrise", icon: sun, color: green, tag: "less wear" } }
  - at: 28
    dur: 6
    vo: "Don't switch the feature off to grab that last 20 percent early. The battery thanks you."
    text: "LEAVE IT ON"
    highlight: "ON"
    visual: { kind: callout, icon: shield, color: green, parts: ["Learns your alarm", "Holds near 80%", "Finishes on time"] }
  - at: 34
    dur: 4
    vo: "So if it looks stuck, that's because..."
    text: ""
    visual: { kind: hero, icon: battery, motion: float, color: green, label: "Patience" }
    note: "Last line runs back into the hook: Your phone stops charging at 80% on purpose."
```

## Fact check

- Lithium-ion cells age faster when kept at high state of charge and high temperature (well documented in battery research and in phone makers' battery guidance).
- High cell voltage accelerates electrolyte oxidation and electrode degradation, which reduces capacity over time.
- Major phone operating systems offer optimised or adaptive charging that holds around 80% and completes charging based on your routine/alarm.
