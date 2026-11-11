---
id: vid-75
title: "Your bagless vacuum hides a tiny tornado 🌪️"
series: cut-it-open
topic: "Bagless vacuum"
status: ready-to-build
duration: 41
music: investigations
accent: "#0A84FF"
hashtags: [howthingswork, engineering, vacuum, cleaning, shorts]
description: "Bagless vacuums spin dirty air so fast the dust gets flung out to the wall. No bag, no clogging filter."
pinned: "What should we cut open next?"
---

# vid-75 · Your bagless vacuum hides a tiny tornado

## Hook

- **Chosen (0-3s):** "Your bagless vacuum cleans the air with a tornado." Big text: A TINY TORNADO
- **Backup hooks:**
    1. "There's a tornado in your vacuum cleaner."
    2. "Your vacuum sorts dust by spinning it."
    3. "Why bagless vacuums don't lose suction as fast."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your bagless vacuum cleans the air with a tornado."
    text: "A TINY TORNADO"
    highlight: "TORNADO"
    visual: { kind: hero, icon: fan, motion: spin, color: purple, label: "Bagless vacuum" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Cut it open. Dirty air enters the clear bin from the side."
    text: "IN FROM THE SIDE"
    highlight: "SIDE"
    visual: { kind: layers, items: [{ label: "Clear dust bin", color: cyan }, { label: "Cyclone cone", color: accent }, { label: "Ring of mini cyclones", color: purple }, { label: "Filter", color: white }, { label: "Motor", color: steel }] }
    sfx: slice
  - at: 8
    dur: 6
    vo: "Coming in sideways makes it whirl round and round, like water down a plughole."
    text: "IT WHIRLS"
    highlight: "WHIRLS"
    visual: { kind: cycle, icon: wind, steps: ["Air enters sideways", "Spins round the wall", "Spirals down the cone"] }
  - at: 14
    dur: 6
    vo: "Dust is heavier than air, so it can't turn that tightly. It's flung outward."
    text: "FLUNG OUTWARD"
    highlight: "FLUNG"
    visual: { kind: flow, steps: [{ label: "Air turns the corner", icon: wind }, { label: "Dust keeps going straight", icon: arrow }, { label: "Hits the wall and drops", icon: box }] }
    sfx: thunk
  - at: 20
    dur: 6
    vo: "Smaller cones spin even faster and catch the finer dust the first one missed."
    text: "SMALLER = FASTER"
    highlight: "FASTER"
    visual: { kind: zoom, levels: [{ label: "Big cyclone: hair, fluff", icon: wind }, { label: "Small cones: fine dust", icon: fan }, { label: "Filter: the last bits", icon: shield }] }
  - at: 26
    dur: 6
    vo: "A bag is the filter, so its pores clog as it fills. A cyclone sorts dust first."
    text: "BAGS CLOG"
    highlight: "CLOG"
    visual: { kind: compare, mode: versus, left: { label: "Bag", icon: bag, tag: "Clogs when full" }, right: { label: "Cyclone", icon: wind, tag: "Sorts dust first" } }
  - at: 32
    dur: 5
    vo: "So the suction stays steadier as the bin fills up."
    text: "STEADY SUCTION"
    highlight: "STEADY"
    visual: { kind: gauge, value: 85, low: "Weak", high: "Strong", label: "Suction as the bin fills" }
    sfx: pop
  - at: 37
    dur: 4
    vo: "So next time you vacuum, remember..."
    text: ""
    visual: { kind: hero, icon: fan, motion: spin, color: purple, label: "Spin, don't strain" }
    note: "Loops into the hook: '...your bagless vacuum cleans the air with a tornado.'"
```

## Fact check

- Cyclonic vacuums: air enters tangentially and spins; denser dust particles can't follow the tight curve and are thrown to the wall, then fall into the bin.
- Many models use a second stage of smaller, faster cyclones for fine dust, then a filter before the motor.
- In bagged vacuums the bag itself filters the air, so suction falls as its pores fill; cyclones keep the airflow path more open.
