---
id: vid-97
title: "A hammer drill hits the wall hundreds of times a second"
series: the-1-second-machine
topic: "Hammer drill"
status: ready-to-build
duration: 41
music: hyperfun
accent: "#BF5AF2"
hashtags: [howthingswork, tools, diy, drill, shorts]
description: "Two ridged discs inside a hammer drill ride over each other, knocking the bit forward tens of thousands of times a minute."
pinned: "What else happens in under a second?"
---

# vid-97 · A hammer drill hits the wall hundreds of times a second

## Hook

- **Chosen (0-3s):** "A hammer drill hits hundreds of times per second." Big text: HUNDREDS OF HITS A SECOND
- **Backup hooks:**
    1. "Your drill has a tiny hammer hidden inside."
    2. "Two bumpy discs let your drill chew through brick."
    3. "Hammer mode is two ridged discs fighting."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "A hammer drill hits hundreds of times per second."
    text: "HUNDREDS OF HITS A SECOND"
    highlight: "HUNDREDS"
    visual: { kind: hero, icon: tool, motion: shake, color: accent, label: "Hammer drill" }
    sfx: buzz
  - at: 3
    dur: 6
    vo: "A plain drill bit only scrapes. On brick and concrete, it barely bites."
    text: "SCRAPING ISN'T ENOUGH"
    highlight: "ISN'T"
    visual: { kind: compare, mode: versus, left: { label: "Plain drill", icon: tool, tag: "Scrapes" }, right: { label: "Hammer drill", icon: tool, tag: "Chips" } }
  - at: 9
    dur: 6
    vo: "Inside are two discs with ridged faces, pressed against each other."
    text: "TWO RIDGED DISCS"
    highlight: "RIDGED"
    visual: { kind: layers, items: [{ label: "Chuck and bit", color: steel }, { label: "Spinning ridged disc", color: accent }, { label: "Fixed ridged disc", color: grey }, { label: "Motor", color: orange }] }
    sfx: slice
  - at: 15
    dur: 6
    vo: "As one spins, its ridges ride up and over the other, bumping the bit forward."
    text: "RIDE UP, DROP DOWN"
    highlight: "DROP"
    visual: { kind: cycle, icon: gear, steps: ["Ridges climb", "Bit pushed forward", "Ridges drop", "Bit springs back"] }
    sfx: click
  - at: 21
    dur: 6
    vo: "Many bumps per turn adds up to tens of thousands of blows a minute."
    text: "TENS OF THOUSANDS"
    highlight: "THOUSANDS"
    visual: { kind: counter, to: 40000, label: "blows a minute, roughly", icon: bolt }
    sfx: buzz
  - at: 27
    dur: 5
    vo: "Each hit cracks off tiny chips, and the spiral carries the dust out."
    text: "CHIP, CHIP, CHIP"
    highlight: "CHIP"
    visual: { kind: zoom, levels: [{ label: "Masonry bit", icon: tool }, { label: "Hard tip", icon: star }, { label: "Tiny chips of stone", icon: molecule }] }
  - at: 32
    dur: 5
    vo: "Switch to drill mode and the hammering stops. Wood doesn't need it."
    text: "DRILL MODE: NO HAMMER"
    highlight: "NO HAMMER"
    visual: { kind: wave, waves: [{ label: "Hammer mode: rapid knocks", freq: 9, color: accent }, { label: "Drill mode: smooth spin", freq: 1, color: blue }] }
    sfx: click
  - at: 37
    dur: 4
    vo: "So next time it buzzes, remember..."
    text: ""
    visual: { kind: hero, icon: tool, motion: pulse, color: accent, label: "Spin plus hammer" }
    note: "Last line runs back into the hook: 'A hammer drill hits hundreds of times per second.'"
```

## Fact check

- Consumer hammer drills use two ratcheting (ridged) discs or cams; as one rotates against the other the chuck is pushed forward and back many times per turn.
- Typical blow rates are quoted around 20,000 to 50,000 blows per minute; 40,000 per minute is about 670 per second, so 'hundreds per second' holds. The counter is labelled 'roughly'.
- Masonry bits have hard (usually carbide) tips; the spiral flutes carry dust out.
- The mode selector disengages the hammer action for wood and metal.
