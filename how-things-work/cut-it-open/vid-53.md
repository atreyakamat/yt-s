---
id: vid-53
title: "Your sunglasses have invisible stripes that kill glare 🕶️"
series: cut-it-open
topic: "Polarised sunglasses"
status: ready-to-build
duration: 36
music: investigations
accent: "#32D74B"
hashtags: [howthingswork, sunglasses, science, light, shorts]
description: "Polarised lenses hold a film of lined-up molecules. They block the flat, sideways light that bounces off water and roads."
pinned: "What should we cut open next?"
---

# vid-53 · Your sunglasses have invisible stripes that kill glare

## Hook

- **Chosen (0-3s):** "Your sunglasses have invisible stripes that block glare." Big text: INVISIBLE STRIPES
- **Backup hooks:**
    1. "Your sunglasses can see into water. Here's how."
    2. "Tilt your head in polarised sunglasses and watch your phone vanish."
    3. "There's a hidden filter in your sunglasses."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your sunglasses have invisible stripes that block glare."
    text: "INVISIBLE STRIPES"
    highlight: "STRIPES"
    visual: { kind: hero, icon: eye, label: "Polarised sunglasses", color: dark, motion: pulse }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Sunlight wiggles in every direction as it travels."
    text: "LIGHT WIGGLES"
    highlight: "WIGGLES"
    visual: { kind: wave, waves: [{ label: "Sunlight: every direction", freq: 5, color: orange }] }
  - at: 8
    dur: 6
    vo: "When it bounces off water or a wet road, most of it ends up wiggling side to side."
    text: "GLARE IS FLAT"
    highlight: "FLAT"
    visual: { kind: flow, steps: [{ label: "Sunlight hits water", icon: sun }, { label: "Bounces off the surface", icon: water }, { label: "Wiggles side to side", icon: wave, color: accent }] }
  - at: 14
    dur: 6
    vo: "Inside the lens is a thin film of long molecules all lined up in one direction."
    text: "LINED-UP MOLECULES"
    highlight: "LINED-UP"
    visual: { kind: zoom, levels: [{ label: "Lens", icon: eye }, { label: "Polarising film", icon: lens, color: accent }, { label: "Lined-up molecules", icon: molecule }] }
    sfx: slice
  - at: 20
    dur: 6
    vo: "That film soaks up the side-to-side glare and lets the up-and-down light through."
    text: "GLARE BLOCKED"
    highlight: "BLOCKED"
    visual: { kind: compare, mode: versus, left: { label: "Side-to-side glare", icon: wave, color: red, tag: "BLOCKED" }, right: { label: "Up-down light", icon: sun, color: accent, tag: "PASSES" } }
    sfx: thunk
  - at: 26
    dur: 5
    vo: "Tilt your head while looking at some phone screens. They go dark."
    text: "TRY THE TILT TEST"
    highlight: "TILT"
    visual: { kind: gauge, value: 90, low: "Upright", high: "Tilted", label: "Screen goes dark" }
  - at: 31
    dur: 5
    vo: "That's how anglers see into water. Because your sunglasses..."
    text: ""
    visual: { kind: hero, icon: eye, label: "No more glare", color: accent, motion: float }
    note: "Last line runs back into the hook: Your sunglasses have invisible stripes that block glare."
```

## Fact check

- Ordinary sunlight is unpolarised (vibrating in all directions perpendicular to travel).
- Light reflected from horizontal surfaces like water and roads is partly polarised horizontally: Brewster reflection.
- Polarising film is made of stretched polymer (e.g. PVA with iodine) whose aligned molecules absorb light polarised along one axis; sunglasses are set to block horizontal polarisation.
- Many LCD and OLED screens emit polarised light, so rotating polarised lenses can black them out.
- Cutting surface glare lets you see below the water surface, a known reason anglers use them.
