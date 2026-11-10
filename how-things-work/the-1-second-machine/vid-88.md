---
id: vid-88
title: "Your toilet flush is a siphon switched on in an instant 🌀"
series: the-1-second-machine
topic: "Toilet siphon flush"
status: ready-to-build
duration: 38
music: hyperfun
accent: "#BF5AF2"
hashtags: [howthingswork, toilet, physics, siphon, shorts]
description: "A flush dumps water so fast that the toilet's trap fills solid, and a siphon pulls the bowl empty."
pinned: "What else happens in under a second?"
---

# vid-88 · Your toilet flush is a siphon switched on in an instant

## Hook

- **Chosen (0-3s):** "Your toilet flush is a siphon switched on instantly." Big text: AN INSTANT SIPHON
- **Backup hooks:**
    1. "Pour a bucket slowly and your toilet won't flush."
    2. "That gurgle at the end of a flush is air breaking a siphon."
    3. "Your toilet empties itself with a siphon."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your toilet flush is a siphon switched on instantly."
    text: "AN INSTANT SIPHON"
    highlight: "SIPHON"
    visual: { kind: hero, icon: water, label: "Toilet flush", color: blue, motion: drop }
    sfx: whoosh
  - at: 3
    dur: 6
    vo: "A flush dumps water into the bowl faster than the drain can normally take it."
    text: "A SUDDEN RUSH"
    highlight: "RUSH"
    visual: { kind: flow, steps: [{ label: "Cistern dumps water", icon: water }, { label: "Bowl level rises", icon: arrow }, { label: "Water tops the bend", icon: pipe }] }
  - at: 9
    dur: 6
    vo: "The water climbs over the hump in the trap and fills the pipe beyond it."
    text: "THE PIPE FILLS"
    highlight: "FILLS"
    visual: { kind: callout, icon: pipe, parts: ["Bowl", "Hump in the trap", "Pipe fills solid"] }
  - at: 15
    dur: 6
    vo: "The moment that pipe runs full, the falling water drags the rest of the bowl after it."
    text: "SIPHON ON"
    highlight: "SIPHON"
    visual: { kind: zoom, levels: [{ label: "Full pipe", icon: pipe }, { label: "Falling water", icon: drop }, { label: "Bowl pulled empty", icon: arrow }] }
    sfx: whoosh
  - at: 21
    dur: 6
    vo: "A slow pour wouldn't do it. It's the sudden rush that switches the siphon on."
    text: "SPEED IS THE TRICK"
    highlight: "SPEED"
    visual: { kind: compare, mode: versus, left: { label: "Slow pour", icon: drop, color: grey, tag: "Just overflows" }, right: { label: "Sudden rush", icon: water, color: accent, tag: "Siphon starts" } }
  - at: 27
    dur: 6
    vo: "When air finally gets into the pipe, the siphon breaks with that famous gurgle."
    text: "THE GURGLE"
    highlight: "GURGLE"
    visual: { kind: cycle, icon: water, steps: ["Rush in", "Pipe fills", "Siphon pulls", "Air breaks it"] }
  - at: 33
    dur: 5
    vo: "Then the bowl refills and resets the seal. Because your toilet flush..."
    text: ""
    visual: { kind: hero, icon: water, label: "Siphon flush", color: blue, motion: float }
    note: "Last line runs back into the hook."
```

## Fact check

- Siphonic flushing → in most toilets the rush of water fills the trapway, starting a siphon that pulls the bowl contents down the drain.
- Speed matters → pouring a bucket of water quickly flushes a toilet; pouring slowly just raises the level and spills over the weir.
- Gurgle → when the bowl empties, air enters the trapway and breaks the siphon, making the characteristic gurgle.
- Refill resets the seal → the bowl refill tube tops the trap back up.
