---
id: vid-95
title: "Your card pays in about half a second 💳"
series: the-1-second-machine
topic: "Contactless payment"
status: ready-to-build
duration: 38
music: hyperfun
accent: "#BF5AF2"
hashtags: [howthingswork, contactless, payments, tech, shorts]
description: "A contactless card has no battery. The reader powers it by radio, and the chip makes a one-time code in about half a second."
pinned: "What else happens in under a second?"
---

# vid-95 · Your card pays in about half a second 💳

## Hook

- **Chosen (0-3s):** "Your card pays in about half a second." Big text: HALF A SECOND
- **Backup hooks:**
    1. "Your bank card has no battery but it still talks."
    2. "There's a hidden coil in your bank card."
    3. "Every tap makes a brand new code."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your card pays in about half a second."
    text: "HALF A SECOND"
    highlight: "HALF"
    visual: { kind: hero, icon: card, color: accent, motion: pulse }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "The terminal makes a radio field. Bring your card within a few centimetres and it wakes up."
    text: "WAKE UP, CARD"
    highlight: "WAKE"
    visual: { kind: wave, waves: [{ label: "Reader's radio field", freq: 8, color: accent }] }
  - at: 9
    dur: 6
    vo: "There's no battery. A coil of wire around the card's edge harvests power from that field."
    text: "POWERED BY RADIO"
    highlight: "RADIO"
    visual: { kind: zoom, levels: [{ label: "Card", icon: card }, { label: "Hidden coil", icon: coil }, { label: "Chip", icon: chip, color: accent }] }
  - at: 15
    dur: 6
    vo: "The chip creates a one-time code for this payment, so copied data can't be reused."
    text: "ONE-TIME CODE"
    highlight: "ONE-TIME"
    visual: { kind: compare, mode: versus, left: { label: "Old stripe", icon: card, tag: "Same every time" }, right: { label: "Chip", icon: chip, color: accent, tag: "New code per tap" } }
  - at: 21
    dur: 6
    vo: "All of that has to finish in about half a second, so you barely pause your hand."
    text: "500 MILLISECONDS"
    highlight: "500"
    visual: { kind: counter, to: 500, label: "milliseconds, card to reader", icon: clock, prefix: "~", suffix: " ms" }
  - at: 27
    dur: 6
    vo: "Then the terminal checks with your bank, and the beep tells you it's done."
    text: "BEEP!"
    highlight: "BEEP"
    visual: { kind: flow, steps: [{ label: "Card answers", icon: card }, { label: "Terminal asks the bank", icon: globe }, { label: "Beep: approved", icon: bulb, color: green }] }
    sfx: pop
  - at: 33
    dur: 5
    vo: "The range is only a few centimetres, on purpose. And still..."
    text: ""
    visual: { kind: gauge, value: 10, low: "Touching", high: "Far away", label: "Works within a few cm" }
    note: "Last line runs back into the hook: 'Your card pays in about half a second.'"
```

## Fact check

- Contactless (EMV/NFC) cards have no battery; an antenna coil around the card picks up energy from the reader's 13.56 MHz field, and range is a few centimetres.
- Each contactless transaction includes a one-time cryptogram, so captured data can't simply be replayed (unlike a magnetic stripe).
- EMV contactless specifications target a card-reader interaction of around 500 ms; online authorisation with the bank follows.
