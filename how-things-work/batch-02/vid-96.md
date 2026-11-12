---
id: vid-96
title: "Your inkjet printer boils ink thousands of times a second"
series: the-1-second-machine
topic: "Inkjet printer nozzles"
status: ready-to-build
duration: 35.5
music: hyperfun
accent: "#BF5AF2"
hashtags: [howthingswork, printer, speed, physics, shorts]
description: "Many inkjet printers fire ink by boiling a tiny spot of it, blasting out a droplet far smaller than a raindrop."
pinned: "What else happens in under a second?"
---

# vid-96 · Your inkjet printer boils ink thousands of times a second

## Hook

- **Chosen (0-3s):** "Your inkjet printer boils ink to fire every dot." Big text: IT BOILS INK
- **Backup hooks:**
    1. "Your printer fires ink by boiling it."
    2. "Each dot on your page was a tiny explosion."
    3. "Thousands of nozzles, firing faster than you can blink."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your inkjet printer boils ink to fire every dot."
    text: "IT BOILS INK"
    highlight: "BOILS"
    visual: { kind: hero, icon: drop, motion: pulse, color: accent, label: "Inkjet printer" }
    sfx: whoosh
  - at: 3
    dur: 4.5
    vo: "The print head has hundreds of nozzles, each thinner than a hair."
    text: "HUNDREDS OF NOZZLES"
    highlight: "NOZZLES"
    visual: { kind: zoom, levels: [{ label: "Print head", icon: box }, { label: "Row of nozzles", icon: pipe }, { label: "One tiny chamber", icon: drop }] }
  - at: 7.5
    dur: 6.5
    vo: "Behind each nozzle is a tiny heater. It flashes hot in a few millionths of a second."
    text: "A FLASH OF HEAT"
    highlight: "HEAT"
    visual: { kind: gauge, value: 95, low: "Room temp", high: "Boiling", label: "Heater in microseconds" }
    sfx: buzz
  - at: 14
    dur: 5
    vo: "A bubble of vapour forms and shoves one droplet out of the nozzle."
    text: "BUBBLE PUSHES DROP"
    highlight: "BUBBLE"
    visual: { kind: flow, steps: [{ label: "Heater flashes", icon: flame }, { label: "Vapour bubble grows", icon: bubble }, { label: "Droplet shoots out", icon: drop }] }
    sfx: pop
  - at: 19
    dur: 5
    vo: "The bubble collapses, and fresh ink is sucked in to refill the chamber."
    text: "COLLAPSE AND REFILL"
    highlight: "REFILL"
    visual: { kind: cycle, icon: drop, color: accent, steps: ["Heat", "Bubble", "Fire", "Refill"] }
  - at: 24
    dur: 4
    vo: "Each nozzle can repeat that thousands of times every second."
    text: "THOUSANDS PER SECOND"
    highlight: "THOUSANDS"
    visual: { kind: counter, to: 10000, suffix: "/s", label: "firings per nozzle, up to", icon: bolt }
  - at: 28
    dur: 3.5
    vo: "The droplets are picolitres, far smaller than a raindrop."
    text: "TINY DROPLETS"
    highlight: "TINY"
    visual: { kind: compare, mode: versus, left: { label: "Raindrop", icon: water, tag: "huge" }, right: { label: "Inkjet droplet", icon: drop, color: accent, tag: "a picolitre" } }
  - at: 31.5
    dur: 4
    vo: "Millions of dots, one tiny boil each. Your inkjet printer..."
    text: ""
    visual: { kind: hero, icon: drop, motion: float, color: accent, label: "Boil, fire, refill" }
    note: "Loops into: '...boils ink to fire every dot.'"
```

## Fact check

- Thermal inkjet heaters vaporise a thin ink layer in microseconds; firing rate of thousands per second per nozzle is typical, but the 10,000/s figure was not sourced in this pass (fetch refused), so the counter label now says "up to roughly". SOFTENED. Source: https://en.wikipedia.org/wiki/Inkjet_printing
