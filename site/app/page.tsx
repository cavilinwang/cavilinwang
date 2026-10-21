"use client";
import dynamic from "next/dynamic";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import PromptBox from "@/components/PromptBox";

// WebGL components must not render on the server.
const GradientHero = dynamic(() => import("@/components/GradientHero"), { ssr: false });
const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });

export default function Home() {
  return (
    <main>
      <section>
        <GradientHero />
        <div className="content">
          <GlassCard>
            <h1>Your headline</h1>
            <p>Shader gradient behind, liquid glass in front. Replace this copy.</p>
            <button className="btn">Get started</button>
          </GlassCard>
        </div>
      </section>
      <section>
        <GradientHero />
        <div className="content">
          <h2>Ask anything</h2>
          <PromptBox />
        </div>
      </section>
      <section>
        <Scene3D />
        <Reveal>
          <h2>Interactive 3D</h2>
          <p>Drag the shape. Built with react-three-fiber and drei.</p>
        </Reveal>
      </section>
    </main>
  );
}
