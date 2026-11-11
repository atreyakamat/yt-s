---
id: vid-45
title: "Your white LED bulb is secretly making blue light 💡"
series: cut-it-open
topic: "LED bulb"
status: ready-to-build
duration: 41
music: investigations
accent: "#32D74B"
hashtags: [howthingswork, engineering, led, lightbulb, shorts]
description: "A white LED is really a blue chip under a yellow coating. Your eye mixes the two and sees white."
pinned: "What should we cut open next?"
---

# vid-45 · Your white LED bulb is secretly making blue light

## Hook

- **Chosen (0-3s):** "Your white LED bulb is secretly making blue light." Big text: SECRETLY BLUE
- **Backup hooks:**
    1. "There's no white light coming out of your LED chip."
    2. "Your light bulb is painted yellow on the inside."
    3. "Your LED bulb has a power supply in its neck."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your white LED bulb is secretly making blue light."
    text: "SECRETLY BLUE"
    highlight: "BLUE"
    visual: { kind: hero, icon: bulb, motion: pulse, color: cyan, label: "LED bulb" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Cut it open. Under the frosted dome sits a ring of tiny chips."
    text: "TINY CHIPS INSIDE"
    highlight: "CHIPS"
    visual: { kind: layers, items: [{ label: "Frosted dome", color: white }, { label: "LED chips", color: accent }, { label: "Aluminium heat sink", color: steel }, { label: "Driver circuit", color: green }, { label: "Screw base", color: brass }] }
    sfx: slice
  - at: 8
    dur: 6
    vo: "Each chip is a diode. Electrons drop into gaps and give off their energy as light."
    text: "ELECTRONS MAKE LIGHT"
    highlight: "LIGHT"
    visual: { kind: zoom, levels: [{ label: "LED bulb", icon: bulb }, { label: "One chip", icon: chip }, { label: "Electron fills a gap", icon: molecule }] }
  - at: 14
    dur: 6
    vo: "That light comes out blue. So the chip is coated in a yellow phosphor."
    text: "A YELLOW COATING"
    highlight: "YELLOW"
    visual: { kind: flow, steps: [{ label: "Chip glows blue", icon: bulb, color: blue }, { label: "Phosphor turns some yellow", icon: star, color: orange }, { label: "Blue plus yellow", icon: eye, color: white }] }
    sfx: click
  - at: 20
    dur: 6
    vo: "Your eye mixes the blue and the yellow together and sees white."
    text: "BLUE + YELLOW = WHITE"
    highlight: "WHITE"
    visual: { kind: wave, waves: [{ label: "Blue from the chip", freq: 8, color: blue }, { label: "Yellow from the phosphor", freq: 4, color: orange }] }
  - at: 26
    dur: 6
    vo: "The driver in the base turns mains power into the low, steady current the chips need."
    text: "A POWER SUPPLY INSIDE"
    highlight: "POWER SUPPLY"
    visual: { kind: callout, icon: chip, parts: ["Turns AC into DC", "Drops the voltage", "Keeps current steady"] }
  - at: 32
    dur: 5
    vo: "It uses under a fifth of the power of an old bulb."
    text: "UNDER A FIFTH"
    highlight: "FIFTH"
    visual: { kind: bars, unit: "W", items: [{ label: "Old filament bulb", value: 60, color: orange }, { label: "LED, same brightness", value: 9, color: accent }] }
    sfx: pop
  - at: 37
    dur: 4
    vo: "So under that soft white glow..."
    text: ""
    visual: { kind: hero, icon: bulb, motion: float, color: cyan, label: "Blue inside" }
    note: "Loops into the hook: '...your white LED bulb is secretly making blue light.'"
```

## Fact check

- Most white LEDs are blue (indium gallium nitride) LEDs coated with a yellow phosphor such as cerium-doped YAG; the mix looks white.
- LEDs emit light when electrons recombine with holes across a semiconductor junction.
- LED bulbs contain a driver that converts mains AC to low-voltage DC and regulates current, plus a heat sink.
- A 60 W incandescent is matched by roughly an 8-10 W LED, so 'under a fifth of the power' is fair.
