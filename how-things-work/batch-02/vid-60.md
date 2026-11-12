---
id: vid-60
title: "Your clothes peg is two levers sharing one spring 🧺"
series: why-is-it-shaped-like-that
topic: "Clothes peg"
status: ready-to-build
duration: 41
music: pixel-peeker-polka
accent: "#64D2FF"
hashtags: [howthingswork, design, laundry, clothespeg, shorts]
description: "A spring clothes peg is a pair of levers with the spring as the pivot. Even the little notch in the jaw has a job."
pinned: "What shape should we explain next?"
---

# vid-60 · Your clothes peg is two levers sharing one spring

## Hook

- **Chosen (0-3s):** "Your clothes peg is two levers sharing one spring." Big text: TWO LEVERS, ONE SPRING
- **Backup hooks:**
    1. "There's a reason your clothes peg has a notch."
    2. "Your clothes peg is a pair of levers."
    3. "This 1850s design is still on your washing line."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your clothes peg is two levers sharing one spring."
    text: "TWO LEVERS, ONE SPRING"
    highlight: "ONE SPRING"
    visual: { kind: hero, icon: spring, motion: pulse, color: brown, label: "Clothes peg" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Squeeze the handles and both arms pivot around the coil in the middle."
    text: "THE COIL IS THE PIVOT"
    highlight: "PIVOT"
    visual: { kind: callout, icon: spring, parts: ["Long handles", "Coil = the pivot", "Short gripping jaws"] }
    sfx: click
  - at: 8
    dur: 6
    vo: "The handles are longer than the jaws, so a light squeeze opens them easily."
    text: "LONG HANDLES"
    highlight: "LONG"
    visual: { kind: flow, steps: [{ label: "Long handle, small push", icon: arrow }, { label: "Pivot at the spring", icon: spring }, { label: "Short jaw opens", icon: shirt }] }
  - at: 14
    dur: 6
    vo: "Let go and the spring pushes the handles apart, which clamps the jaws shut."
    text: "SPRING CLAMPS SHUT"
    highlight: "CLAMPS"
    visual: { kind: cycle, icon: spring, steps: ["Squeeze to open", "Clip on the line", "Let go", "Spring clamps shut"] }
    sfx: thunk
  - at: 20
    dur: 6
    vo: "See that curved notch near the tip? It wraps around the washing line."
    text: "THE NOTCH"
    highlight: "NOTCH"
    visual: { kind: zoom, levels: [{ label: "Clothes peg", icon: spring }, { label: "The jaw tip", icon: wrench }, { label: "Notch fits the line", icon: pipe }] }
  - at: 26
    dur: 6
    vo: "So it hugs the rope itself, not just the fabric, and is less likely to slide."
    text: "IT HUGS THE ROPE"
    highlight: "ROPE"
    visual: { kind: compare, mode: versus, left: { label: "Flat jaws", icon: wind, tag: "Slides more" }, right: { label: "Notched jaws", icon: lock, tag: "Grips the line" } }
  - at: 32
    dur: 5
    vo: "This spring design was patented in the 1850s and has barely changed."
    text: "SINCE THE 1850s"
    highlight: "1850s"
    visual: { kind: timeline, events: [{ year: "Before", label: "One-piece split wooden pegs" }, { year: "1853", label: "Spring clothes peg patented" }, { year: "Today", label: "Same idea, wood or plastic" }] }
    sfx: pop
  - at: 37
    dur: 4
    vo: "Because every single peg is really..."
    text: ""
    visual: { kind: hero, icon: spring, motion: float, color: brown, label: "Two levers" }
    note: "Loops into the hook: '...two levers sharing one spring.'"
```

## Fact check

- David M. Smith's spring clothespin patent US 10,163 was issued in 1853. OK. Source: https://www.openscience.fr/David-M-Smith-and-the-invention-of-the-clothespin-in-mid-19th-century-America
