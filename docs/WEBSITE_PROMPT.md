# Master prompt for building the website

Paste into Claude Code (opened in this repo). Fill the [brackets].

```
Build the website for [BRAND], which [WHAT IT DOES] for [AUDIENCE].
Goal of the site: get visitors to [ONE ACTION, e.g. book a call].
Tone: [e.g. calm, confident, plain words]. Palette: [colours or "pick one that fits"].

Work in site/ (Next.js). Use what is already installed:
- GradientHero (shadergradient) for the hero background
- GlassCard (liquid-glass-react) for the headline card
- PromptBox for the interactive prompt input
- Scene3D (react-three-fiber) for one 3D moment, only if it supports the story
- Reveal (GSAP ScrollTrigger) for scroll reveals; respect prefers-reduced-motion
- LiquidMark for my logo at /logo.svg

Pages/sections: hero, proof (logos or numbers), 3 benefits, how it works,
testimonial, pricing or offer, FAQ, final call to action, footer.

Process:
1. Use the impeccable skill to set the design direction first and avoid generic AI-looking UI.
2. Build mobile-first, accessible (contrast, focus states, 44px tap targets).
3. Apply transitions-dev for menus, modals and hovers; GSAP only for scroll sequences.
4. Finish with make-interfaces-feel-better (quick review) and impeccable audit; fix what they find.
5. Run npm run build and fix errors. Summarize what you changed.

Keep copy short: one idea per screen, no filler words.
```
