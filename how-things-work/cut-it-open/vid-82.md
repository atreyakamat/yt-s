---
id: vid-82
title: "Your drill's motor spins way faster than the bit"
series: cut-it-open
topic: "Cordless drill"
status: ready-to-build
duration: 38
music: investigations
accent: "#0A84FF"
hashtags: [howthingswork, tools, engineering, drill, shorts]
description: "A cordless drill's small motor spins very fast. A planetary gearbox trades that speed for the twisting force that drives screws."
pinned: "What should we cut open next?"
---

# vid-82 · Your drill's motor spins way faster than the bit

## Hook

- **Chosen (0-3s):** "Your drill's motor spins far faster than its chuck." Big text: FASTER INSIDE
- **Backup hooks:**
    1. "There's a tiny solar system inside your drill."
    2. "Your drill has gears that orbit like planets."
    3. "That 1-2 switch on your drill changes gears."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your drill's motor spins far faster than its chuck."
    text: "FASTER INSIDE"
    highlight: "FASTER"
    visual: { kind: hero, icon: tool, motion: spin, color: accent, label: "Cordless drill" }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "Open it up: a battery, a trigger, a small motor, and a gearbox up front."
    text: "CRACK IT OPEN"
    highlight: "OPEN"
    visual: { kind: layers, items: [{ label: "Chuck", color: steel }, { label: "Clutch ring", color: grey }, { label: "Planetary gearbox", color: accent }, { label: "Electric motor", color: orange }, { label: "Trigger", color: dark }, { label: "Battery", color: green }] }
    sfx: slice
  - at: 9
    dur: 5
    vo: "The trigger works like a dimmer. Squeeze harder and more power reaches the motor."
    text: "TRIGGER = DIMMER"
    highlight: "DIMMER"
    visual: { kind: gauge, value: 70, low: "Light", high: "Full", label: "Motor speed" }
    sfx: click
  - at: 14
    dur: 7
    vo: "The motor is fast but weak, so it drives a planetary gearbox: small gears orbiting a sun gear."
    text: "PLANETS AND A SUN"
    highlight: "SUN"
    visual: { kind: cycle, icon: gear, steps: ["Sun gear spins", "Planet gears orbit", "Outer ring holds still", "Carrier turns slower"] }
    sfx: thunk
  - at: 21
    dur: 6
    vo: "Each stage trades speed for twisting force. Fewer turns, much more torque."
    text: "SPEED FOR TORQUE"
    highlight: "TORQUE"
    visual: { kind: compare, mode: before-after, left: { label: "Motor: fast, weak", icon: fan }, right: { label: "Chuck: slow, strong", icon: wrench } }
  - at: 27
    dur: 6
    vo: "The 1-2 switch on top changes which gears are working."
    text: "GEAR 1 OR 2"
    highlight: "1 OR 2"
    visual: { kind: flow, steps: [{ label: "1: slow and strong, for screws", icon: wrench }, { label: "2: fast, for drilling holes", icon: arrow }] }
    sfx: click
  - at: 33
    dur: 5
    vo: "Slow and strong at the tip, because..."
    text: ""
    visual: { kind: hero, icon: gear, motion: spin, color: accent, label: "Speed traded for torque" }
    note: "Last line runs back into the hook: 'Your drill's motor spins far faster than its chuck.'"
```

## Fact check

- Cordless drills use a small high-speed DC motor driving a planetary (epicyclic) gearbox; a planetary set has a sun gear, planet gears on a carrier, and a ring gear.
- Gear reduction lowers output speed and raises torque in the same ratio (minus losses).
- Variable-speed triggers control motor power electronically, like a dimmer.
- The two-speed selector changes the gearbox ratio (typically by locking or freeing a ring gear in one stage); setting 1 is low speed / high torque, 2 is high speed.
