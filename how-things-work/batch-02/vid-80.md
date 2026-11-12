---
id: vid-80
title: "Your street light has a tiny eye on top of its head"
series: cut-it-open
topic: "Street light photocell"
status: ready-to-build
duration: 36
music: investigations
accent: "#0A84FF"
hashtags: [howthingswork, streetlights, sensors, city, shorts]
description: "Many street lights switch themselves on with a little light sensor on top that is built not to be fooled by headlights."
pinned: "What should we cut open next?"
---

# vid-80 · Your street light has a tiny eye on top of its head

## Hook

- **Chosen (0-3s):** "Your street light has a tiny eye on its head." Big text: IT HAS AN EYE
- **Backup hooks:**
    1. "Nobody switches on your street light."
    2. "That little cap on a street lamp is an eye."
    3. "Street lights decide for themselves when it's night."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your street light has a tiny eye on its head."
    text: "IT HAS AN EYE"
    highlight: "EYE"
    visual: { kind: hero, icon: bulb, color: accent, motion: pulse }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "That little cap on top is a light sensor, called a photocell."
    text: "A LIGHT SENSOR"
    highlight: "SENSOR"
    visual: { kind: callout, icon: bulb, parts: ["Lamp head", "Photocell cap on top", "Twist-lock socket"] }
  - at: 8
    dur: 6
    vo: "As daylight fades below a set level, its switch closes and the lamp comes on."
    text: "DUSK = ON"
    highlight: "ON"
    visual: { kind: gauge, value: 20, low: "Dark", high: "Bright", label: "Dusk: lamp switches on" }
    sfx: click
  - at: 14
    dur: 6
    vo: "It switches off at a brighter level than it switches on, so it doesn't flicker at dusk."
    text: "NO FLICKERING"
    highlight: "NO"
    visual: { kind: compare, mode: versus, left: { label: "On when dark", icon: bulb, tag: "Lower level" }, right: { label: "Off when bright", icon: sun, color: accent, tag: "Higher level" } }
  - at: 20
    dur: 6
    vo: "It also waits a few seconds before reacting, so headlights or lightning don't fool it."
    text: "HARD TO FOOL"
    highlight: "FOOL"
    visual: { kind: flow, steps: [{ label: "Headlights flash on it", icon: car }, { label: "Sensor waits a few seconds", icon: clock }, { label: "Lamp stays on", icon: bulb, color: accent }] }
  - at: 26
    dur: 5
    vo: "In the northern half of the world, the eye usually faces north, away from the sun."
    text: "FACING NORTH"
    highlight: "NORTH"
    visual: { kind: zoom, levels: [{ label: "The planet", icon: globe }, { label: "Your street", icon: house }, { label: "Sensor faces north", icon: eye, color: accent }] }
  - at: 31
    dur: 5
    vo: "Without it, someone would flip every lamp by hand. Instead..."
    text: ""
    visual: { kind: grid, icon: bulb, count: 20, highlight: 20, label: "Every lamp decides alone" }
    note: "Last line runs back into the hook: 'Your street light has a tiny eye on its head.'"
```

## Fact check

- Many street lights use a photocell (photocontrol) mounted on top of the lamp head, often in a twist-lock socket; some cities now use timers or central control instead, so the script says many, not all.
- Photocontrols switch on below one light level and off above a higher one (hysteresis), and include a time delay of a few seconds so brief light like headlights or lightning doesn't switch them.
- Installation guidance in the northern hemisphere is to face the sensor north so direct sun doesn't hit it.
