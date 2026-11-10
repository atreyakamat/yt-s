---
id: vid-92
title: "Your Bluetooth jumps channel 1,600 times a second"
series: the-1-second-machine
topic: "Bluetooth"
status: ready-to-build
duration: 42
music: hyperfun
accent: "#BF5AF2"
hashtags: [bluetooth, howthingswork, wireless, tech, radio, shorts]
description: "Classic Bluetooth hops between 79 radio channels 1,600 times a second, and both devices hop in perfect step."
pinned: "What else happens in under a second?"
---

# vid-92 · Your Bluetooth jumps channel 1,600 times a second

## Hook

- **Chosen (0-3s):** "Bluetooth changes channel 1,600 times a second." Big text: 1,600 HOPS A SECOND
- **Backup hooks:**
    1. "Your headphones change radio channel 1,600 times a second."
    2. "Bluetooth never stays on one channel."
    3. "Two devices, one secret dance pattern."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Bluetooth changes channel 1,600 times a second."
    text: "1,600 HOPS A SECOND"
    highlight: "1,600"
    visual: { kind: hero, icon: antenna, motion: pulse, color: accent, label: "Bluetooth" }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "It talks on the same busy radio band as Wi-Fi and microwave ovens."
    text: "A CROWDED BAND"
    highlight: "CROWDED"
    visual: { kind: wave, waves: [{ label: "Wi-Fi", freq: 6, color: blue }, { label: "Bluetooth", freq: 7, color: accent }] }
  - at: 9
    dur: 6
    vo: "So classic Bluetooth splits that band into 79 narrow channels."
    text: "79 CHANNELS"
    highlight: "79"
    visual: { kind: grid, icon: wave, count: 40, highlight: 1, label: "Many narrow channels" }
  - at: 15
    dur: 6
    vo: "It sends a tiny slice of data, then jumps to another channel."
    text: "SEND, THEN JUMP"
    highlight: "JUMP"
    visual: { kind: cycle, icon: antenna, steps: ["Send a slice", "Jump channel", "Send again", "Jump again"] }
    sfx: click
  - at: 21
    dur: 5
    vo: "That's one hop every 625 millionths of a second."
    text: "625 MICROSECONDS"
    highlight: "625"
    visual: { kind: counter, to: 1600, label: "hops every second", icon: clock }
  - at: 26
    dur: 6
    vo: "Both devices know the same hop pattern, so they always land together."
    text: "SAME PATTERN"
    highlight: "SAME"
    visual: { kind: compare, mode: versus, left: { label: "Speaker", icon: speaker, color: accent, tag: "hop 12, 40, 7" }, right: { label: "Laptop", icon: screen, color: accent, tag: "hop 12, 40, 7" } }
  - at: 32
    dur: 6
    vo: "If one channel is noisy, the next hop is already somewhere quieter."
    text: "DODGE THE NOISE"
    highlight: "DODGE"
    visual: { kind: flow, steps: [{ label: "Channel busy", icon: bolt, color: red }, { label: "Hop away", icon: arrow }, { label: "Clear channel", icon: wave, color: green }] }
  - at: 38
    dur: 4
    vo: "All while you blink, because Bluetooth..."
    text: ""
    visual: { kind: hero, icon: antenna, motion: float, color: accent, label: "Always hopping" }
    note: "Loops into: changes channel 1,600 times a second."
```

## Fact check

- Classic Bluetooth (BR/EDR) uses 79 channels of 1 MHz in the 2.4 GHz ISM band and hops 1,600 times per second (625 µs slots).
- The 2.4 GHz band is shared with Wi-Fi and microwave ovens.
- The hop sequence is derived from the central device's address and clock, which both devices know.
- Adaptive frequency hopping can avoid busy channels. Bluetooth Low Energy uses 40 channels; the script says 'classic Bluetooth' for the 79 figure.
