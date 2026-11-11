---
id: vid-98
title: "Your watch has a crystal vibrating 32,768 times a second ⌚"
series: the-1-second-machine
topic: "Quartz watch"
status: ready-to-build
duration: 36
music: hyperfun
accent: "#BF5AF2"
hashtags: [howthingswork, watch, quartz, science, shorts]
description: "A quartz watch holds a tiny tuning fork of quartz that rings 32,768 times a second. A chip halves that 15 times to get exactly one tick."
pinned: "What else happens in under a second?"
---

# vid-98 · Your watch has a crystal vibrating 32,768 times a second

## Hook

- **Chosen (0-3s):** "Your watch: 32,768 vibrations a second." Big text: 32,768 TIMES A SECOND
- **Backup hooks:**
    1. "There's a tiny tuning fork inside your watch."
    2. "Your watch counts to 32,768 every second."
    3. "This is why cheap watches keep such good time."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your watch: 32,768 vibrations a second."
    text: "32,768 TIMES A SECOND"
    highlight: "32,768"
    visual: { kind: hero, icon: clock, label: "Quartz watch", color: accent, motion: shake }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Inside is a tiny piece of quartz cut into the shape of a tuning fork."
    text: "A TINY TUNING FORK"
    highlight: "TUNING FORK"
    visual: { kind: zoom, levels: [{ label: "Watch", icon: clock }, { label: "Metal can", icon: box }, { label: "Quartz tuning fork", icon: molecule, color: accent }] }
    sfx: slice
  - at: 8
    dur: 6
    vo: "Quartz has a trick: squeeze it and it makes electricity. Give it electricity and it bends."
    text: "SQUEEZE IT, GET POWER"
    highlight: "POWER"
    visual: { kind: compare, mode: versus, left: { label: "Squeeze it", icon: wrench, color: grey, tag: "MAKES VOLTAGE" }, right: { label: "Add voltage", icon: battery, color: accent, tag: "IT BENDS" } }
  - at: 14
    dur: 5
    vo: "The battery keeps nudging it; it rings at exactly 32,768 times a second."
    text: "IT RINGS"
    highlight: "RINGS"
    visual: { kind: wave, waves: [{ label: "Quartz ringing", freq: 10, color: accent }] }
    sfx: buzz
  - at: 19
    dur: 6
    vo: "A chip counts the pulses, halving them fifteen times until one pulse a second is left."
    text: "HALVED 15 TIMES"
    highlight: "15"
    visual: { kind: counter, to: 1, from: 32768, label: "pulse per second", icon: chip }
  - at: 25
    dur: 5
    vo: "Every second, that pulse kicks a tiny motor, and the second hand ticks."
    text: "TICK"
    highlight: "TICK"
    visual: { kind: flow, steps: [{ label: "One pulse", icon: bolt }, { label: "Tiny motor steps", icon: gear }, { label: "Second hand ticks", icon: clock, color: accent }] }
    sfx: click
  - at: 30
    dur: 6
    vo: "That's why even a cheap watch drifts just seconds a month, because..."
    text: ""
    visual: { kind: hero, icon: clock, label: "32,768 vibrations", color: accent, motion: float }
    note: "Last line runs back into the hook: Your watch has a crystal vibrating 32,768 times a second."
```

## Fact check

- Watch quartz crystals are cut as tiny tuning forks resonating at 32,768 Hz.
- Quartz is piezoelectric: mechanical stress produces voltage and voltage produces deformation.
- 32,768 = 2 to the 15th, so 15 divide-by-two stages give exactly 1 Hz.
- Analogue quartz watches use a stepper (Lavet) motor that advances the second hand once per pulse.
- Typical quartz accuracy is around plus or minus 15 seconds per month: 'seconds a month' is fair.
