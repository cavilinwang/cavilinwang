"use client";
// GSAP + ScrollTrigger scroll reveal. useGSAP handles cleanup in React (see .claude/skills/gsap-react).
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(ref.current, { autoAlpha: 0, y: 40 }, {
        autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
      });
    });
    mm.add("(prefers-reduced-motion: reduce)", () => { gsap.set(ref.current, { autoAlpha: 1 }); });
  }, { scope: ref });
  return <div ref={ref} className="reveal content">{children}</div>;
}
