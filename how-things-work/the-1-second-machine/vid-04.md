---
id: vid-04
title: Your airbag inflates faster than you can blink
series: the-1-second-machine
topic: Car airbag
status: script-ready
duration: 40
music: hyperfun
musicVolume: 0.12
accent: "#FFD60A"
---

# vid-04 · Your airbag inflates faster than you can blink

> **Status: script ready, visuals not built yet.** The build renders it with a placeholder card where the `airbag` visual will go. Next step: build that visual the way `Lock.tsx` was built for vid-01, then set `status: ready-to-build`.

## Hook

- **Chosen (0-2s):** "You won't even see this happen."
- **Backup hooks:**
    1. "Your airbag is a controlled explosion."
    2. "This happens faster than you can blink."
    3. "Airbags fill in 30 milliseconds. Watch it slowed down."

## Scenes

The build reads this block. `note` is the exact visual to draw for that scene.

```yaml
scenes:
  - at: 0
    dur: 2
    vo: "You won't even see this happen."
    text: "0.03 SECONDS"
    visual: { kind: airbag }
    note: "Crash-test dummy, freeze frame at impact"
  - at: 2
    dur: 7
    vo: "A sensor feels the car slow down far faster than any brake could."
    text: "CRASH SENSOR"
    visual: { kind: airbag }
    note: "Cutaway of car front: sensor in the frame lights up"
  - at: 9
    dur: 7
    vo: "In milliseconds, it fires a signal to a small charge in the steering wheel."
    text: "IGNITER"
    visual: { kind: airbag }
    note: "Signal races down a wire to the steering wheel"
  - at: 16
    dur: 9
    vo: "The charge sets off a chemical reaction that makes a burst of harmless gas."
    text: "GAS"
    visual: { kind: airbag }
    note: "Slow-mo: chemical burns, gas floods the folded bag"
  - at: 25
    dur: 6
    vo: "Full size in about 30 milliseconds. A blink takes over 100."
    text: "FASTER THAN A BLINK"
    visual: { kind: airbag }
    note: "Bag fully inflated; clock overlay reads 30 ms; eye-blink graphic beside it"
  - at: 31
    dur: 5
    vo: "Then it deflates right away through vents, so it cushions instead of bouncing you back."
    text: "VENTS"
    visual: { kind: airbag }
    note: "Dummy hits bag, gas escapes through side vents"
  - at: 36
    dur: 4
    vo: "All of it, before you even know..."
    text: ""
    visual: { kind: airbag }
    note: "Rewind to the freeze frame"
```

## Notes

**Loop:** "before you even know..." runs into "You won't even see this happen."
**Fact check:** inflation time roughly 20-50 ms depending on source; keep "about 30". Blink 100-400 ms.

Visual style, safe areas and audio rules: same as [vid-01](../cut-it-open/vid-01.md).
