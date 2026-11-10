---
id: vid-86
title: "Your pressure cooker boils water at 120°C. Here's how 🔥"
series: cut-it-open
topic: "Pressure cooker"
status: ready-to-build
duration: 41
music: investigations
accent: "#0A84FF"
hashtags: [howthingswork, science, pressurecooker, cooking, shorts]
description: "Seal the steam in and the pressure roughly doubles, so water boils at around 120°C and food cooks much faster."
pinned: "What should we cut open next?"
---

# vid-86 · Your pressure cooker boils water at 120°C. Here's how

## Hook

- **Chosen (0-3s):** "Your pressure cooker makes water boil at 120 degrees." Big text: BOILING AT 120°C
- **Backup hooks:**
    1. "Water can get hotter than 100°C. Your pressure cooker proves it."
    2. "A pressure cooker is a steam trap with a valve."
    3. "Your beans cook faster because the water can't boil."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your pressure cooker makes water boil at 120 degrees."
    text: "BOILING AT 120°C"
    highlight: "120°C"
    visual: { kind: hero, icon: flame, motion: pulse, color: red, label: "Pressure cooker" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "In an open pot, water can't get hotter than about 100 degrees. It turns to steam."
    text: "STUCK AT 100°C"
    highlight: "100°C"
    visual: { kind: gauge, value: 50, low: "0°C", high: "200°C", label: "Open pot: about 100°C" }
  - at: 8
    dur: 6
    vo: "Lock the lid with its rubber gasket, and that steam has nowhere to go."
    text: "SEALED TIGHT"
    highlight: "SEALED"
    visual: { kind: layers, items: [{ label: "Locking lid", color: steel }, { label: "Rubber gasket", color: dark }, { label: "Trapped steam", color: white }, { label: "Food and water", color: blue }, { label: "Thick base", color: grey }] }
    sfx: thunk
  - at: 14
    dur: 6
    vo: "Trapped steam pushes the pressure up to about double normal air pressure."
    text: "DOUBLE PRESSURE"
    highlight: "DOUBLE"
    visual: { kind: counter, to: 2, suffix: "x", label: "times normal air pressure", icon: cloud }
  - at: 20
    dur: 6
    vo: "Under that pressure, water has to get hotter before it can boil, around 120 degrees."
    text: "HOTTER WATER"
    highlight: "HOTTER"
    visual: { kind: bars, unit: "°C", items: [{ label: "Open pot", value: 100, color: blue }, { label: "Pressure cooker", value: 120, color: red }] }
  - at: 26
    dur: 5
    vo: "Hotter water cooks beans and tough meat in a fraction of the time."
    text: "MUCH FASTER"
    highlight: "FASTER"
    visual: { kind: compare, mode: before-after, left: { label: "Open pot", icon: flame, tag: "Slow" }, right: { label: "Pressure cooker", icon: clock, tag: "Much faster" } }
  - at: 31
    dur: 6
    vo: "A weighted valve lets extra steam escape, and a backup plug blows if that fails."
    text: "SAFETY VALVES"
    highlight: "SAFETY"
    visual: { kind: flow, steps: [{ label: "Pressure too high", icon: cloud }, { label: "Valve lifts", icon: arrow }, { label: "Steam escapes", icon: wind }, { label: "Backup plug if needed", icon: shield }] }
    sfx: buzz
  - at: 37
    dur: 4
    vo: "Same water, same stove. But in there..."
    text: ""
    visual: { kind: hero, icon: flame, motion: float, color: red, label: "Sealed steam" }
    note: "Loop: the last line runs straight back into the hook."
```

## Fact check

- Water boils at about 100 °C at sea-level air pressure.
- Stovetop pressure cookers typically run at about 15 psi (about 1 bar) above atmospheric, roughly double normal air pressure in absolute terms.
- At that pressure water boils at about 120-121 °C, which is why cooking times drop sharply.
- Pressure cookers have a regulating valve (weight or spring) plus secondary safety devices such as a release plug or gasket vent.
