---
id: vid-90
title: "A match lights faster than you can blink 🔥"
series: the-1-second-machine
topic: "Safety match"
status: ready-to-build
duration: 41
music: hyperfun
accent: "#BF5AF2"
hashtags: [howthingswork, chemistry, match, fire, shorts]
description: "A safety match splits its chemistry between the head and the box. One strike sets off a chain that finishes in a split second."
pinned: "What else happens in under a second?"
---

# vid-90 · A match lights faster than you can blink

## Hook

- **Chosen (0-3s):** "A match lights in less time than a blink." Big text: FASTER THAN A BLINK
- **Backup hooks:**
    1. "Half of your match is on the box."
    2. "Why safety matches only light on their own box."
    3. "A spark of phosphorus starts every match."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "A match lights in less time than a blink."
    text: "FASTER THAN A BLINK"
    highlight: "BLINK"
    visual: { kind: hero, icon: flame, motion: drop, color: orange, label: "Safety match" }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "The trick is split in two. Half is on the stick, half on the box."
    text: "SPLIT IN TWO"
    highlight: "TWO"
    visual: { kind: compare, mode: versus, left: { label: "Match head", icon: flame, tag: "Chlorate, sulfur" }, right: { label: "Strip on the box", icon: box, tag: "Red phosphorus" } }
    sfx: slice
  - at: 8
    dur: 6
    vo: "Strike it, and friction against powdered glass heats a speck of red phosphorus."
    text: "FRICTION HEAT"
    highlight: "FRICTION"
    visual: { kind: flow, steps: [{ label: "Strike on the strip", icon: arrow }, { label: "Glass grit makes heat", icon: flame }, { label: "Phosphorus flashes", icon: star }] }
  - at: 14
    dur: 6
    vo: "A tiny bit turns into white phosphorus, which bursts into flame in air."
    text: "WHITE PHOSPHORUS"
    highlight: "WHITE"
    visual: { kind: zoom, levels: [{ label: "Striking strip", icon: box }, { label: "A grain of phosphorus", icon: molecule }, { label: "Flash of white phosphorus", icon: star }] }
    sfx: click
  - at: 20
    dur: 6
    vo: "That flash sets off the head. Chlorate releases oxygen and the sulfur burns hot."
    text: "THE HEAD FLARES"
    highlight: "FLARES"
    visual: { kind: callout, icon: flame, parts: ["Chlorate: gives oxygen", "Sulfur: easy fuel", "Glue holds it together"] }
    sfx: pop
  - at: 26
    dur: 5
    vo: "Then the wax-soaked stick takes over and keeps the flame going."
    text: "WAX-SOAKED STICK"
    highlight: "WAX"
    visual: { kind: layers, items: [{ label: "Flame", color: orange }, { label: "Match head", color: red }, { label: "Wax-soaked wood", color: brown }] }
  - at: 31
    dur: 6
    vo: "Strip, spark, head, wood. The first three happen in a split second."
    text: "A SPLIT SECOND"
    highlight: "SPLIT"
    visual: { kind: timeline, events: [{ year: "Strike", label: "Grit heats the phosphorus" }, { year: "Spark", label: "Head flares up" }, { year: "Under 1 s", label: "Wood starts burning" }] }
  - at: 37
    dur: 4
    vo: "Which is why it feels like..."
    text: ""
    visual: { kind: hero, icon: flame, motion: pulse, color: orange, label: "Strike!" }
    note: "Loops into the hook: '...a match lights in less time than a blink.'"
```

## Fact check

- Safety match heads contain potassium chlorate, sulfur, binder and filler; the striking strip contains red phosphorus and powdered glass.
- Friction converts a little red phosphorus to white phosphorus, which ignites in air and lights the head.
- Match splints are commonly impregnated with paraffin wax so the flame carries to the wood.
- The strike-to-flare sequence takes a fraction of a second; a blink lasts roughly 0.1-0.4 s.
