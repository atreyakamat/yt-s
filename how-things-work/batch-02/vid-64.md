---
id: vid-64
title: "This is why plane windows are never square ✈️"
series: why-is-it-shaped-like-that
topic: "Oval plane windows"
status: ready-to-build
duration: 38
music: pixel-peeker-polka
accent: "#64D2FF"
hashtags: [howthingswork, aviation, design, planes, shorts]
description: "Square windows crack at the corners when a cabin is pressurised again and again. Rounded windows spread the stress out."
pinned: "What shape should we explain next?"
---

# vid-64 · This is why plane windows are never square

## Hook

- **Chosen (0-3s):** "This is why plane windows are never square." Big text: NEVER SQUARE
- **Backup hooks:**
    1. "Square plane windows once tore planes apart."
    2. "Your plane window's corners are rounded on purpose."
    3. "A square window is a crack waiting to happen."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "This is why plane windows are never square."
    text: "NEVER SQUARE"
    highlight: "SQUARE"
    visual: { kind: hero, icon: plane, motion: float, color: accent, label: "Rounded windows" }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "Every flight, the cabin is pumped up with air, then let down again on landing."
    text: "PUMPED UP EVERY FLIGHT"
    highlight: "EVERY FLIGHT"
    visual: { kind: cycle, icon: plane, steps: ["Climb: cabin pressurised", "Cruise", "Descend: pressure let out"] }
    sfx: click
  - at: 9
    dur: 6
    vo: "That squeezes and stretches the metal skin like a balloon, thousands of times."
    text: "STRETCHED AGAIN AND AGAIN"
    highlight: "AGAIN"
    visual: { kind: counter, to: 40000, suffix: "+", label: "flights in an airliner life", icon: plane }
  - at: 15
    dur: 6
    vo: "A sharp corner focuses that stress into one tiny point, and cracks start there."
    text: "CORNERS FOCUS STRESS"
    highlight: "STRESS"
    visual: { kind: compare, mode: wrong-right, left: { label: "Sharp corner", icon: box, tag: "Stress piles up" }, right: { label: "Round corner", icon: ball, tag: "Stress spreads" } }
    sfx: slice
  - at: 21
    dur: 7
    vo: "In the 1950s, early jet airliners broke up in flight. Metal fatigue at square-cornered openings was blamed."
    text: "1954: JETS BROKE UP"
    highlight: "1954"
    visual: { kind: timeline, events: [{ year: "1952", label: "First jet airliner flies passengers" }, { year: "1954", label: "Two break up in mid-air" }, { year: "After", label: "Rounded windows everywhere" }] }
    sfx: thunk
  - at: 28
    dur: 6
    vo: "A curve has no weak point, so the load flows smoothly around the window."
    text: "NO WEAK POINT"
    highlight: "NO WEAK"
    visual: { kind: gauge, value: 25, low: "Safe", high: "Crack", label: "Stress at a rounded corner" }
  - at: 34
    dur: 4
    vo: "That's why your window is an oval. And that's why..."
    text: ""
    visual: { kind: hero, icon: eye, motion: pulse, color: accent, label: "The oval window" }
    note: "Last line runs back into the hook."
```

## Fact check

- Comet entered passenger service 2 May 1952; two broke up in flight in early 1954 (January and April), blamed on fatigue at window corners. OK. Source: https://migflug.com/jetflights/de-havilland-comet-metal-fatigue-square-windows-investigation-1954/
- Flights in an airliner's life: no source read in this pass; counter lowered from 50,000 to a conservative 40,000+ (design lives are typically tens of thousands of pressurisation cycles). SOFTENED.
