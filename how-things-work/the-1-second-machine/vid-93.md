---
id: vid-93
title: "Your brakes can pump 15 times every second"
series: the-1-second-machine
topic: "Anti-lock brakes"
status: ready-to-build
duration: 42
music: hyperfun
accent: "#BF5AF2"
hashtags: [howthingswork, cars, brakes, abs, shorts]
description: "In an emergency stop, anti-lock brakes release and squeeze each wheel many times a second so you can still steer."
pinned: "What else happens in under a second?"
---

# vid-93 · Your brakes can pump 15 times every second

## Hook

- **Chosen (0-3s):** "Your brakes can pump about fifteen times every second." Big text: 15 PUMPS A SECOND
- **Backup hooks:**
    1. "That buzzing in your brake pedal is a computer."
    2. "Slam your brakes and a computer takes over."
    3. "Your brakes let go on purpose, over and over."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your brakes can pump about fifteen times every second."
    text: "15 PUMPS A SECOND"
    highlight: "15"
    visual: { kind: hero, icon: wheel, motion: shake, color: accent }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "Brake hard enough and a wheel can stop turning while the car keeps sliding."
    text: "WHEEL LOCKS"
    highlight: "LOCKS"
    visual: { kind: gauge, value: 100, low: "Rolling", high: "Locked", label: "Wheel locks up" }
    sfx: thunk
  - at: 9
    dur: 6
    vo: "A locked, skidding tyre grips less, and you can't steer with it."
    text: "NO STEERING"
    highlight: "NO"
    visual: { kind: compare, mode: wrong-right, left: { label: "Locked wheel", icon: wheel, color: red, tag: "Can't steer" }, right: { label: "Rolling wheel", icon: wheel, color: green, tag: "Steers" } }
  - at: 15
    dur: 6
    vo: "So a sensor at each wheel watches how fast it spins, all the time."
    text: "WHEEL SPEED SENSORS"
    highlight: "SENSORS"
    visual: { kind: callout, icon: wheel, parts: ["Toothed ring", "Speed sensor", "Brake line"] }
  - at: 21
    dur: 7
    vo: "If one wheel slows too suddenly, a computer opens a valve and eases that brake."
    text: "EASE OFF"
    highlight: "EASE"
    visual: { kind: flow, steps: [{ label: "Wheel slows too fast", icon: wheel }, { label: "Computer spots it", icon: chip }, { label: "Valve eases pressure", icon: pipe }] }
    sfx: click
  - at: 28
    dur: 6
    vo: "The tyre grips again, the brake squeezes again, over and over, many times a second."
    text: "SQUEEZE, RELEASE"
    highlight: "RELEASE"
    visual: { kind: cycle, icon: wheel, steps: ["Squeeze", "Wheel starts to slip", "Release", "Grip again"], color: accent }
  - at: 34
    dur: 5
    vo: "That buzzing in the pedal is normal. Keep pressing firmly and steer."
    text: "KEEP PRESSING"
    highlight: "PRESSING"
    visual: { kind: wave, waves: [{ label: "Pedal buzz", freq: 9, color: accent }] }
    sfx: buzz
  - at: 39
    dur: 3
    vo: "Because when you stamp on them..."
    text: ""
    visual: { kind: hero, icon: wheel, motion: float, color: steel, label: "ABS" }
    note: "Loops into the hook: 'Your brakes can pump about fifteen times every second.'"
```

## Fact check

- ABS uses wheel-speed sensors (toothed tone ring + sensor) and a hydraulic unit with valves to release and reapply brake pressure when a wheel starts to lock.
- ABS cycling rate is commonly given as around 15 times per second (figures of roughly 15-20 are typical), hence 'about fifteen'.
- A locked wheel cannot provide steering; keeping wheels rolling preserves steering control.
- Pedal pulsing/buzzing during ABS activation is normal; driver guidance for ABS cars is to keep firm pressure and steer.
