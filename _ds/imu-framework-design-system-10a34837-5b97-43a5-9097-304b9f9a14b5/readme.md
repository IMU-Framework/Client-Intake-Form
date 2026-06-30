# IMU Framework Design — Design System

> **IMU Framework Design / 一畝框作設計**
> DATA · 2D · 3D · 跨維度設計顧問服務
> *(Cross-dimensional design consulting services)*

IMU Framework Design (一畝框作有限公司) is a Taiwan-based design consultancy
operating at the intersection of **data, 2D, and 3D** — "cross-dimensional"
design services. The brand reads as architectural, precise, and minimal: a
single monoline mark, one confident blue, and a lot of disciplined white space.

- **Studio:** 一畝框作有限公司 (Uniform / IMU Framework Co., Ltd.) — Business ID 83777294
- **Contact:** 簡宛昱 Ivia Chien · imuchien@gmail.com · 0911-026-175
- **Location:** 325 桃園市龍潭區民治路126號3樓之六 (Longtan, Taoyuan, Taiwan)

## Copyright & legal
- **Standard notice:** `© 2026 一畝框作有限公司 · IMU Framework Design`
- Set in **IBM Plex Mono**, `--text-subtle`, 11px, wide tracking — use as a brief
  footer on product surfaces (above a `--border-hairline` top rule).
- Available as a token: `--imu-copyright` (in `tokens/colors.css`), usable via
  `content: var(--imu-copyright)` on a `::before`/`::after` pseudo-element.

## Source materials provided
The system was built from the brand asset pack uploaded to this project
(`uploads/`): the primary logo banner (`banner.png` / `banner.svg`), the icon
mark (`box.png` / `box.svg`), four lockup variants (`Version 2-1…2-4`, black /
white / blue / circle badge), a white logo, and the bilingual name card
(`IMU000_namecard_address-Ivia.png`). No codebase, Figma file, or live product
was supplied — the system therefore documents the **brand identity** and a
plausible, on-brand product surface, rather than recreating an existing app.
All colors and type observations below are sampled directly from those assets.

---

## The mark

The logomark is a single continuous **monoline** drawing: an open, bracketed
square frame (a "畝/frame") enclosing a **+**, with a tall stylized **1** stroke
breaking out of the top-right corner. It reads as *"frame + 1"* — adding a
dimension. It is always drawn in one stroke weight, with squared/clipped
terminals and near-square geometry. Lockups: black-on-white, white-on-dark, a
solid-blue version, and a circular badge (black or blue fill, white mark).

Asset files live in `assets/` (SVG preferred for scaling; PNG fallbacks present).

---

## CONTENT FUNDAMENTALS

How IMU writes and labels things.

