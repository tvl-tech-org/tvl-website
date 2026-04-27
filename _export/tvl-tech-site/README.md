# TVL Tech — Marketing UI Kit

A hi-fi, click-thru recreation of a redesigned **tvl.tech** landing page, built on the brand foundations in `../../colors_and_type.css` and `../../README.md`.

## What's here

| File | Purpose |
|---|---|
| `index.html` | Composes the full page; loads React + Babel + each component via `<script type="text/babel">` |
| `App.jsx` | Top-level layout + contact modal state |
| `Header.jsx` | Sticky top navigation with primary CTA |
| `Hero.jsx` | Black hero, "We solve problems with software." + chevron pattern |
| `ProblemSolution.jsx` | Four problem→solution rows, the page's center of gravity |
| `Process.jsx` | "Listen / Build / Ship" three-up on warm paper |
| `Testimonials.jsx` | Carousel of four client quotes, dark with chevron pattern accent |
| `CTA.jsx` | Final orange "Tell us your problem." panel |
| `Footer.jsx` | Studio / Capabilities / Contact + tagline |
| `ContactModal.jsx` | Two-step contact form (form → confirmation) |

## Interactions

- **Header / hero / CTA buttons** open the contact modal.
- **ProblemSolution rows** highlight on hover.
- **Testimonials** has prev/next arrows, dot indicators, and click-to-jump bars.
- **Contact modal** has a working form with a confirmation state.

## Notes

- Asset references in components use `assets/...` to resolve from project root.
- Display type uses **Anton** (Google Fonts) as a fallback for **Halunke**; see root README for details.
