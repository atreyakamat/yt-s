---
id: vid-04
title: Your airbag inflates faster than you can blink
series: the-1-second-machine
topic: Car airbag
status: ready-to-build
duration: 41
music: hyperfun
musicVolume: 0.12
accent: "#FFD60A"
---

# vid-04 · Your airbag inflates faster than you can blink

## Hook

- **Chosen (0-3s):** "You won't even see this happen."
- **Backup hooks:**
    1. "Your airbag is a controlled explosion."
    2. "This happens faster than you can blink."
    3. "Airbags fill in 30 milliseconds. Watch it slowed down."

## Scenes

The build reads this block. `note` is the exact visual to draw for that scene.

```yaml
scenes:
  - at: 0
    dur: 3
    sfx: thunk
    vo: "You won't even see this happen."
    text: "0.03 SECONDS"
    visual: { kind: airbag, state: freeze }
    note: "Crash-test dummy, freeze frame at impact"
  - at: 3
    dur: 7
    sfx: buzz
    vo: "A sensor feels the car slow down far faster than any brake could."
    text: "CRASH SENSOR"
    visual: { kind: airbag, state: sensor }
    note: "Cutaway of car front: sensor in the frame lights up"
  - at: 10
    dur: 7
    sfx: click
    vo: "In milliseconds, it fires a signal to a small charge in the steering wheel."
    text: "IGNITER"
    visual: { kind: airbag, state: igniter }
    note: "Signal races down a wire to the steering wheel"
  - at: 17
    dur: 9
    sfx: whoosh
    vo: "The charge sets off a chemical reaction that makes a burst of harmless gas."
    text: "GAS"
    visual: { kind: airbag, state: gas }
    note: "Slow-mo: chemical burns, gas floods the folded bag"
  - at: 26
    dur: 6
    sfx: pop
    vo: "Full size in about 30 milliseconds. A blink takes over 100."
    text: "FASTER THAN A BLINK"
    visual: { kind: airbag, state: clock }
    note: "Bag fully inflated; clock overlay reads 30 ms; eye-blink graphic beside it"
  - at: 32
    dur: 5
    sfx: whoosh
    vo: "Then it deflates right away through vents, so it cushions instead of bouncing you back."
    text: "VENTS"
    visual: { kind: airbag, state: vents }
    note: "Dummy hits bag, gas escapes through side vents"
  - at: 37
    dur: 4
    sfx: thunk
    vo: "All of it, before you even know..."
    text: ""
    visual: { kind: airbag, state: freeze }
    note: "Rewind to the freeze frame"
```

## Notes

**Loop:** "before you even know..." runs into "You won't even see this happen."
**Fact check:** inflation time roughly 20-50 ms depending on source; keep "about 30". Blink 100-400 ms.

Visual style, safe areas and audio rules: same as [vid-01](../cut-it-open/vid-01.md).

## Fact check

- Airbag fully inflates in about 20 to 30 ms (frontal), 30 ms per Bosch. OK. Source: https://www.bosch-presse.de/pressportal/de/en/deploys-faster-than-a-person-can-blink-220689.html
- A blink lasts 100 to 400 ms, so over 100 ms holds. OK. Source: https://bionumbers.hms.harvard.edu/bionumber.aspx?id=100706
