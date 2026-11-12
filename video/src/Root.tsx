import React from "react";
import { Composition, Still } from "remotion";
import { Avatar, Banner, Watermark } from "./brand/Brand";
import reels from "./reels.generated.json";
import { Reel } from "./Reel";
import { FPS, HEIGHT, WIDTH } from "./theme";
import type { Reel as ReelData } from "./types";

// One composition per vid-xx.md. Run `npm run sync` after editing a script.
// Plus the brand stills (see BRAND.md): brand-avatar, brand-banner, brand-watermark.
export const RemotionRoot: React.FC = () => (
  <>
    <Still id="brand-avatar" component={Avatar} width={800} height={800} />
    <Still id="brand-banner" component={Banner} width={2560} height={1440} />
    <Still id="brand-watermark" component={Watermark} width={150} height={150} />
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
