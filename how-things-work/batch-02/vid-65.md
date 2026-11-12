---
id: vid-65
title: "Stop signs have eight sides for one clever reason 🛑"
series: why-is-it-shaped-like-that
topic: "Stop sign octagon"
status: ready-to-build
duration: 39
music: pixel-peeker-polka
accent: "#64D2FF"
hashtags: [howthingswork, roadsigns, design, driving, shorts]
description: "The octagon is a shape no other common sign uses, so you can recognise a stop sign from behind or under snow."
pinned: "What shape should we explain next?"
---

# vid-65 · Stop signs have eight sides for one clever reason 🛑

## Hook

- **Chosen (0-3s):** "Stop signs have eight sides for one clever reason." Big text: WHY 8 SIDES?
- **Backup hooks:**
    1. "You can read a stop sign from behind."
    2. "Stop signs used to be yellow."
    3. "More sides meant more danger."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Stop signs have eight sides for one clever reason."
    text: "WHY 8 SIDES?"
    highlight: "8 SIDES"
    visual: { kind: hero, icon: shield, label: "STOP", color: red, motion: pulse }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "In the 1920s, US road planners proposed more sides for more dangerous spots."
    text: "MORE SIDES, MORE DANGER"
    highlight: "DANGER"
    visual: { kind: bars, unit: "sides", items: [{ label: "Diamond: warning", value: 4, color: orange }, { label: "Octagon: stop", value: 8, color: red }] }
  - at: 9
    dur: 6
    vo: "The octagon is a shape almost no other sign uses, so it can only mean one thing."
    text: "ONE SHAPE, ONE JOB"
    highlight: "ONE JOB"
    visual: { kind: grid, icon: shield, count: 20, highlight: 1, label: "Only one octagon" }
  - at: 15
    dur: 7
    vo: "Covered in snow or seen from behind, you can still tell it's a stop sign by its outline."
    text: "WORKS FROM BEHIND"
    highlight: "BEHIND"
    visual: { kind: compare, mode: versus, left: { label: "From the front", icon: eye, tag: "Red and STOP" }, right: { label: "From behind", icon: eye, color: accent, tag: "Same octagon" } }
    sfx: thunk
  - at: 22
    dur: 6
    vo: "Seeing the back of one tells you drivers coming the other way have to stop."
    text: "READING THE BACK"
    highlight: "BACK"
    visual: { kind: flow, steps: [{ label: "You see the back", icon: eye }, { label: "Octagon outline", icon: shield }, { label: "Others must stop", icon: car, color: accent }] }
  - at: 28
    dur: 6
    vo: "Early stop signs were yellow, because fade-proof red wasn't available. They turned red in 1954."
    text: "YELLOW BEFORE RED"
    highlight: "YELLOW"
    visual: { kind: timeline, events: [{ year: "1920s", label: "Octagon chosen for stop" }, { year: "1954", label: "US stop signs turn red" }, { year: "1968", label: "In the Vienna road sign treaty" }] }
  - at: 34
    dur: 5
    vo: "Even in the dark, the shape gives it away. That's why..."
    text: ""
    visual: { kind: zoom, levels: [{ label: "The junction", icon: car }, { label: "The sign's edge", icon: shield }, { label: "Eight sides", icon: star, color: accent }] }
    note: "Last line runs back into the hook: 'Stop signs have eight sides for one clever reason.'"
```

## Fact check

- 1920s AASHO / Mississippi Valley association committee chose the octagon so the sign is recognised by shape; the "more sides = more danger" rule is repeated in popular accounts but was not on the Wikipedia page read, so SOFTENED to "proposed". Source: https://en.wikipedia.org/wiki/Stop_sign
- Stop signs were yellow 1924 to 1954 because fade-resistant red materials were not available; 1954 MUTCD specified white on red. OK (wording softened from "red paint faded too fast"). Source: https://en.wikipedia.org/wiki/Stop_sign
- 1968 Vienna Convention includes the red octagon (sign B2a) among allowed stop signs. OK. Source: https://www.wikipedia.org/wiki/Vienna_Convention_on_Road_Signs_and_Signals
