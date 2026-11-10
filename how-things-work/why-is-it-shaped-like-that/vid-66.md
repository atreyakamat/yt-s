---
id: vid-66
title: "This is why pencils are never round ✏️"
series: why-is-it-shaped-like-that
topic: "Hexagonal pencil shape"
status: ready-to-build
duration: 41
music: pixel-peeker-polka
accent: "#64D2FF"
hashtags: [howthingswork, pencil, design, school, shorts]
description: "Six flat sides stop a pencil rolling off the desk, fit the fingers' grip, and pack together with little wasted wood."
pinned: "What shape should we explain next?"
---

# vid-66 · This is why pencils are never round ✏️

## Hook

- **Chosen (0-3s):** "This is why most pencils are never round." Big text: NEVER ROUND
- **Backup hooks:**
    1. "Your pencil has six sides for three reasons."
    2. "Round pencils roll. Hexagons don't."
    3. "The shape of your pencil saves a forest."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "This is why most pencils are never round."
    text: "NEVER ROUND"
    highlight: "NEVER"
    visual: { kind: hero, icon: tool, motion: spin, color: orange, label: "Pencil" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Put a round pencil on a sloped desk and it rolls right off."
    text: "ROUND ROLLS"
    highlight: "ROLLS"
    visual: { kind: compare, mode: versus, left: { label: "Round", icon: ball, tag: "rolls away" }, right: { label: "Six sides", icon: tool, color: orange, tag: "stays put" } }
  - at: 8
    dur: 6.5
    vo: "A hexagon sits on a flat side and has to be tipped a long way before it rolls."
    text: "FLAT SIDES STOP IT"
    highlight: "STOP"
    visual: { kind: gauge, value: 80, low: "Rolls easily", high: "Stays put", label: "Hexagon on a slope" }
  - at: 14.5
    dur: 6.5
    vo: "Your grip uses a thumb and two fingers, and the flats give each one a place to sit."
    text: "MADE FOR YOUR GRIP"
    highlight: "GRIP"
    visual: { kind: callout, icon: person, color: orange, parts: ["Thumb", "Index finger", "Middle finger"] }
  - at: 21
    dur: 5
    vo: "Pencils are made in batches: cores laid between two wooden slats, then cut apart."
    text: "MADE IN A SANDWICH"
    highlight: "SANDWICH"
    visual: { kind: flow, steps: [{ label: "Grooved wood slat", icon: tree }, { label: "Cores laid in", icon: tool }, { label: "Glued and cut apart", icon: gear }] }
  - at: 26
    dur: 6.5
    vo: "Hexagons sit edge to edge like a honeycomb, so less wood is shaved away than for round ones."
    text: "LESS WASTED WOOD"
    highlight: "LESS"
    visual: { kind: grid, icon: tool, count: 18, highlight: 18, label: "Packed side by side" }
  - at: 32.5
    dur: 5
    vo: "Many coloured pencils are round, but the classic writing pencil kept its six sides."
    text: "SIX SIDES WON"
    highlight: "SIX"
    visual: { kind: bars, items: [{ label: "Grip", value: 3, color: orange }, { label: "No rolling", value: 3, color: accent }, { label: "Less waste", value: 3, color: green }] }
  - at: 37.5
    dur: 3.5
    vo: "Grip, no rolling, less waste. That's why most pencils..."
    text: ""
    visual: { kind: hero, icon: tool, motion: float, color: orange, label: "Six flat sides" }
    note: "Loops into: '...are never round.'"
```

## Fact check

- Hexagonal pencils resist rolling and offer flats for a three-finger grip.
- Pencils are made by sandwiching cores between grooved slats, then cutting individual pencils; hexagonal profiles waste less wood than round ones milled from the same slat.
- Many coloured pencils are round. Bars are illustrative (three reasons, equal weight).
