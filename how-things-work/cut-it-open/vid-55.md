---
id: vid-55
title: "Your smoke alarm has a light that's never meant to hit its eye 💡"
series: cut-it-open
topic: "Optical smoke alarm"
status: ready-to-build
duration: 40
music: investigations
accent: "#32D74B"
hashtags: [howthingswork, science, smokealarm, light, shorts]
description: "Optical smoke alarms hide an LED and a light sensor that can't see each other. Only smoke can bounce the light across."
pinned: "What should we cut open next?"
---

# vid-55 · Your smoke alarm has a light that's never meant to hit its eye

## Hook

- **Chosen (0-3s):** "Your smoke alarm's light is aimed away from its eye." Big text: A LIGHT THAT MISSES
- **Backup hooks:**
    1. "There's a hidden maze of light inside your smoke alarm."
    2. "This alarm only wakes up when light goes the wrong way."
    3. "Your smoke alarm is a tiny dark room."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your smoke alarm's light is aimed away from its eye."
    text: "A LIGHT THAT MISSES"
    highlight: "MISSES"
    visual: { kind: hero, icon: bulb, motion: pulse, color: accent }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Inside an optical alarm is a tiny black maze called the chamber."
    text: "A TINY DARK MAZE"
    highlight: "DARK MAZE"
    visual: { kind: layers, items: [{ label: "Vented cover", color: white }, { label: "Black maze chamber", color: dark }, { label: "LED and light sensor", color: accent }, { label: "Circuit and horn", color: steel }] }
    sfx: slice
  - at: 8
    dur: 6
    vo: "The maze lets smoke drift in but keeps room light out."
    text: "SMOKE IN, LIGHT OUT"
    highlight: "SMOKE IN"
    visual: { kind: compare, mode: versus, left: { label: "Smoke", icon: cloud, tag: "Gets in" }, right: { label: "Room light", icon: sun, tag: "Blocked" } }
  - at: 14
    dur: 6
    vo: "An LED shines across the chamber, but the light sensor sits off to the side."
    text: "THEY CAN'T SEE"
    highlight: "CAN'T SEE"
    visual: { kind: callout, icon: eye, parts: ["LED beam", "Sensor at an angle", "Nothing hits it"] }
  - at: 20
    dur: 6
    vo: "When smoke drifts in, its particles scatter the beam, and some of it hits the sensor."
    text: "SMOKE BOUNCES IT"
    highlight: "BOUNCES"
    visual: { kind: flow, steps: [{ label: "Smoke enters", icon: cloud }, { label: "Light scatters", icon: bulb }, { label: "Sensor sees light", icon: eye, color: accent }] }
  - at: 26
    dur: 5
    vo: "Enough scattered light, and the chip sets off the horn."
    text: "ALARM"
    highlight: "ALARM"
    visual: { kind: gauge, value: 85, low: "Clear", high: "Smoky", label: "Scattered light" }
    sfx: buzz
  - at: 31
    dur: 5
    vo: "These are best at slow, smouldering fires that make big smoke particles."
    text: "GREAT AT SMOULDERING"
    highlight: "SMOULDERING"
    visual: { kind: bars, items: [{ label: "Smouldering fire", value: 90, color: accent }, { label: "Fast flaming fire", value: 60, color: orange }] }
  - at: 36
    dur: 4
    vo: "So inside your ceiling alarm..."
    text: ""
    visual: { kind: hero, icon: eye, motion: float, label: "Waiting in the dark" }
    note: "Last line runs back into the hook."
```

## Fact check

- Optical (photoelectric) smoke alarms use an LED and a photodiode arranged so the light does not normally reach the sensor; smoke scatters light onto it.
- The chamber is a black labyrinth that admits smoke while blocking ambient light.
- Optical alarms generally respond faster to smouldering fires; ionisation types tend to react faster to fast flaming fires. The bars are illustrative, not measured values.
