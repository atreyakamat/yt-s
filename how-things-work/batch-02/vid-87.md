---
id: vid-87
title: "A popcorn kernel explodes faster than you can blink 🍿"
series: the-1-second-machine
topic: "Popcorn popping"
status: ready-to-build
duration: 36
music: hyperfun
accent: "#BF5AF2"
hashtags: [science, food, popcorn, slowmotion, shorts]
description: "Each kernel is a tiny pressure cooker. When the shell gives way, the starch inside foams and sets in a split second."
pinned: "What else happens in under a second?"
---

# vid-87 · A popcorn kernel explodes faster than you can blink

## Hook

- **Chosen (0-3s):** "Popcorn explodes faster than you can blink." Big text: FASTER THAN A BLINK
- **Backup hooks:**
    1. "Every popcorn kernel is a tiny pressure cooker."
    2. "A drop of water makes popcorn explode."
    3. "Popcorn flips inside out in a split second."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Popcorn explodes faster than you can blink."
    text: "FASTER THAN A BLINK"
    highlight: "BLINK"
    visual: { kind: hero, icon: food, motion: shake, color: white, label: "One kernel" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Each kernel holds a tiny drop of water, sealed in a hard, waterproof shell."
    text: "WATER INSIDE"
    highlight: "WATER"
    visual: { kind: layers, items: [{ label: "Hard shell", color: brown }, { label: "Starch", color: white }, { label: "Trapped water", color: blue }] }
    sfx: slice
  - at: 8
    dur: 5
    vo: "Heat it and the water turns to steam. It can't escape, so pressure builds."
    text: "PRESSURE BUILDS"
    highlight: "PRESSURE"
    visual: { kind: gauge, value: 90, low: "Cold", high: "Bursting", label: "Steam trapped inside" }
  - at: 13
    dur: 4
    vo: "At around one hundred and eighty degrees, the shell finally cracks."
    text: "180°C"
    highlight: "180"
    visual: { kind: counter, to: 180, suffix: "°C", label: "the shell gives up", icon: thermometer }
  - at: 17
    dur: 6
    vo: "In a few hundredths of a second, the steam blasts out and the starch puffs into foam."
    text: "INSIDE OUT"
    highlight: "INSIDE OUT"
    visual: { kind: flow, steps: [{ label: "Shell cracks", icon: bolt }, { label: "Steam escapes", icon: cloud }, { label: "Starch foams", icon: bubble }, { label: "Foam sets hard", icon: food }] }
    sfx: pop
  - at: 23
    dur: 4
    vo: "That pop you hear is the steam escaping, not the shell snapping."
    text: "THE POP = STEAM"
    highlight: "STEAM"
    visual: { kind: wave, waves: [{ label: "Steam release", freq: 10, color: accent }] }
  - at: 27
    dur: 6
    vo: "A burst of starch can even kick the kernel off the pan, like a little leg."
    text: "IT JUMPS"
    highlight: "JUMPS"
    visual: { kind: zoom, levels: [{ label: "Pan", icon: flame }, { label: "Kernel", icon: food }, { label: "Starch leg", icon: arrow }] }
  - at: 33
    dur: 3
    vo: "Blink and you miss it, because popcorn..."
    text: ""
    visual: { kind: hero, icon: food, motion: pulse, color: white, label: "Pop" }
    note: "Last line runs back into the hook: 'Popcorn explodes faster than you can blink.'"
```

## Fact check

- Popcorn kernels contain roughly 14% moisture inside a hard, moisture-proof hull (pericarp).
- Heated water turns to steam; the hull holds until about 180 °C, when it ruptures (French high-speed camera study, 2015, found ~180 °C).
- The same study filmed the burst in hundredths of a second and linked the pop sound to the release of water vapour, not hull fracture.
- It also showed a starch 'leg' that pushes the kernel so it jumps.
