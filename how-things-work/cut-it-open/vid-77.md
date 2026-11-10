---
id: vid-77
title: "Your laptop fan isn't cooling the chip directly"
series: cut-it-open
topic: "Laptop fan"
status: ready-to-build
duration: 42
music: cipher
accent: "#0A84FF"
hashtags: [howthingswork, laptop, computers, tech, cooling, shorts]
description: "A laptop fan doesn't blow on the processor. It blows through a copper fin stack that a heat pipe connects to the chip."
pinned: "What should we cut open next?"
---

# vid-77 · Your laptop fan isn't cooling the chip directly

## Hook

- **Chosen (0-3s):** "Your laptop fan never blows on the hot chip." Big text: IT MISSES THE CHIP
- **Backup hooks:**
    1. "Your laptop fan never touches the hot chip."
    2. "That whirring is your laptop moving heat across the case."
    3. "There's a copper radiator inside your laptop."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your laptop fan never blows on the hot chip."
    text: "IT MISSES THE CHIP"
    highlight: "MISSES"
    visual: { kind: hero, icon: fan, motion: spin, color: accent, label: "Laptop fan" }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "The processor sits under a flat copper plate, often far from the fan."
    text: "COPPER PLATE"
    highlight: "COPPER"
    visual: { kind: callout, icon: chip, color: brass, parts: ["Processor", "Copper plate on top", "Heat pipe leaving it"] }
    sfx: slice
  - at: 9
    dur: 6
    vo: "A copper heat pipe carries the heat across to a stack of thin fins."
    text: "HEAT PIPE"
    highlight: "PIPE"
    visual: { kind: flow, steps: [{ label: "Chip heats up", icon: chip }, { label: "Heat pipe carries it", icon: pipe, color: brass }, { label: "Fin stack", icon: gear }] }
  - at: 15
    dur: 6
    vo: "The fan pulls cool air in and pushes it through those fins."
    text: "AIR THROUGH FINS"
    highlight: "FINS"
    visual: { kind: zoom, levels: [{ label: "Laptop", icon: screen }, { label: "Fan", icon: fan }, { label: "Fins", icon: wind, color: accent }] }
    sfx: thunk
  - at: 21
    dur: 6
    vo: "Hot air leaves through the side or back vents."
    text: "HOT AIR OUT"
    highlight: "HOT"
    visual: { kind: compare, mode: versus, left: { label: "Cool air in", icon: snowflake, color: cyan, tag: "bottom vents" }, right: { label: "Hot air out", icon: flame, color: red, tag: "side or back" } }
  - at: 27
    dur: 5
    vo: "The hotter the chip gets, the faster the fan spins."
    text: "HOTTER = FASTER"
    highlight: "FASTER"
    visual: { kind: gauge, value: 85, low: "Idle", high: "Full load", label: "Fan speeds up with heat" }
  - at: 32
    dur: 6
    vo: "Near about a hundred degrees, the chip slows itself down to stay safe."
    text: "IT SLOWS ITSELF"
    highlight: "SLOWS"
    visual: { kind: bars, unit: "°C", items: [{ label: "Body", value: 37, color: green }, { label: "Boiling water", value: 100, color: blue }, { label: "Chip safety limit", value: 100, color: red }] }
  - at: 38
    dur: 4
    vo: "So when it whirs, remember: your laptop fan..."
    text: ""
    visual: { kind: hero, icon: fan, motion: spin, color: accent, label: "Cooling the fins" }
    note: "Loops into: never blows on the hot chip."
```

## Fact check

- Most laptops use a heat pipe to carry heat from the CPU/GPU to a fin stack (heat sink) by the fan exhaust: standard thin-laptop cooling design.
- Fans are speed-controlled by temperature: standard fan curve behaviour.
- Many laptop processors throttle at around 95-105 °C (maximum junction temperature often about 100 °C), so 'about a hundred degrees' is fair.