- **Bilingual, EN-led, ZH-anchored.** The English name leads ("IMU Framework
  Design"); the Chinese name (一畝框作設計) anchors and grounds it. Taglines and
  service descriptors are frequently Traditional Chinese.
- **Tone:** quiet, precise, confident. Architectural and understated — never
  loud, never salesy, no exclamation marks. The brand lets whitespace and a
  single accent do the talking.
- **Casing:** Title Case for names and headings; lowercase for body. Mono
  **overlines / labels are UPPERCASE with wide tracking** (e.g. `DATA · 2D · 3D`).
- **Voice / person:** institutional third-person and noun phrases for service
  copy ("跨維度設計顧問服務", "design consulting"). When addressing a client
  directly, warm and direct ("we" the studio, "you/your project").
- **Separators:** the middle dot **·** is a signature connective —
  `DATA · 2D · 3D`, `0911-026-175 · imuchien@gmail.com`. Use it to join peers.
- **Stylization:** the **A is occasionally drawn as Λ** (crossbar-less) in
  display contexts — `DΛTΛ`. Use sparingly, for the data wordmark only.
- **Numerals:** plain, unembellished. Phone, business ID, and addresses are
  shown as-is.
- **Emoji:** **none.** The brand never uses emoji. Iconography is monoline line
  icons or the mark itself.
- **Vibe:** a precise studio that frames problems and adds the missing
  dimension. Think architect's drawing set, not a tech startup.

---

## VISUAL FOUNDATIONS

### Color
- **Monochrome + one blue.** The palette is overwhelmingly black, white, and
  cool neutral gray, activated by a single **deep indigo blue `#2F4A9C`**
  (`--imu-blue-600`, sampled from the badge). This is the only saturated color
  the brand needs.
- **Periwinkle `#AEB6D7`** (`--imu-peri-300`, sampled from the name-card
  tagline) is the muted secondary — used for de-emphasized text and soft fills.
- Pure black `#000` is reserved for the **logo** and maximum-contrast moments;
  body text uses near-black ink `#14161c`.
- Backgrounds are **white or near-white** (`--imu-neutral-50`). No gradients,
  no color washes. Imagery, if used, is cool/neutral or duotoned toward the
  brand blue — never warm.

### Typography
- **Display & UI: Poppins** — a geometric monoline sans matching the wordmark
  (round `o`, pointed `M` apex to baseline, single-story `a`/`g`). *Substitution
  flag: the exact licensed wordmark font was not supplied; Poppins is the nearest
  Google Fonts match. See "Font substitution" below.*
- **Chinese: Noto Sans TC** — clean Hei companion for Traditional Chinese.
- **Mono: IBM Plex Mono** — for `DATA`, specs, coordinates, overlines, and
  technical labels. Reinforces the data/measurement side of the brand.
- Display headings are tight (`--ls-display: -0.02em`); mono overlines track
  wide (`--ls-overline: 0.18em`) and are UPPERCASE.

### Geometry, borders & shadows
- **Monoline is the system's DNA.** Structure is drawn with crisp **1–1.5px
  lines**, not heavy fills or deep shadows. The logo's stroke weight (`--border-w-bold`)
  echoes through dividers, frames, and outlined buttons.
- **Radii are small** — 3–10px (`--radius-sm`…`--radius-lg`). The brand is
  near-square; avoid pill-shaped everything. Pills are reserved for tags/badges.
- **Shadows are soft, cool-tinted, low-spread** (`--shadow-sm`…`--shadow-lg`).
  Cards prefer a **1px hairline border + faint shadow** over a big drop shadow.
- **Cards:** white surface, `--radius-md`, `--border-hairline` border, optional
  `--shadow-sm`. Clean, drawn, architectural.

### Backgrounds & layout
- Full-bleed white with generous margins. The mark or a single line motif may
  anchor a corner. No repeating textures, no patterns, no grain.
- Layout is **grid-disciplined and airy** on a 4px base (`--space-*`). Whitespace
  is a primary material — let elements breathe.

### Motion & states
- **Measured, no bounce.** Transitions use a geometric ease
  (`--ease-standard`) at 120–320ms. Fades and short translations only.
- **Hover:** darken the blue one step (`--action-primary-hover`) or shift a
  neutral surface to `--surface-muted`; outlined elements fill faintly.
- **Press:** one more step darker (`--action-primary-active`); optional 1px
  nudge. No large scale changes.
- **Focus:** 3px soft blue ring (`--shadow-focus`) — always visible, never
  removed.

---

## ICONOGRAPHY

- **Style:** thin, geometric, monoline **line icons** with squared joins —
  visually consistent with the logo's single-weight stroke. Filled icons are
  avoided; when emphasis is needed, the blue stroke carries it.
- **No emoji, ever.** No multicolor icon sets. No 3D/skeuomorphic glyphs.
- **No icon font or sprite was supplied** in the brand pack. The system uses
  **[Lucide](https://lucide.dev)** (1.5–2px stroke, rounded-square joints) as
  the closest match to the brand's monoline language, linked from CDN.
  *Substitution flag — swap for a bespoke set if the studio adopts one.*
- The **logomark itself** (`assets/logo-mark.svg`) doubles as an avatar / badge
  / favicon and is the brand's signature "icon."
- The middle-dot **·** is used as a typographic connective, not an icon.

---

## Font substitution — ACTION NEEDED
The licensed wordmark font was not included in the asset pack. The system ships
**Poppins** (Google Fonts) as the closest geometric-monoline match. If IMU has a
specific brand typeface (e.g. a Futura/Avenir/Gotham-class face), please supply
the font files and we'll swap `--font-display` / `--font-sans` and update
`tokens/fonts.css`.

---

## Index / manifest

Root
- `styles.css` — global entry point (import this). Imports the token files only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front matter for use in Claude Code.

`tokens/`
- `fonts.css` — webfont loading (Poppins, Noto Sans TC, IBM Plex Mono).
- `colors.css` — brand blue + periwinkle + neutral scales, semantic aliases.
- `typography.css` — families, scale, weights, line-height, tracking.
- `spacing.css` — 4px spacing scale, containers, gutters.
- `effects.css` — radii, border widths, shadows, motion.

`assets/` — logo lockups (SVG + PNG): banner, mark, blue mark, white mark,
black/blue circle badges, white banner, and the bilingual name card.

`components/core/` — the ten reusable React primitives (Avatar, Badge, Button,
Card, Divider, IconButton, Input, Logo, Overline, Tag), each with a `.d.ts`
contract, `.prompt.md` usage note, and a shared `core.card.html` specimen page.

`ui_kits/studio-site/` — high-fidelity recreation of the IMU studio marketing
site (the most plausible product surface from the brand pack). This is a
**reference screen** only: it predates templates and is kept for illustration.
Consuming projects start from `templates/` (below), not from a starting point —
`@startingPoint` tags are legacy and are no longer offered to consumers.

`templates/studio-page/` — the copy-to-start **Studio Landing Page** template
(`StudioPage.dc.html`), the supported entry point for new pages. It loads the
system via `ds-base.js` and composes the core components (header, hero,
services). Consuming projects open and edit it directly. Add further templates
as sibling `templates/<slug>/` folders, each with a PascalCase `.dc.html` entry
and an `<!-- @template … -->` first line.

Foundation specimen cards (Type / Colors / Spacing / Brand groups) live as
`*.card.html` files in `guidelines/` and render in the Design System tab.

---

*Last refreshed: June 2026. The `Logo` component coerces numeric string heights
(e.g. `height="30"`) to pixel values, so lockups size correctly from markup
attributes.*
