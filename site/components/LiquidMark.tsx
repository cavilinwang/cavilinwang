"use client";
// Same effect as the liquid-logo repo, via the @paper-design/shaders-react package.
// `image` must be a logo with a transparent background (PNG/SVG). See reference/liquid-logo for the full tool.
import { LiquidMetal } from "@paper-design/shaders-react";

export default function LiquidMark({ src, size = 320 }: { src: string; size?: number }) {
  return <LiquidMetal image={src} style={{ width: size, height: size }} speed={0.5} />;
}
