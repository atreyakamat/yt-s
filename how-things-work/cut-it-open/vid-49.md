---
id: vid-49
title: "Autopilot can fly the plane, but it never decides where to go"
series: cut-it-open
topic: "Airplane autopilot"
status: ready-to-build
duration: 37
music: investigations
accent: "#32D74B"
hashtags: [howthingswork, aviation, autopilot, planes, shorts]
description: "An autopilot is a loop of sensors, a computer and motors that nudges the controls many times a second. The pilots still set every target."
pinned: "What should we cut open next?"
---

# vid-49 · Autopilot can fly the plane, but it never decides where to go

## Hook

- **Chosen (0-3s):** "Your plane is often flown by a computer." Big text: WHO'S FLYING?
- **Backup hooks:**
    1. "Your plane flies itself for most of the trip."
    2. "The autopilot only does what the pilots tell it."
    3. "Some planes can land themselves in thick fog."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your plane is often flown by a computer."
    text: "WHO'S FLYING?"
    highlight: "FLYING?"
    visual: { kind: hero, icon: plane, motion: float, color: accent, label: "Autopilot on" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Pilots set targets: a height, a speed and a direction."
    text: "PILOTS SET THE TARGET"
    highlight: "TARGET"
    visual: { kind: callout, icon: screen, parts: ["Altitude", "Speed", "Heading"] }
    sfx: click
  - at: 8
    dur: 6
    vo: "Sensors measure what the plane is really doing: tilt, speed, height and heading."
    text: "SENSORS WATCH"
    highlight: "SENSORS"
    visual: { kind: zoom, levels: [{ label: "The plane", icon: plane }, { label: "Gyros and sensors", icon: gear }, { label: "Flight computer", icon: chip }] }
  - at: 14
    dur: 7
    vo: "The computer compares the two and sends tiny corrections to motors that move the control surfaces."
    text: "TINY CORRECTIONS"
    highlight: "TINY"
    visual: { kind: cycle, icon: chip, steps: ["Measure", "Compare to target", "Move controls", "Measure again"] }
    sfx: slice
  - at: 21
    dur: 5
    vo: "That loop runs many times every second, smoother than a human hand."
    text: "NON-STOP LOOP"
    highlight: "NON-STOP"
    visual: { kind: wave, waves: [{ label: "Small steady corrections", freq: 8, color: accent }] }
  - at: 26
    dur: 6
    vo: "Some airliners can even land themselves in fog, with the pilots watching closely."
    text: "IT CAN LAND"
    highlight: "LAND"
    visual: { kind: flow, steps: [{ label: "Radio beams guide it", icon: antenna }, { label: "Plane follows them down", icon: plane }, { label: "Wheels touch the runway", icon: wheel }] }
    sfx: thunk
  - at: 32
    dur: 5
    vo: "But it never chooses where to go. Only the pilots do, even when..."
    text: ""
    visual: { kind: hero, icon: person, motion: pulse, color: accent, label: "Pilots in charge" }
    note: "Last line runs back into the hook."
```

## Fact check

- Autopilots hold pilot-selected altitude, speed and heading (or follow a programmed route) using gyros, air data and navigation sensors.
- The flight computer drives servos/actuators that move ailerons, elevator and rudder, correcting continuously.
- Autoland systems (with ILS radio beams) let suitably equipped airliners land in low visibility, monitored by the crew.
- The route and targets are set by the pilots; the autopilot does not choose a destination.
