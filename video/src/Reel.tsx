import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";
import { Background } from "./components/Background";
import { Captions } from "./components/Captions";
import { OnScreenText } from "./components/OnScreenText";
import { KeyGrid } from "./visuals/KeyGrid";
import { Lock } from "./visuals/Lock";
import { Placeholder } from "./visuals/Placeholder";
import { theme } from "./theme";
import type { Reel as ReelData, Scene } from "./types";

loadFont("normal", { weights: ["600", "800", "900"], subsets: ["latin"] });

const SceneVisual: React.FC<{ scene: Scene }> = ({ scene }) => {
  const v = scene.visual;
  switch (v.kind) {
    case "lock":
      return <Lock state={v.state} keyIn={v.keyIn} camera={v.camera} />;
    case "key-grid":
      return <KeyGrid />;
    default:
      return <Placeholder label={v.label} note={v.note} />;
  }
};

export const Reel: React.FC<{ reel: ReelData }> = ({ reel }) => {
  const { fps } = useVideoConfig();
  const accent = reel.accent ?? theme.accent;
  // Music sits under the voice; louder when there is no voiceover yet.
  const musicVolume = (reel.musicVolume ?? 0.12) * (reel.assets.vo ? 1 : 2.5);

  return (
    <AbsoluteFill style={{ backgroundColor: theme.bg }}>
      <Background />
      {reel.scenes.map((scene, i) => (
        <Sequence key={i} from={Math.round(scene.at * fps)} durationInFrames={Math.round(scene.dur * fps)} name={`${i + 1}. ${scene.text || "loop"}`}>
          <SceneVisual scene={scene} />
          <OnScreenText text={scene.text} highlight={scene.highlight} accent={accent} />
          <Captions vo={scene.vo} accent={accent} />
          {scene.sfx && reel.assets.sfx.includes(scene.sfx) && <Audio src={staticFile(`sfx/${scene.sfx}.mp3`)} volume={0.6} />}
        </Sequence>
      ))}
      {reel.assets.vo && <Audio src={staticFile(`vo/${reel.id}.mp3`)} />}
      {reel.music && reel.assets.music && <Audio src={staticFile(`music/${reel.music}.mp3`)} volume={musicVolume} loop />}
    </AbsoluteFill>
  );
};
