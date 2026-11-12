---
id: vid-50
title: "Cat's eyes clean themselves every time you drive over them"
series: cut-it-open
topic: "Cat's eyes"
status: ready-to-build
duration: 38
music: investigations
accent: "#32D74B"
hashtags: [howthingswork, roads, invention, engineering, shorts]
description: "Road studs called cat's eyes squash into their iron base when a tyre hits them, and rubber wipes the glass clean."
pinned: "What should we cut open next?"
---

# vid-50 · Cat's eyes clean themselves every time you drive over them

## Hook

- **Chosen (0-3s):** "Cat's eyes clean themselves every time you drive over." Big text: SELF-CLEANING
- **Backup hooks:**
    1. "Every car that hits a cat's eye cleans it."
    2. "These road studs wash their own eyes."
    3. "You're cleaning the road every time you drive."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Cat's eyes clean themselves every time you drive over."
    text: "SELF-CLEANING"
    highlight: "CLEANING"
    visual: { kind: hero, icon: eye, color: accent, motion: pulse }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "Each one is a rubber pad holding glass lenses with mirrored backs, set in a cast iron base."
    text: "RUBBER, GLASS, IRON"
    highlight: "GLASS"
    visual: { kind: callout, icon: eye, parts: ["Rubber pad", "Glass lenses", "Mirrored backs", "Cast iron base"] }
  - at: 9
    dur: 6
    vo: "Headlight beams go into the glass, bounce off the mirror, and come straight back to you."
    text: "STRAIGHT BACK AT YOU"
    highlight: "BACK"
    visual: { kind: flow, steps: [{ label: "Headlights shine in", icon: bulb }, { label: "Mirror behind the glass", icon: lens }, { label: "Light returns to the driver", icon: eye, color: accent }] }
  - at: 15
    dur: 6
    vo: "When a tyre rolls over, the rubber squashes down into the iron base."
    text: "SQUASHED FLAT"
    highlight: "FLAT"
    visual: { kind: compare, mode: before-after, left: { label: "Standing up", icon: eye }, right: { label: "Pressed down", icon: wheel, color: accent } }
    sfx: thunk
  - at: 21
    dur: 6
    vo: "Rubber flaps wipe across the glass as it sinks, scraping off dirt. Rain helps rinse it."
    text: "WIPED EVERY TIME"
    highlight: "WIPED"
    visual: { kind: cycle, icon: drop, steps: ["Tyre presses down", "Rubber wipes the glass", "Rain rinses", "Pops back up"] }
  - at: 27
    dur: 6
    vo: "In Britain the colour tells you where you are. White for lanes, red for the left edge."
    text: "COLOUR CODED"
    highlight: "COLOUR"
    visual: { kind: layers, items: [{ label: "White: lane lines", color: white }, { label: "Red: left edge", color: red }, { label: "Amber: central reservation", color: orange }, { label: "Green: slip roads", color: green }] }
  - at: 33
    dur: 5
    vo: "Percy Shaw patented them in 1934. Over ninety years later..."
    text: ""
    visual: { kind: hero, icon: eye, label: "Patented 1934", motion: float }
    note: "Last line runs back into the hook: 'Cat's eyes clean themselves every time you drive over.'"
```

## Fact check

- Percy Shaw patented the cat's eye road stud in 1934 (company formed 1935). OK. Source: https://en.wikipedia.org/wiki/Percy_Shaw
