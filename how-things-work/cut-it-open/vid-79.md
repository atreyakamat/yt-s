---
id: vid-79
title: "A jet engine's big fan does most of the pushing"
series: cut-it-open
topic: "Jet engine"
status: ready-to-build
duration: 38
music: investigations
accent: "#0A84FF"
hashtags: [howthingswork, aviation, jetengine, engineering, shorts]
description: "Inside a modern jet engine, the fire mostly spins a giant fan. That fan, not the hot exhaust, gives most of the thrust."
pinned: "What should we cut open next?"
---

# vid-79 · A jet engine's big fan does most of the pushing

## Hook

- **Chosen (0-3s):** "Most of a jet engine's push never touches fire." Big text: THE FIRE IS A SIDE SHOW
- **Backup hooks:**
    1. "Most of a jet's push never touches the fire."
    2. "Suck, squeeze, bang, blow: that's a jet engine."
    3. "The giant fan on a jet engine is the real engine."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Most of a jet engine's push never touches fire."
    text: "THE FIRE IS A SIDE SHOW"
    highlight: "FIRE"
    visual: { kind: hero, icon: fan, motion: spin, color: steel, label: "Turbofan" }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "Inside, it does four things: suck, squeeze, bang and blow."
    text: "SUCK SQUEEZE BANG BLOW"
    highlight: "BANG"
    visual: { kind: cycle, icon: fan, steps: ["Suck", "Squeeze", "Bang", "Blow"] }
    sfx: click
  - at: 9
    dur: 7
    vo: "Rows of blades squeeze the air, fuel burns in it, and the hot gas spins a turbine on the way out."
    text: "THE HOT CORE"
    highlight: "HOT CORE"
    visual: { kind: flow, steps: [{ label: "Compressor squeezes air", icon: fan }, { label: "Fuel burns", icon: flame }, { label: "Turbine spins", icon: gear }] }
    sfx: thunk
  - at: 16
    dur: 6
    vo: "That turbine is linked by a shaft to the giant fan at the front."
    text: "TURBINE DRIVES THE FAN"
    highlight: "FAN"
    visual: { kind: layers, items: [{ label: "Giant fan", color: accent }, { label: "Shaft", color: steel }, { label: "Turbine", color: orange }] }
  - at: 22
    dur: 6
    vo: "Most of the air the fan moves goes around the core, never touching the flames."
    text: "AIR GOES AROUND"
    highlight: "AROUND"
    visual: { kind: bars, unit: "%", items: [{ label: "Air through the core", value: 10, color: orange }, { label: "Air around the core", value: 90, color: cyan }] }
    sfx: slice
  - at: 28
    dur: 6
    vo: "Pushing lots of air a bit slower is quieter and burns less fuel than a skinny jet blast."
    text: "QUIETER AND THRIFTIER"
    highlight: "QUIETER"
    visual: { kind: compare, mode: before-after, left: { label: "Old skinny jet", icon: flame, tag: "Loud, thirsty" }, right: { label: "Big fan engine", icon: fan, tag: "Quieter" } }
  - at: 34
    dur: 4
    vo: "So that big fan is the real engine, because..."
    text: ""
    visual: { kind: hero, icon: fan, motion: spin, color: accent, label: "The fan does the work" }
    note: "Last line runs back into the hook."
```

## Fact check

- Turbofans compress air, burn fuel in it, and expand the gas through a turbine ('suck, squeeze, bang, blow' is the standard teaching phrase).
- The turbine drives the front fan via a shaft.
- Modern high-bypass engines send most of their air around the core (bypass ratios of about 9:1 to 12:1 on newer engines); the 10/90 bar is a rounded illustration of that.
- In high-bypass turbofans most of the thrust comes from the fan's bypass air; moving more air more slowly is more efficient and quieter than a low-bypass jet.
