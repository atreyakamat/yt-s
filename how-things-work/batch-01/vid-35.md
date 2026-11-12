---
id: vid-35
title: "Pressing the crossing button twice doesn't make it faster"
series: youve-been-using-it-wrong
topic: "Crosswalk button"
status: ready-to-build
duration: 41
music: sneaky-snitch
accent: "#FF9F0A"
hashtags: [howthingswork, crosswalk, trafficlights, city, shorts]
description: "A working crossing button logs one request, and extra presses add nothing. Some buttons in busy cities do nothing at all."
pinned: "What else have we all been using wrong?"
---

# vid-35 · Pressing the crossing button twice doesn't make it faster

## Hook

- **Chosen (0-3s):** "Pressing the crossing button twice doesn't make it faster." Big text: PRESS ONCE
- **Backup hooks:**
    1. "Mashing the crossing button is pointless."
    2. "Some crossing buttons aren't connected to anything."
    3. "The crossing heard you the first time."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Pressing the crossing button twice doesn't make it faster."
    text: "PRESS ONCE"
    highlight: "ONCE"
    visual: { kind: hero, icon: person, color: accent, motion: shake }
    sfx: click
  - at: 3
    dur: 6
    vo: "At a working button, your first press puts in a request. The controller logs it once."
    text: "ONE REQUEST"
    highlight: "ONE"
    visual: { kind: flow, steps: [{ label: "First press", icon: person }, { label: "Request stored", icon: chip }, { label: "Wait for your turn", icon: clock, color: accent }] }
  - at: 9
    dur: 6
    vo: "Every extra press asks for the same thing again. The light was already coming."
    text: "SAME REQUEST"
    highlight: "SAME"
    visual: { kind: grid, icon: person, count: 10, highlight: 1, label: "10 presses, 1 request" }
  - at: 15
    dur: 7
    vo: "The controller has to fit your green man into a cycle with all the traffic, so you wait your turn."
    text: "YOU'RE IN A QUEUE"
    highlight: "QUEUE"
    visual: { kind: cycle, icon: clock, steps: ["Cars go", "Turning traffic", "Your green man", "Cars again"] }
  - at: 22
    dur: 7
    vo: "In some busy city centres, crossings run on fixed timers at peak times, and the button changes nothing."
    text: "SOME DO NOTHING"
    highlight: "NOTHING"
    visual: { kind: compare, mode: versus, left: { label: "Quiet junction", icon: person, tag: "Button matters" }, right: { label: "Busy centre", icon: car, color: accent, tag: "Fixed timer" } }
    sfx: buzz
  - at: 29
    dur: 7
    vo: "New York found in 2004 that most of its crossing buttons no longer did anything."
    text: "MOST WERE DUDS"
    highlight: "DUDS"
    visual: { kind: counter, to: 2500, label: "NYC buttons that didn't work", suffix: "+" }
  - at: 36
    dur: 5
    vo: "Where they do work, one press is all it takes. So remember..."
    text: ""
    visual: { kind: gauge, value: 100, low: "No press", high: "One press", label: "Request locked in" }
    note: "Last line runs back into the hook: 'Pressing the crossing button twice doesn't make it faster.'"
```

## Fact check

- NYC: a 2004 New York Times report said most (over 2,500 of about 3,250) crossing buttons were inactive. OK. Source: https://www.npr.org/2004/03/26/1794049/pressing-the-button-to-cross-a-manhattan-street (original NYT, Feb 2004, quoted via https://www.techdirt.com/2004/02/27/new-yorkers-keep-pushing-useless-traffic-light-buttons/)
