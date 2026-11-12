---
id: vid-70
title: "This is why smoke alarms are never on the floor 🔥"
series: why-is-it-shaped-like-that
topic: "Ceiling smoke alarm"
status: ready-to-build
duration: 37
music: pixel-peeker-polka
accent: "#64D2FF"
hashtags: [howthingswork, safety, smokealarm, design, shorts]
description: "Smoke alarms are round, flat and stuck to the ceiling for a reason. Hot smoke rises and spreads, and the alarm is shaped to catch it from any side."
pinned: "What shape should we explain next?"
---

# vid-70 · This is why smoke alarms are never on the floor

## Hook

- **Chosen (0-3s):** "This is why smoke alarms are never on the floor." Big text: NEVER ON THE FLOOR
- **Backup hooks:**
    1. "Your smoke alarm is round on purpose."
    2. "Why is every smoke alarm on the ceiling?"
    3. "This corner is the worst place for a smoke alarm."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "This is why smoke alarms are never on the floor."
    text: "NEVER ON THE FLOOR"
    highlight: "NEVER"
    visual: { kind: hero, icon: house, motion: drop, color: accent }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Fire heats the air, and hot air is lighter, so smoke rises first."
    text: "HOT SMOKE RISES"
    highlight: "RISES"
    visual: { kind: flow, steps: [{ label: "Fire heats air", icon: flame }, { label: "Hot air rises", icon: arrow }, { label: "Smoke hits ceiling", icon: cloud }] }
  - at: 8
    dur: 6
    vo: "When it hits the ceiling it spreads sideways in a layer, like water poured upside down."
    text: "IT SPREADS OUT"
    highlight: "SPREADS"
    visual: { kind: zoom, levels: [{ label: "The room", icon: house }, { label: "The ceiling", icon: arrow }, { label: "A smoke layer", icon: cloud, color: grey }] }
  - at: 14
    dur: 6
    vo: "That's why the alarm is round and flat, with vents all the way around its edge."
    text: "VENTS ALL AROUND"
    highlight: "ALL AROUND"
    visual: { kind: callout, icon: shield, parts: ["Round body", "Vents on every side", "Sensor in the middle"] }
  - at: 20
    dur: 6
    vo: "Smoke can arrive from any direction, and a round shape catches it the same from every side."
    text: "ANY DIRECTION"
    highlight: "ANY"
    visual: { kind: cycle, icon: wind, steps: ["From the door", "From the window", "From the hall", "From the stairs"] }
  - at: 26
    dur: 6
    vo: "But the very corner where wall meets ceiling has still air, so smoke reaches it late."
    text: "AVOID THE CORNER"
    highlight: "CORNER"
    visual: { kind: compare, mode: wrong-right, left: { label: "Tight in the corner", icon: box }, right: { label: "Out on the ceiling", icon: house } }
  - at: 32
    dur: 5
    vo: "Up high and away from the corner. That's why smoke alarms..."
    text: ""
    visual: { kind: hero, icon: cloud, motion: float, label: "Up where smoke goes" }
    note: "Last line runs back into the hook."
```

## Fact check

- Hot combustion gases are less dense than surrounding air, so smoke rises and spreads across the ceiling (a ceiling jet).
- Smoke alarms have openings around their circumference so smoke can enter from any direction.
- Fire safety guidance advises not fitting alarms tight into the wall-ceiling corner, where a pocket of still 'dead air' can delay smoke reaching the sensor.
