---
id: vid-36
title: "Your stapler has a secret second setting 📎"
series: youve-been-using-it-wrong
topic: "Stapler anvil twist"
status: ready-to-build
duration: 35.5
music: sneaky-snitch
accent: "#FF9F0A"
hashtags: [howthingswork, stapler, office, lifehack, shorts]
description: "The metal plate under a stapler often turns. One side bends staples in for keeps, the other bends them out for easy removal."
pinned: "What else have we all been using wrong?"
---

# vid-36 · Your stapler has a secret second setting 📎

## Hook

- **Chosen (0-3s):** "Your stapler has a secret second setting." Big text: A SECRET SETTING
- **Backup hooks:**
    1. "The plate under your stapler can turn."
    2. "There's a reason your stapler's base has two grooves."
    3. "Your stapler can make staples you can pull out by hand."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your stapler has a secret second setting."
    text: "A SECRET SETTING"
    highlight: "SECRET"
    visual: { kind: hero, icon: tool, motion: drop, color: steel, label: "Stapler" }
    sfx: whoosh
  - at: 3
    dur: 6.5
    vo: "Look at the metal plate under the head. That's the anvil, and on many staplers it turns."
    text: "THE ANVIL TURNS"
    highlight: "TURNS"
    visual: { kind: callout, icon: tool, color: steel, parts: ["Head with staples", "Spring pusher", "Anvil plate: turns"] }
  - at: 9.5
    dur: 6
    vo: "The staple's legs hit two curved grooves, which bend them as they come through the paper."
    text: "GROOVES BEND THE LEGS"
    highlight: "BEND"
    visual: { kind: flow, steps: [{ label: "Staple pierces paper", icon: arrow }, { label: "Legs hit the grooves", icon: tool }, { label: "Grooves curl the legs", icon: spring }] }
    sfx: thunk
  - at: 15.5
    dur: 4
    vo: "Normal setting: the legs fold inward and lock flat. That's permanent."
    text: "INWARD = PERMANENT"
    highlight: "PERMANENT"
    visual: { kind: compare, mode: versus, left: { label: "Legs fold inward", icon: lock, tag: "permanent" }, right: { label: "Legs fold outward", icon: arrow, color: accent, tag: "temporary" } }
  - at: 19.5
    dur: 3.5
    vo: "Twist the plate, and the legs fold outward instead."
    text: "TWIST IT"
    highlight: "TWIST"
    visual: { kind: cycle, icon: tool, steps: ["Press the anvil", "Twist it round", "Outward grooves face up"] }
    sfx: click
  - at: 23
    dur: 5.5
    vo: "Outward legs are easy to slide off, perfect for pinning pages for a few days."
    text: "PULL IT OUT BY HAND"
    highlight: "BY HAND"
    visual: { kind: gauge, value: 20, low: "Easy out", high: "Locked in", label: "Effort to remove" }
  - at: 28.5
    dur: 3
    vo: "No staple remover, no torn corners."
    text: "NO TORN CORNERS"
    highlight: "NO TORN"
    visual: { kind: compare, mode: wrong-right, left: { label: "Ripping it out", icon: box, tag: "torn page" }, right: { label: "Slide it out", icon: arrow, color: green, tag: "clean" } }
  - at: 31.5
    dur: 4
    vo: "Check yours. It might be hiding it too, because your stapler..."
    text: ""
    visual: { kind: hero, icon: tool, motion: float, color: steel, label: "Two settings" }
    note: "Loops into: '...has a secret second setting.'"
```

## Fact check

- Many desktop staplers have a rotating anvil with two positions: 'permanent' (clinch inward) and 'temporary' or 'pinning' (legs bent outward).
- Outward-bent staples are designed for easy removal without a staple remover.
- Not every stapler has this feature, hence 'on many staplers'.
