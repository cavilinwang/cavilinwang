# Website rules

Next.js site lives in `site/`. Components are in `site/components`; reuse them before writing new ones.

- For any UI work, use the impeccable skill first for design direction.
- Animate with GSAP (see the gsap-* skills). Use transitions-dev for menus, modals and hovers.
- Before finishing UI work, run make-interfaces-feel-better and fix what it finds.
- Always respect `prefers-reduced-motion`.
- WebGL components (shadergradient, react-three-fiber) must load client-side only: `dynamic(..., { ssr: false })` from a `"use client"` file.
- Run `cd site && npm run build` before finishing and fix errors.
- Master build prompt: `docs/WEBSITE_PROMPT.md`.
