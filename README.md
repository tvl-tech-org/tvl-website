# TVL Tech — Design System

> *"Singularity is near. See the unseen."*

This is the design system for **TVL Tech**, a Romanian software company working at the intersection of **artificial intelligence, blockchain, and virtual reality**. TVL builds custom software, AI systems, and Web3 / VR experiences. Their brand is bold, technical, and futurist — black surfaces, a single signal-orange accent, and condensed display type.

---

## Company context

TVL Tech describes itself (translated from the brand book):

> "TVL TECH is a company at the boundary of artificial intelligence, blockchain, and virtual reality. At TVL we explore future scenarios — probable and improbable — design systems, and try to reach directions that for now seem impossible."

**What they sell:**
- Custom software development
- AI systems (computer vision, NLP, ML, social intelligence / customer-behavior decoding)
- Blockchain & Web3 solutions
- VR / immersive

**Brand voice taglines** (from social mockups in the brand book):
- SINGULARITY IS NEAR
- SEE THE UNSEEN
- INTO THE MULTIVERSE
- AI POWERED COMPUTER VISION
- CREATING INNOVATIVE SOLUTIONS — WEB 3
- SOCIAL INTELLIGENCE — DECODE CUSTOMER BEHAVIOR WITH AI

---

## Index

```
TVL Tech Design System/
├── README.md                 ← you are here
├── colors_and_type.css       ← all CSS variables + semantic type classes
├── assets/
│   ├── logo-mark.svg            primary logo, orange
│   ├── logo-mark-black.svg      mono dark
│   ├── logo-mark-white.svg      mono light (for dark backgrounds)
│   ├── logo-horizontal.svg      horizontal lockup
│   └── pattern-grid.svg         brand pattern (logo-derived squares)
├── preview/                  ← specimen cards for each foundation
│   ├── colors-primary.html
│   ├── colors-neutrals.html
│   ├── type-display.html
│   ├── type-scale.html
│   └── ...
└── ui_kits/
    └── tvl_marketing/
        ├── index.html           landing page
        ├── Hero.jsx
        ├── ProblemSolution.jsx
        ├── Services.jsx
        ├── Testimonials.jsx
        ├── Header.jsx
        └── Footer.jsx
```

---

## Visual foundations

### Color
- **Orange `#FF4931` (Pantone 171 C)** — the *only* accent color. Used for the logo, single-word emphasis in long titles, CTA backgrounds, divider rules, and the iconic TVL chevron pattern. Treat it as a **signal**, not decoration — restrict to ~5–10% of any composition.
- **Orange-Red `#9E2D1E` (Pantone 174 C)** — deeper variant, used as a press/hover state and on warm-light surfaces.
- **Black `#000`** — the brand is dark-first. Most layouts (posters, social posts, business cards) use solid black backgrounds with white type and an orange accent square or glyph.
- **White `#FFF`** — primary foreground on dark; secondary surface for documents and folders.
- **Off-paper `#F4F2EE`** — derived warm off-white for printed/light surfaces (business cards, document folders).

### Type
- **Display: Halunke** (Elena Schneider) — used for titles and graphic elements. Italic + Regular only. Where Halunke files are not available, fall back to **Anton** (Google Fonts) as the closest free condensed all-caps match.
- **Body: Open Sans** (Steve Matteson, Google Fonts) — Regular, Italic, Bold. Used for everything that isn't a headline.
- The brand's signature treatment is **wide-tracked uppercase**: `S I N G U L A R I T Y   I S   N E A R`, `letter-spacing: 0.32em`. Use the `.type-tracked-title` class.

### Backgrounds
- Solid black is the default. White/paper is the second surface — never gradients, never glassmorphism, never glow effects in the brand book.
- The **logo-derived square pattern** (a grid of orange squares forming the chevron) is used as a hero motif on posters and stories. Repeating, geometric, never blurred. See `assets/pattern-grid.svg`.
- Photography (when used in social posts) tends to be **moody, cool-toned, technical** — circuit-board macros, abstract geometry, dark interiors with single light sources. No warm/lifestyle imagery.

### Layout
- Rectilinear and grid-driven. The logo itself is built from squares — that geometry repeats across posters, business cards, and folder graphics.
- **Generous negative space** on dark — never crowd black surfaces.
- **Clear space rule:** the logo's safety zone equals one logo-square on each side (per p.7 of the manual).
- Long titles often **wrap one word per line**, bottom-aligned, with the orange chevron mark in the opposite corner.

