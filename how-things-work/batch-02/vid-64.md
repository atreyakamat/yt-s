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
    visual: { kind: counter, to: 30000, suffix: "+", label: "flights in a jet's life", icon: plane }
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

- Pressurised cabins expand and relax on every flight, a load cycle that causes metal fatigue.
- Sharp corners concentrate stress; rounded openings spread it (stress concentration is basic engineering).
- The de Havilland Comet, the first jet airliner (in service 1952), suffered two in-flight break-ups in 1954; investigators found fatigue cracks starting at corners of openings in the fuselage.
- Airliners are designed for tens of thousands of pressurisation cycles; '30,000+' is a fair round figure for narrow-body jets.
