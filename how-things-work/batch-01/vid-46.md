---
id: vid-46
title: "Your phone camera is millions of tiny light buckets 📷"
series: cut-it-open
topic: "Phone camera sensor"
status: ready-to-build
duration: 38
music: cipher
accent: "#32D74B"
hashtags: [howthingswork, camera, phone, tech, shorts]
description: "A phone camera sensor is a grid of millions of light-catching wells, each under a red, green or blue filter."
pinned: "What should we cut open next?"
---

# vid-46 · Your phone camera is millions of tiny light buckets

## Hook

- **Chosen (0-3s):** "Your camera can't see colour. It counts light." Big text: IT CAN'T SEE COLOUR
- **Backup hooks:**
    1. "Your camera sensor is colourblind."
    2. "Every photo you take is millions of tiny buckets of light."
    3. "Your phone camera guesses two thirds of every colour."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your camera can't see colour. It counts light."
    text: "IT CAN'T SEE COLOUR"
    highlight: "COLOUR"
    visual: { kind: hero, icon: lens, motion: pulse, color: accent }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "Behind the lens sits a sensor: a grid of millions of tiny light wells called photosites."
    text: "MILLIONS OF WELLS"
    highlight: "MILLIONS"
    visual: { kind: zoom, levels: [{ label: "Your phone", icon: phone }, { label: "The sensor", icon: chip, color: accent }, { label: "One photosite", icon: drop, color: cyan }] }
    sfx: slice
  - at: 9
    dur: 6
    vo: "Light hitting a well knocks loose electrons. More light, more electrons. That's it."
    text: "LIGHT → ELECTRONS"
    highlight: "ELECTRONS"
    visual: { kind: flow, steps: [{ label: "Light hits silicon", icon: sun, color: orange }, { label: "Electrons knocked loose", icon: bolt, color: accent }, { label: "Charge is counted", icon: chip }] }
    sfx: click
  - at: 15
    dur: 6
    vo: "Each well only measures brightness, so each wears a tiny red, green or blue filter."
    text: "TINY COLOUR FILTERS"
    highlight: "FILTERS"
    visual: { kind: layers, items: [{ label: "Micro lens", color: cyan }, { label: "Colour filter", color: accent }, { label: "Photosite", color: steel }] }
    sfx: thunk
  - at: 21
    dur: 6
    vo: "Half of them are green, because our eyes care most about green."
    text: "HALF ARE GREEN"
    highlight: "GREEN"
    visual: { kind: grid, icon: eye, count: 16, highlight: 8, label: "8 green, 4 red, 4 blue" }
  - at: 27
    dur: 7
    vo: "Then the chip guesses the two missing colours for every pixel from its neighbours."
    text: "THE CHIP FILLS IN"
    highlight: "FILLS IN"
    visual: { kind: cycle, icon: chip, steps: ["Read each well", "Check neighbours", "Guess missing colours", "Build the photo"] }
    sfx: pop
  - at: 34
    dur: 4
    vo: "So every photo starts as grey numbers, because..."
    text: ""
    visual: { kind: hero, icon: lens, motion: float, color: accent, label: "Just light counts" }
    note: "Last line runs back into the hook: Your camera can't see colour. It counts light."
```

## Fact check

- Bayer filter: 50% green, 25% red, 25% blue, because the eye is most sensitive to green. OK. Source: https://en.wikipedia.org/wiki/Bayer_filter
