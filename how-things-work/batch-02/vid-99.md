---
id: vid-99
title: "A fastball gives the batter less than half a second ⚾"
series: the-1-second-machine
topic: "Fastball"
status: ready-to-build
duration: 38
music: hyperfun
accent: "#BF5AF2"
hashtags: [howthingswork, baseball, reactiontime, sports, shorts]
description: "A pro fastball reaches the plate in about four tenths of a second. Batters have to decide whether to swing before it's even halfway."
pinned: "What else happens in under a second?"
---

# vid-99 · A fastball gives the batter less than half a second

## Hook

- **Chosen (0-3s):** "A fastball reaches the batter in under half a second." Big text: UNDER HALF A SECOND
- **Backup hooks:**
    1. "Hitters decide to swing before the ball is halfway there."
    2. "Batters can't actually see the ball hit the bat."
    3. "Hitting a fastball should be nearly impossible."

## Scenes

```yaml
scenes:
  - at: 0
    dur: 3
    vo: "A fastball reaches the batter in under half a second."
    text: "UNDER HALF A SECOND"
    highlight: "HALF"
    visual: { kind: hero, icon: ball, motion: shake, color: white }
    sfx: whoosh
  - at: 3
    dur: 5
    vo: "A top pitcher throws around 95 miles an hour from about 60 feet away."
    text: "95 MILES AN HOUR"
    highlight: "95"
    visual: { kind: counter, to: 95, suffix: " mph", label: "a pro fastball", icon: ball }
  - at: 8
    dur: 5
    vo: "That leaves the ball only about four tenths of a second to reach the plate."
    text: "ABOUT 0.4 SECONDS"
    highlight: "0.4"
    visual: { kind: gauge, value: 40, low: "0 s", high: "1 s", label: "About 0.4 seconds" }
    sfx: thunk
  - at: 13
    dur: 5.5
    vo: "Just seeing it and reacting takes around a fifth of a second. The swing needs more."
    text: "NO TIME TO SPARE"
    highlight: "NO TIME"
    visual: { kind: bars, unit: "s", items: [{ label: "Ball's whole flight", value: 0.4, color: accent }, { label: "See and react", value: 0.2, color: orange }, { label: "The swing", value: 0.15, color: red }] }
  - at: 18.5
    dur: 4.5
    vo: "So batters decide whether to swing when the ball is barely halfway there."
    text: "DECIDE HALFWAY"
    highlight: "HALFWAY"
    visual: { kind: flow, steps: [{ label: "Ball leaves the hand", icon: ball }, { label: "Read spin and speed", icon: eye }, { label: "Swing or not?", icon: question }, { label: "Bat meets ball", icon: arrow }] }
  - at: 23
    dur: 6
    vo: "Their eyes can't even track it over the last few feet. They're predicting where it will be."
    text: "THEY PREDICT IT"
    highlight: "PREDICT"
    visual: { kind: zoom, levels: [{ label: "The pitch", icon: ball }, { label: "The batter's eyes", icon: eye }, { label: "A best guess", icon: question }] }
  - at: 29
    dur: 5
    vo: "That's why a slower pitch fools hitters. Their brain timed a ball that never arrived."
    text: "TIMING IS EVERYTHING"
    highlight: "TIMING"
    visual: { kind: compare, mode: versus, left: { label: "Fastball expected", icon: ball, tag: "Swing early" }, right: { label: "Slow pitch arrives", icon: clock, tag: "Miss" } }
  - at: 34
    dur: 4
    vo: "And it starts again on the very next pitch, because a fastball..."
    text: ""
    visual: { kind: hero, icon: ball, motion: float, color: white, label: "0.4 seconds" }
    note: "Last line runs back into the hook."
```

## Fact check

- The pitching rubber is 60 feet 6 inches from home plate; top pitchers throw around 95 mph.
- At 95 mph a pitch takes roughly 0.4 seconds to reach the plate (release point is a little closer than 60.5 ft).
- Simple visual reaction time is roughly 0.2 seconds; a big-league swing takes around 0.15 seconds, so the decision must be made early in the ball's flight.
- Studies of batters show they cannot keep their eyes on the ball over the final few feet and rely on prediction.
- Changeups work by disrupting the hitter's timing.
