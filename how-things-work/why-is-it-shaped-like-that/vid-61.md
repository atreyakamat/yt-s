---
id: vid-61
title: "Why USB-C plugs never go in upside down 🔌"
series: why-is-it-shaped-like-that
topic: "USB-C plug shape"
status: ready-to-build
duration: 37
music: pixel-peeker-polka
accent: "#64D2FF"
hashtags: [howthingswork, usb, charger, design, shorts]
description: "USB-C is symmetrical on purpose: matching contacts on both sides plus a tiny check that tells the device which way you plugged in."
pinned: "What shape should we explain next?"
---

# vid-61 · Why USB-C plugs never go in upside down

## Hook

- **Chosen (0-3s):** "This is why USB-C plugs are never upside down." Big text: NO WRONG WAY UP
- **Backup hooks:**
    1. "This plug has no wrong way in."
    2. "USB-C has contacts on both sides for a reason."
    3. "Your charger checks which way up it is."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "This is why USB-C plugs are never upside down."
    text: "NO WRONG WAY UP"
    highlight: "NO WRONG"
    visual: { kind: hero, icon: plug, motion: spin, color: accent }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "Older USB had one tongue and one right way, so most people tried it twice."
    text: "TRY, FLIP, TRY AGAIN"
    highlight: "FLIP"
    visual: { kind: compare, mode: versus, left: { label: "Old USB", icon: plug, color: grey, tag: "one way" }, right: { label: "USB-C", icon: plug, color: accent, tag: "both ways" } }
    sfx: buzz
  - at: 9
    dur: 6
    vo: "USB-C is a symmetrical oval with contacts on both the top and the bottom."
    text: "SAME BOTH SIDES"
    highlight: "BOTH SIDES"
    visual: { kind: callout, icon: plug, color: steel, parts: ["Oval shell", "Top row of pins", "Bottom row of pins"] }
    sfx: slice
  - at: 15
    dur: 5
    vo: "That's 24 pins in total, 12 on each side, mirrored."
    text: "24 PINS"
    highlight: "24"
    visual: { kind: counter, to: 24, label: "pins, 12 per side", icon: plug }
    sfx: click
  - at: 20
    dur: 7
    vo: "Special sensing pins tell the phone which way up you plugged in, and it routes the signals to match."
    text: "IT CHECKS, THEN ROUTES"
    highlight: "CHECKS"
    visual: { kind: flow, steps: [{ label: "Plug goes in", icon: plug }, { label: "Sense pin checked", icon: chip, color: accent }, { label: "Signals routed", icon: arrow }] }
  - at: 27
    dur: 6
    vo: "The same oval also carries fast data, video and much more power than old USB."
    text: "ONE PLUG, MANY JOBS"
    highlight: "MANY JOBS"
    visual: { kind: bars, unit: "W", items: [{ label: "Old USB port", value: 2.5, color: grey }, { label: "USB-C, up to", value: 240, color: accent }] }
    sfx: pop
  - at: 33
    dur: 4
    vo: "No flipping, no fumbling. That's why..."
    text: ""
    visual: { kind: hero, icon: plug, motion: float, color: accent, label: "Either way up" }
    note: "Last line runs back into the hook: This is why USB-C plugs are never upside down."
```

## Fact check

- The USB Type-C connector is rotationally symmetric with 24 pins, 12 on each side.
- Configuration Channel (CC) pins detect plug orientation and the attached device, and the system switches signal paths accordingly.
- USB-C supports USB data, alternate modes such as DisplayPort video, and USB Power Delivery at much higher wattage than classic USB-A ports. A classic USB 2.0 port supplies 5 V x 0.5 A = 2.5 W; USB Power Delivery 3.1 allows up to 240 W over USB-C.
