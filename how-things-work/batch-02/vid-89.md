---
id: vid-89
title: "Your circuit breaker reacts faster than you can blink"
series: the-1-second-machine
topic: "Circuit breaker magnetic trip"
status: ready-to-build
duration: 36
music: hyperfun
accent: "#BF5AF2"
hashtags: [electricity, fast, engineering, home, shorts]
description: "In a short circuit, a coil in your breaker turns into a magnet and throws the contacts apart in thousandths of a second."
pinned: "What else happens in under a second?"
---

# vid-89 · Your circuit breaker reacts faster than you can blink

## Hook

- **Chosen (0-3s):** "Your circuit breaker reacts faster than you can blink." Big text: FASTER THAN A BLINK
- **Backup hooks:**
    1. "A short circuit is over before your eyes can close."
    2. "There's an electromagnet hiding in every circuit breaker."
    3. "This switch fires itself in a few thousandths of a second."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your circuit breaker reacts faster than you can blink."
    text: "FASTER THAN A BLINK"
    highlight: "BLINK"
    visual: { kind: hero, icon: bolt, motion: shake, color: red }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "A short circuit lets current rush through at many times the normal amount."
    text: "A SURGE OF CURRENT"
    highlight: "SURGE"
    visual: { kind: gauge, value: 98, low: "Normal", high: "Short", label: "Current spikes" }
    sfx: buzz
  - at: 8
    dur: 6
    vo: "All that current flows through a coil inside the breaker, turning it into a magnet."
    text: "THE COIL BECOMES A MAGNET"
    highlight: "MAGNET"
    visual: { kind: zoom, levels: [{ label: "Circuit breaker", icon: box }, { label: "Copper coil", icon: coil }, { label: "Magnetic field", icon: magnet }] }
  - at: 14
    dur: 6
    vo: "The magnet snaps a plunger forward, which knocks the catch and springs the contacts apart."
    text: "SNAP, KNOCK, OPEN"
    highlight: "OPEN"
    visual: { kind: flow, steps: [{ label: "Coil magnetised", icon: magnet }, { label: "Plunger snaps", icon: arrow }, { label: "Catch released", icon: spring }, { label: "Contacts fly apart", icon: bolt }] }
    sfx: thunk
  - at: 20
    dur: 6
    vo: "Pulling them apart makes a spark. Metal plates split the spark up until it dies."
    text: "KILL THE SPARK"
    highlight: "SPARK"
    visual: { kind: callout, icon: box, parts: ["Contacts", "Arc chute plates", "Magnet coil", "Bimetal strip"] }
  - at: 26
    dur: 5
    vo: "The whole thing can be over in about a hundredth of a second."
    text: "A HUNDREDTH OF A SECOND"
    highlight: "HUNDREDTH"
    visual: { kind: bars, unit: "ms", items: [{ label: "A blink, roughly", value: 150, color: blue }, { label: "Magnetic trip, about", value: 10, color: red }] }
  - at: 31
    dur: 5
    vo: "Before your eyes have even closed, your circuit breaker..."
    text: ""
    visual: { kind: hero, icon: bolt, motion: float, color: red, label: "Circuit breaker" }
    note: "Loop: runs back into the hook."
```

## Fact check

- A short circuit draws many times the rated current (often hundreds of amps on a domestic circuit).
- MCBs have an instantaneous magnetic trip: a solenoid coil pulls a plunger that releases the latch mechanism; clearing typically within roughly 10 ms (half a mains cycle).
- An arc chute (stack of steel plates) splits and cools the arc so it goes out.
- A blink takes roughly 100-400 ms; 150 ms is shown as a rough figure and labelled 'roughly'.
