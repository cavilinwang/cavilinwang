# Website toolkit

A Next.js starter (`site/`) plus Claude Code skills (`.claude/skills/`) for building a polished, animated website.

## What is where

| Tool | Type | Where it lives |
|---|---|---|
| react-three-fiber (+ drei, three) | npm lib | `site/components/Scene3D.tsx` |
| liquid-glass-react | npm lib | `site/components/GlassCard.tsx` |
| shadergradient | npm lib | `site/components/GradientHero.tsx` |
| liquid-logo | standalone app + `@paper-design/shaders-react` | `site/components/LiquidMark.tsx`, full source in `reference/liquid-logo/` |
| GSAP + @gsap/react | npm lib | `site/components/Reveal.tsx` |
| gsap-skills | Claude skills (8) | `.claude/skills/gsap-*` |
| impeccable | Claude skill + 4 agents | `.claude/skills/impeccable`, `.claude/agents/` |
| transitions.dev | Claude skills (3) | `.claude/skills/transitions-*` |
| make-interfaces-feel-better | Claude skill | `.claude/skills/make-interfaces-feel-better` |

## Run the site

```bash
cd site
npm install
npm run dev     # http://localhost:3000
```

## Use the skills (open Claude Code in this repo)

Skills load automatically. Ask in plain words, or call by name:

- `/impeccable` ... design direction and anti "AI look" rules. Ask: "use impeccable to polish / audit the hero".
- `/make-interfaces-feel-better` ... micro-detail pass: easing, shadows, radii, hit areas, text wrapping.
- `transitions-dev` ... copy-ready CSS transitions (modal, dropdown, icon swap). Ask: "add the modal transition to my dialog".
- `gsap-*` ... GSAP best practice. Ask: "animate the features section with a ScrollTrigger timeline".

Suggested flow: describe the page -> build with the components -> "audit with impeccable" -> "run make-interfaces-feel-better review" -> add transitions/GSAP.

## Use the libraries

- **Gradient background**: `<GradientHero />` inside a `position: relative` section. Tweak `color1-3`, `type` (`waterPlane`, `plane`, `sphere`), `uSpeed`.
- **Liquid glass**: wrap content in `<GlassCard>`. Only looks good over a colourful or image background.
- **3D**: edit `Scene3D.tsx`. Load your own model with drei `useGLTF("/model.glb")`.
- **Liquid logo**: put a transparent PNG/SVG logo in `site/public/`, then `<LiquidMark src="/logo.svg" />`. To preview a logo first, run `reference/liquid-logo` (`npm i && npm run dev`).
- **GSAP**: wrap sections in `<Reveal>`, or use `useGSAP` for custom timelines. Always honour reduced motion (already done in `Reveal`).

WebGL components must be loaded client-side only (`dynamic(..., { ssr: false })` from a `"use client"` file), as in `site/app/page.tsx`.

## Licenses
Third-party licenses are in `third-party-licenses/`. Sources: pbakaus/impeccable, greensock/gsap-skills, jakubkrehel/make-interfaces-feel-better, Jakubantalik/transitions.dev, paper-design/liquid-logo.
