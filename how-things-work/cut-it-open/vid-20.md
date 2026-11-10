---
id: vid-20
title: "The lines cut in the road can feel your car 🚦"
series: cut-it-open
topic: "Traffic light induction loop"
status: ready-to-build
duration: 37
music: investigations
accent: "#FFD60A"
hashtags: [howthingswork, trafficlights, roads, engineering, shorts]
description: "Many traffic lights know you're waiting because of a wire loop buried in the road. Your car's metal changes its magnetic field."
pinned: "What should we cut open next?"
---

# vid-20 · The lines cut in the road can feel your car 🚦

## Hook

- **Chosen (0-3s):** "Those lines cut into the road can feel your car." Big text: THE ROAD FEELS YOU
- **Backup hooks:**
    1. "There's a metal detector under the traffic lights."
    2. "Those rectangles in the road are not cracks."
    3. "The road knows when your car is waiting."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Those lines cut into the road can feel your car."
    text: "THE ROAD FEELS YOU"
    highlight: "FEELS"
    visual: { kind: hero, icon: car, color: accent, motion: drop }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "At many traffic lights, a loop of wire is buried just under the surface."
    text: "A WIRE LOOP"
    highlight: "WIRE"
    visual: { kind: layers, items: [{ label: "Road surface", color: dark }, { label: "Sealant in a thin cut", color: grey }, { label: "Wire loop, a few turns", color: accent }, { label: "Road base", color: brown }] }
    sfx: slice
  - at: 8
    dur: 6
    vo: "A detector sends a changing current through it, making a magnetic field above the lane."
    text: "INVISIBLE FIELD"
    highlight: "FIELD"
    visual: { kind: wave, waves: [{ label: "Magnetic field over the lane", freq: 4, color: accent }] }
  - at: 14
    dur: 6
    vo: "Park a big lump of metal on top, and that field stirs tiny currents in it."
    text: "METAL CHANGES IT"
    highlight: "METAL"
    visual: { kind: zoom, levels: [{ label: "Your car", icon: car }, { label: "Steel underneath", icon: wrench }, { label: "Tiny swirling currents", icon: bolt, color: accent }] }
  - at: 20
    dur: 6
    vo: "Those currents push back, so the loop's frequency shifts. The detector spots the change."
    text: "FREQUENCY SHIFT"
    highlight: "SHIFT"
    visual: { kind: gauge, value: 70, low: "Empty lane", high: "Car on top", label: "Loop frequency shifts" }
    sfx: buzz
  - at: 26
    dur: 6
    vo: "Then it tells the controller a car is waiting, so your light can turn green."
    text: "GREEN FOR YOU"
    highlight: "GREEN"
    visual: { kind: flow, steps: [{ label: "Car detected", icon: car }, { label: "Signal to the controller", icon: chip }, { label: "Light turns green", icon: bulb, color: green }] }
    sfx: click
  - at: 32
    dur: 5
    vo: "Bikes have little metal, so stop right over the cut lines. Those lines..."
    text: ""
    visual: { kind: hero, icon: wheel, label: "Stop over the cut", motion: float }
    note: "Last line runs back into the hook: 'Those lines cut into the road can feel your car.'"
```

## Fact check

- Inductive loop detectors are wire loops laid in saw cuts in the road and sealed; they are the most common vehicle detector at actuated traffic signals.
- The detector drives an oscillating current; a vehicle's metal body causes eddy currents that change the loop's inductance and so its frequency, which the detector senses.
- Bicycles carry little metal, so many road agencies advise riders to stop directly over the saw-cut lines (some mark the spot with a bike symbol).
