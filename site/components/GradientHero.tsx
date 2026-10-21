"use client";
// @shadergradient/react: animated 3D gradient background (runs on react-three-fiber).
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function GradientHero() {
  return (
    <ShaderGradientCanvas style={{ position: "absolute", inset: 0 }} pointerEvents="none">
      <ShaderGradient
        type="waterPlane"
        color1="#5b3cff" color2="#ff5fa2" color3="#00d2ff"
        animate="on" uSpeed={0.2} uStrength={3} uDensity={1.2}
        cDistance={3.6} cPolarAngle={90} grain="on"
      />
    </ShaderGradientCanvas>
  );
}
