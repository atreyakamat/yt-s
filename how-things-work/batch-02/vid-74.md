---
id: vid-74
title: "Your dimmer turns the light off 100 times a second 💡"
series: cut-it-open
topic: "Dimmer switch"
status: ready-to-build
duration: 39
music: investigations
accent: "#0A84FF"
hashtags: [howthingswork, electricity, lighting, home, shorts]
description: "A modern dimmer doesn't turn power down. It chops the start off every pulse of mains power, about 100 times a second."
pinned: "What should we cut open next?"
---

# vid-74 · Your dimmer turns the light off 100 times a second 💡

## Hook

- **Chosen (0-3s):** "Your dimmer cuts power 100 times a second." Big text: OFF 100 TIMES A SECOND
- **Backup hooks:**
    1. "Your dimmer switch is flickering your light on purpose."
    2. "A dimmer doesn't turn the power down. It chops it."
    3. "Your dimmed light is switching on and off right now."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your dimmer cuts power 100 times a second."
    text: "OFF 100 TIMES A SECOND"
    highlight: "100"
    visual: { kind: hero, icon: bulb, motion: pulse, color: accent }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "Mains power isn't steady. It swings up and down, about 50 times a second in Europe."
    text: "POWER THAT SWINGS"
    highlight: "SWINGS"
    visual: { kind: wave, waves: [{ label: "Mains: 50 swings a second", freq: 4, color: orange }] }
  - at: 9
    dur: 6
    vo: "Each swing has two humps, so that's 100 moments of power every second."
    text: "100 HUMPS A SECOND"
    highlight: "100"
    visual: { kind: counter, to: 100, label: "power humps per second", icon: bolt }
  - at: 15
    dur: 7
    vo: "A dimmer waits a little into each hump before switching on, chopping off the start."
    text: "CHOP THE START"
    highlight: "CHOP"
    visual: { kind: flow, steps: [{ label: "A hump begins", icon: wave }, { label: "Dimmer waits", icon: clock }, { label: "Switches on late", icon: bolt }, { label: "Resets at zero", icon: arrow }] }
    sfx: slice
  - at: 22
    dur: 6
    vo: "The longer it waits, the less energy gets through, and the dimmer the bulb."
    text: "WAIT LONGER, DIMMER"
    highlight: "DIMMER"
    visual: { kind: gauge, value: 30, low: "Bright", high: "Dim", label: "Longer wait, less light" }
  - at: 28
    dur: 6
    vo: "Very old dimmers just burned the extra power off as heat. Chopping wastes far less."
    text: "NO WASTED HEAT"
    highlight: "HEAT"
    visual: { kind: compare, mode: before-after, left: { label: "Old: burns it off", icon: flame, color: red }, right: { label: "New: chops it", icon: bolt, color: green } }
  - at: 34
    dur: 5
    vo: "It's too fast for your eyes to notice. So right now, your dimmer..."
    text: ""
    visual: { kind: hero, icon: bulb, motion: float, color: accent, label: "Dimmer switch" }
    note: "Loop: runs back into the hook."
```

## Fact check

- Mains AC is 50 Hz in Europe/UK (60 Hz in North America), so there are 100 (or 120) half-cycles per second; the hook's '100' assumes 50 Hz and the VO says 'in Europe'.
- Phase-cut (TRIAC) dimmers delay switching on in each half-cycle; a later turn-on means less average power and a dimmer lamp.
- Early dimmers were resistive (rheostats) that wasted the unused power as heat; phase-cut dimmers waste very little.