### Borders, radii, shadows
- **Corner radii: mostly 0.** The brand book is sharp-cornered — squares, hard edges, geometric. Use small radii (2–4px) sparingly for UI affordances (inputs, cards). Pills are fine for interactive chips.
- **Borders:** thin 1px, rarely 2px. Use `rgba(255,255,255,0.10–0.18)` on dark surfaces.
- **Shadows:** the brand book uses **none** in the official material. For UI we allow soft shadows on hovering elements only (`--shadow-soft`, `--shadow-lift`). The orange "glow" shadow is allowed only on focus rings.

### Animation
- The brand book is print-first — no motion guidance. For digital, keep motion **mechanical and crisp**:
  - `--dur-base: 220ms` with `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out) is the default.
  - **Hover:** brightness shift (orange → orange-red) or border-color change, never scale.
  - **Press:** 1–2px translateY down + slight darkening.
  - **Reveal:** simple fade + 8px translateY up. No bounces, no springs, no parallax.

### Iconography
See `ICONOGRAPHY` section below.

---

## Content fundamentals

### Voice & tone
- **Confident, technological, slightly cosmic.** The brand book leans on phrases like "Singularity is near", "See the unseen", "Into the multiverse". The vibe is "we build the future" without being playful.
- **Bilingual in practice.** Romanian for the local market and longer marketing copy; English for taglines, product names, and short visual treatments. The current website is mostly English.
- **First person plural** — "Echipa noastră", "Compania noastră", "we build". Never "I". Direct address to the reader uses **"dvs." (formal you)** in Romanian, **"you"** in English.

### Casing
- **Headlines: ALL CAPS, wide-tracked.** Almost always.
- **Section eyebrows: ALL CAPS, even wider tracking, smaller, in orange.**
- **Body copy: sentence case.** Standard.
- **Product/service names: Title Case** ("Computer Vision", "Social Intelligence").

### Punctuation
- The brand uses **stylized "i" with a dot only** (the typography in the brand book stylizes "I" as a tall rectangle with a square dot). Don't replicate this in body copy.
- Periods at the end of headlines: **rarely**. Headlines feel like statements, not sentences.
- En-dashes for ranges, em-dashes for thought breaks.

### Emoji & special chars
- **No emoji.** Not in brand book, not on website. Avoid entirely.
- **No unicode decorations** (★, ✓, →) in marketing copy. Geometric arrow/chevron is reserved for the logo itself.

### Examples (from brand book p.14)

> **DE CE TVL.TECH?**
> **Crearea Viitorului cu Tehnologii Inteligente**
>
> Compania noastră se dedică creării de soluții de ultimă oră în domeniul inteligenței artificiale, care au potențialul de a transforma afacerile și viața de zi cu zi. Echipa noastră de specialiști se concentrează pe dezvoltarea de sisteme inteligente care pot învăța, se pot adapta și evolua odată cu nevoile dvs.

English equivalent for landing pages:

> **WHY TVL.TECH?**
> **Building tomorrow with intelligent technology.**
>
> We design end-to-end software for businesses that need more than off-the-shelf. Our team specializes in AI systems that learn, adapt, and evolve with your operation — from computer vision and NLP to bespoke blockchain infrastructure.

---

## Iconography

The TVL brand book contains **no formal icon system**. Iconography in the existing marketing site is minimal — the brand leans on **typography and the chevron logomark itself** for visual punctuation rather than icons.

**Default approach:**
- **Lucide icons via CDN** (`https://unpkg.com/lucide@latest`). Stroke style, 1.5px stroke weight, monochrome. This matches the brand's clean geometric sensibility and pairs well with Open Sans.
- **Color usage:** white on dark, black on light, orange `#FF4931` only when the icon is itself the visual focus (e.g. a feature card with one icon hero-sized).
- **Sizing:** 16, 20, 24, 32, 48 — multiples of 4, no off-grid sizes.
- **Avoid:** filled icon styles, duotone, multi-color icons, emoji-as-icon, gradient icons.

The **logo chevron mark itself** is the brand's most distinctive "icon" — cropped/scaled versions of `assets/logo-mark.svg` work as a section divider, list bullet, or end-of-content mark.

---

## When to use what

| Situation | Reach for |
|---|---|
| Hero headline | `.type-display` or `.type-tracked-title` (Anton/Halunke, all caps) |
| Section eyebrow | `.type-eyebrow` (Open Sans Bold, orange, wide-tracked) |
| Body paragraphs | `.type-body` (Open Sans Regular, 16px) |
| Long-form lead | `.type-lead` (Open Sans Regular, 22px) |
| CTA button | Orange `#FF4931` background, white text, no radius, Open Sans Bold |
| Card on dark | `bg-2` background, `border-subtle` border, no shadow |
| Hover state | Brighten or shift to `--tvl-orange-red` |
