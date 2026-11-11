---
id: vid-63
title: "Why car tyres are never smooth 🌧"
series: why-is-it-shaped-like-that
topic: "Tyre tread"
status: ready-to-build
duration: 43
music: pixel-peeker-polka
accent: "#64D2FF"
hashtags: [howthingswork, cars, tyres, rain, shorts]
description: "The grooves in your tyres are water channels. Without them, a car would float on a wet road."
pinned: "What shape should we explain next?"
---

# vid-63 · Why car tyres are never smooth

## Hook

- **Chosen (0-3s):** "Your tyres are never smooth, and rain is why." Big text: NEVER SMOOTH
- **Backup hooks:**
    1. "This is why car tyres are never smooth."
    2. "Your tyres pump water out like a sprinkler."
    3. "Race tyres are smooth. Yours aren't, for one reason."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your tyres are never smooth, and rain is why."
    text: "NEVER SMOOTH"
    highlight: "SMOOTH"
    visual: { kind: hero, icon: wheel, motion: spin, color: dark }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "On a wet road, a thin layer of water sits between the rubber and the road."
    text: "A LAYER OF WATER"
    highlight: "WATER"
    visual: { kind: layers, items: [{ label: "Rubber tyre", color: dark }, { label: "Water film", color: cyan }, { label: "Road surface", color: grey }] }
  - at: 9
    dur: 6
    vo: "A smooth tyre would ride up on that water and float, like a skimming stone."
    text: "AQUAPLANING"
    highlight: "AQUAPLANING"
    visual: { kind: compare, mode: versus, left: { label: "Smooth tyre", icon: wheel, color: grey, tag: "Floats" }, right: { label: "Grooved tyre", icon: wheel, color: accent, tag: "Grips" } }
    sfx: buzz
  - at: 15
    dur: 7
    vo: "The long grooves are channels. They squeeze water out the back and sides as the tyre rolls."
    text: "WATER CHANNELS"
    highlight: "CHANNELS"
    visual: { kind: flow, steps: [{ label: "Tyre meets water", icon: drop }, { label: "Grooves collect it", icon: pipe }, { label: "Water flung out", icon: arrow }] }
  - at: 22
    dur: 6
    vo: "Every turn of the wheel, it clears water away so rubber can touch the road."
    text: "SQUEEZE AND FLING"
    highlight: "FLING"
    visual: { kind: cycle, icon: water, steps: ["Roll onto water", "Squeeze into grooves", "Fling it out", "Grip the road"], color: cyan }
  - at: 28
    dur: 6
    vo: "The tiny zigzag cuts, called sipes, wipe away the last thin film."
    text: "SIPES"
    highlight: "SIPES"
    visual: { kind: zoom, levels: [{ label: "Tyre", icon: wheel }, { label: "Tread block", icon: box }, { label: "Sipes", icon: lens }] }
    sfx: slice
  - at: 34
    dur: 6
    vo: "Race cars on dry tracks use smooth slicks, because there's no water to clear."
    text: "WHY SLICKS ARE SMOOTH"
    highlight: "SLICKS"
    visual: { kind: callout, icon: car, parts: ["Slicks: dry only", "More rubber on the road", "Grooves: for rain"] }
  - at: 40
    dur: 3
    vo: "And that's exactly why..."
    text: ""
    visual: { kind: hero, icon: wheel, motion: float, color: dark, label: "Tyre tread" }
    note: "Loops into the hook: 'Your tyres are never smooth, and rain is why.'"
```

## Fact check

- Aquaplaning (hydroplaning): a water film lifts the tyre off the road when the tread can't clear water fast enough; tread grooves channel water away. Standard tyre engineering.
- Sipes are thin slits in tread blocks that help wipe water and add grip on wet and icy roads.
- Racing slicks have no grooves to put the maximum rubber on a dry track; teams switch to grooved wet tyres in rain.
