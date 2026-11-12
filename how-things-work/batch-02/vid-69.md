---
id: vid-69
title: "Why golf balls are covered in hundreds of tiny dents ⛳"
series: why-is-it-shaped-like-that
topic: "Golf ball dimples"
status: ready-to-build
duration: 39
music: pixel-peeker-polka
accent: "#64D2FF"
hashtags: [howthingswork, golf, physics, sports, shorts]
description: "Dimples make the air hug a golf ball longer, shrinking the wake behind it. A dimpled ball flies about twice as far as a smooth one."
pinned: "What shape should we explain next?"
---

# vid-69 · Why golf balls are covered in hundreds of tiny dents

## Hook

- **Chosen (0-3s):** "This is why golf balls are never smooth." Big text: NEVER SMOOTH
- **Backup hooks:**
    1. "A smooth golf ball would barely fly half as far."
    2. "Those dents on your golf ball cut drag in half."
    3. "Golfers discovered this by hitting beaten-up balls."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "This is why golf balls are never smooth."
    text: "NEVER SMOOTH"
    highlight: "SMOOTH"
    visual: { kind: hero, icon: ball, motion: spin, color: white }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "A golf ball has around three to five hundred dimples, and each one is there on purpose."
    text: "HUNDREDS OF DIMPLES"
    highlight: "DIMPLES"
    visual: { kind: callout, icon: ball, parts: ["About 300 to 500 dimples", "Shallow round cups", "Even pattern"] }
  - at: 9
    dur: 6
    vo: "A smooth ball drags a big wake of swirling air behind it, and that wake pulls it back."
    text: "THE WAKE PULLS BACK"
    highlight: "WAKE"
    visual: { kind: compare, mode: versus, left: { label: "Smooth ball", icon: ball, tag: "Big wake" }, right: { label: "Dimpled ball", icon: ball, tag: "Small wake" } }
  - at: 15
    dur: 5
    vo: "Dimples stir up a thin layer of air so it hugs the ball for longer."
    text: "AIR HUGS THE BALL"
    highlight: "HUGS"
    visual: { kind: flow, steps: [{ label: "Dimples trip the air", icon: wind }, { label: "Thin turbulent layer", icon: wave }, { label: "Air clings longer", icon: ball }] }
  - at: 20
    dur: 5
    vo: "The air peels off later, the wake shrinks, and drag drops by roughly half."
    text: "DRAG CUT IN HALF"
    highlight: "HALF"
    visual: { kind: bars, unit: "%", items: [{ label: "Smooth ball drag", value: 100, color: red }, { label: "Dimpled ball drag", value: 50, color: green }] }
  - at: 25
    dur: 4.5
    vo: "Add backspin, and the dimples help the ball make lift, like a wing."
    text: "BACKSPIN MAKES LIFT"
    highlight: "LIFT"
    visual: { kind: cycle, icon: ball, steps: ["Backspin", "Air flung downward", "Ball pushed up", "Longer flight"] }
  - at: 29.5
    dur: 5
    vo: "The result: a dimpled ball flies roughly twice as far as a smooth one."
    text: "TWICE AS FAR"
    highlight: "TWICE"
    visual: { kind: counter, to: 2, suffix: "x", label: "the distance of a smooth ball", icon: arrow }
    sfx: pop
  - at: 34.5
    dur: 4.5
    vo: "Golfers first noticed it with scuffed old balls. And that's why golf balls..."
    text: ""
    visual: { kind: hero, icon: ball, motion: float, color: white, label: "Dents on purpose" }
    note: "Last line runs back into the hook."
```

## Fact check

- Golf balls have about 300 to 500 dimples (commonly 330 to 400); dimpled ball drag roughly half and carry roughly twice a smooth ball. OK as "about/roughly". Source: https://www.nationalclubgolfer.com/us/equipment/how-many-dimples-are-on-a-golf-ball
