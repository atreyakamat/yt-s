---
id: vid-19
title: "The black box on every plane is bright orange 🟧"
series: cut-it-open
topic: "Airplane black box"
status: ready-to-build
duration: 37
music: investigations
accent: "#FFD60A"
hashtags: [howthingswork, aviation, blackbox, planes, shorts]
description: "A plane's black box is really two orange recorders built to survive a crash. Here is what is inside them."
pinned: "What should we cut open next?"
---

# vid-19 · The black box on every plane is bright orange

## Hook

- **Chosen (0-3s):** "The black box on your plane is bright orange." Big text: IT'S NOT BLACK
- **Backup hooks:**
    1. "Every plane carries two boxes built to survive a crash."
    2. "This box can survive a fire that melts the plane."
    3. "Black boxes are not black, and there are two of them."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "The black box on your plane is bright orange."
    text: "IT'S NOT BLACK"
    highlight: "NOT BLACK"
    visual: { kind: hero, icon: box, motion: drop, color: orange, label: "Flight recorder" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "Orange so searchers can spot it in wreckage, with reflective stripes too."
    text: "PAINTED TO BE FOUND"
    highlight: "FOUND"
    visual: { kind: grid, icon: box, count: 24, highlight: 1, label: "Easy to spot in debris" }
    sfx: click
  - at: 8
    dur: 6
    vo: "There are two. One records the cockpit voices, one records thousands of flight readings."
    text: "TWO RECORDERS"
    highlight: "TWO"
    visual: { kind: compare, mode: versus, left: { label: "Cockpit voice", icon: speaker, tag: "Sounds" }, right: { label: "Flight data", icon: chip, tag: "Numbers" } }
    sfx: slice
  - at: 14
    dur: 6
    vo: "The memory chips sit inside layers of steel or titanium, insulation and heat-soaking material."
    text: "ARMOURED MEMORY"
    highlight: "ARMOURED"
    visual: { kind: layers, items: [{ label: "Steel or titanium shell", color: steel }, { label: "Insulation", color: grey }, { label: "Heat-soaking block", color: brown }, { label: "Memory chips", color: accent }] }
    sfx: thunk
  - at: 20
    dur: 6
    vo: "They are tested against huge impacts and a fire of over a thousand degrees for an hour."
    text: "1,100°C FOR AN HOUR"
    highlight: "1,100°C"
    visual: { kind: gauge, value: 95, low: "Cold", high: "Inferno", label: "Fire test, one full hour" }
  - at: 26
    dur: 6
    vo: "If it lands in the sea, a beacon starts pinging so divers can find it."
    text: "IT PINGS UNDERWATER"
    highlight: "PINGS"
    visual: { kind: wave, waves: [{ label: "Underwater locator ping", freq: 6, color: accent }] }
    sfx: buzz
  - at: 32
    dur: 5
    vo: "They sit in the tail, the part most likely to survive. And yes..."
    text: ""
    visual: { kind: hero, icon: plane, motion: float, color: orange, label: "Recorders in the tail" }
    note: "Last line runs back into the hook."
```

## Fact check

- Flight recorders are painted bright orange with reflective tape so they can be found; 'black box' is a nickname.
- Airliners carry a cockpit voice recorder and a flight data recorder (some newer designs combine them).
- The crash-survivable memory unit is protected by a metal shell, insulation and a thermal block.
- Certification requires surviving a high-intensity fire of about 1,100 °C for 60 minutes and a very large impact.
- An underwater locator beacon activates on contact with water and pings for at least 30 days (90 on newer units).
- Recorders are usually mounted in the rear of the aircraft, which tends to suffer less damage in a crash.
