---
id: vid-40
title: "Your smoke alarm's test button doesn't test for smoke 🔘"
series: youve-been-using-it-wrong
topic: "Smoke alarm test button"
status: ready-to-build
duration: 36
music: sneaky-snitch
accent: "#FF9F0A"
hashtags: [lifehacks, safety, smokealarm, didyouknow, shorts]
description: "On most smoke alarms the test button checks the battery, the circuit and the horn. It's still worth pressing, and here's why."
pinned: "What else have we all been using wrong?"
---

# vid-40 · Your smoke alarm's test button doesn't test for smoke

## Hook

- **Chosen (0-3s):** "Your smoke alarm's test button doesn't test for smoke." Big text: NO SMOKE NEEDED
- **Backup hooks:**
    1. "Pressing this button doesn't make any smoke."
    2. "There's a reason this button is on your smoke alarm."
    3. "Your smoke alarm test is checking something else."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "Your smoke alarm's test button doesn't test for smoke."
    text: "NO SMOKE NEEDED"
    highlight: "SMOKE"
    visual: { kind: hero, icon: house, motion: pulse, color: accent }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "On most alarms, pressing it fakes the signal a smoke sensor would send."
    text: "A FAKE ALARM"
    highlight: "FAKE"
    visual: { kind: flow, steps: [{ label: "Button pressed", icon: arrow }, { label: "Fake smoke signal", icon: chip }, { label: "Horn sounds", icon: speaker }] }
    sfx: click
  - at: 8
    dur: 6
    vo: "So what it really checks is the battery, the circuit board and the horn."
    text: "WHAT IT CHECKS"
    highlight: "CHECKS"
    visual: { kind: callout, icon: shield, parts: ["Battery has power", "Circuit works", "Horn is loud"] }
  - at: 14
    dur: 5
    vo: "Those are the parts most likely to fail, so the test still matters."
    text: "STILL WORTH IT"
    highlight: "WORTH IT"
    visual: { kind: bars, items: [{ label: "Flat battery", value: 80, color: red }, { label: "Dusty sensor", value: 30, color: grey }] }
  - at: 19
    dur: 6
    vo: "Dust in the chamber is the other problem, which is why makers say to vacuum the vents."
    text: "DUST IS THE ENEMY"
    highlight: "DUST"
    visual: { kind: compare, mode: wrong-right, left: { label: "Blocked vents", icon: cloud }, right: { label: "Clean vents", icon: wind } }
  - at: 25
    dur: 6
    vo: "And sensors wear out with age, so most alarms carry a replace-by date on the back."
    text: "IT HAS A DATE"
    highlight: "DATE"
    visual: { kind: counter, to: 10, suffix: " yrs", label: "Typical alarm life", icon: clock }
  - at: 31
    dur: 5
    vo: "So the next time you press it, remember..."
    text: ""
    visual: { kind: hero, icon: speaker, motion: shake, label: "Beep" }
    note: "Last line runs back into the hook."
```

## Fact check

- Smoke alarm test button checks power, electronics and horn; NFPA has required replacing smoke alarms after 10 years since 1999. OK. Source: https://en.wikipedia.org/wiki/Smoke_detector
