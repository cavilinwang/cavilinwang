"use client";
// liquid-glass-react: Apple-style liquid glass. Place it over something colourful (the gradient).
import LiquidGlass from "liquid-glass-react";

export default function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <LiquidGlass displacementScale={64} blurAmount={0.1} saturation={130} aberrationIntensity={2} elasticity={0.2} cornerRadius={32}>
      <div style={{ padding: "2rem 2.5rem", display: "grid", gap: "0.75rem" }}>{children}</div>
    </LiquidGlass>
  );
}
