import React from "react";
import { theme } from "../theme";

/** Shown for a visual kind that hasn't been built yet, so drafts still render end to end. */
export const Placeholder: React.FC<{ label?: string; note?: string }> = ({
  label,
  note,
}) => (
  <div
    style={{
      position: "absolute",
      top: 620,
      left: 120,
      right: 160,
      height: 560,
      border: `4px dashed ${theme.muted}`,
      borderRadius: 32,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 48,
      fontFamily: theme.font,
      color: theme.muted,
      textAlign: "center",
    }}
  >
    <div style={{ fontSize: 56, fontWeight: 800, color: theme.text }}>
      VISUAL: {label ?? "todo"}
    </div>
    <div style={{ fontSize: 34, marginTop: 24 }}>{note}</div>
  </div>
);
