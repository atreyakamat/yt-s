---
id: vid-81
title: "Your highlighter glows in daylight, here's how 🟨"
series: cut-it-open
topic: "Highlighter ink"
status: ready-to-build
duration: 36
music: investigations
accent: "#0A84FF"
hashtags: [howthingswork, highlighter, school, science, shorts]
description: "Highlighter ink is fluorescent: it soaks up invisible ultraviolet light and gives it back as bright colour."
pinned: "What should we cut open next?"
---

# vid-81 · Your highlighter glows in daylight, here's how 🟨

## Hook

- **Chosen (0-3s):** "Your highlighter glows in daylight, not just under UV." Big text: IT GLOWS IN DAYLIGHT
- **Backup hooks:**
    1. "Your highlighter is brighter than the colour yellow."
    2. "Highlighters turn invisible light into colour."
    3. "This is why highlighters glow under a black light."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your highlighter glows in daylight, not just under UV."
    text: "IT GLOWS IN DAYLIGHT"
    highlight: "GLOWS"
    visual: { kind: hero, icon: bulb, motion: pulse, color: accent, label: "Highlighter" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "The ink holds fluorescent dyes, the same kind of trick used in hi-vis vests."
    text: "FLUORESCENT DYE"
    highlight: "FLUORESCENT"
    visual: { kind: callout, icon: drop, color: accent, parts: ["Water", "Fluorescent dye", "See-through"] }
  - at: 8
    dur: 4.5
    vo: "Daylight and many lamps carry ultraviolet light that your eyes can't see."
    text: "INVISIBLE LIGHT"
    highlight: "INVISIBLE"
    visual: { kind: wave, waves: [{ label: "Ultraviolet: invisible", freq: 9, color: purple }, { label: "Yellow-green: visible", freq: 5, color: accent }] }
  - at: 12.5
    dur: 6
    vo: "The dye soaks up that hidden light and gives it back as colour you can see."
    text: "UV IN, COLOUR OUT"
    highlight: "COLOUR OUT"
    visual: { kind: flow, steps: [{ label: "UV light hits the dye", icon: sun }, { label: "Dye absorbs the energy", icon: molecule }, { label: "Gives off visible light", icon: bulb }] }
  - at: 18.5
    dur: 5
    vo: "So the page sends back more light than plain yellow paint ever could."
    text: "EXTRA BRIGHT"
    highlight: "BRIGHT"
    visual: { kind: gauge, value: 92, low: "Plain paint", high: "Fluorescent", label: "How bright it looks" }
  - at: 23.5
    dur: 4
    vo: "The ink is see-through, so the black print underneath still shows."
    text: "SEE-THROUGH"
    highlight: "SEE-THROUGH"
    visual: { kind: layers, items: [{ label: "Clear glowing ink", color: accent }, { label: "Black printed text", color: dark }, { label: "White paper", color: white }] }
  - at: 27.5
    dur: 5.5
    vo: "Under a black light, which is mostly UV, a yellow highlighter shines like a lamp."
    text: "BLACK LIGHT"
    highlight: "BLACK LIGHT"
    visual: { kind: compare, mode: versus, left: { label: "Room light", icon: bulb, tag: "bright" }, right: { label: "Black light", icon: sun, color: purple, tag: "glowing" } }
  - at: 33
    dur: 3
    vo: "It's not just bright ink. Your highlighter..."
    text: ""
    visual: { kind: hero, icon: bulb, motion: float, color: accent, label: "Hidden light" }
    note: "Loops into: '...glows in daylight, not just under UV.'"
```

## Fact check

- Highlighter inks use fluorescent dyes (e.g. pyranine in yellow) that absorb UV/blue light and re-emit longer, visible wavelengths.
- Daylight and many indoor lamps contain some UV, so fluorescent colours look brighter than normal pigments.
- Highlighter ink is translucent so underlying text remains readable.
- Black lights emit mostly near-UV, making fluorescent ink glow strongly.
