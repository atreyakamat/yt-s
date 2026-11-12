# Cutaway render engine

Remotion project that turns `how-things-work/batch-NN/vid-N.md` into 1080x1920 MP4s. See the [root README](../README.md) for setup and commands.

- `npm run daily`: the everyday command (next 2 reels, with voice, music and post text, into `../out/<date>/`)
- `npm run build:reel -- vid-26`: render chosen reels to `../out/`
- `npm run dev`: sync scripts and open Remotion Studio
- `npm run check`: validate every script (works before `npm install`)
- `npm run lint`: validate every script, then eslint + tsc

Visuals: `src/visuals/generic/` holds the reusable templates every new script uses (see
`../how-things-work/SCRIPT_SPEC.md`). Rules every script must pass live in `tools/validate.mjs`.
