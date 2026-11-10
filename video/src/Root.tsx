import React from "react";
import { Composition } from "remotion";
import reels from "./reels.generated.json";
import { Reel } from "./Reel";
import { FPS, HEIGHT, WIDTH } from "./theme";
import type { Reel as ReelData } from "./types";

// One composition per vid-xx.md. Run `npm run sync` after editing a script.
export const RemotionRoot: React.FC = () => (
  <>
    {(reels as unknown as ReelData[]).map((reel) => (
      <Composition
        key={reel.id}
        id={reel.id}
        component={Reel}
        durationInFrames={Math.round(reel.duration * FPS)}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{ reel }}
      />
    ))}
  </>
);
