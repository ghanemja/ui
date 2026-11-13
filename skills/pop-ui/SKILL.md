---
name: pop-ui
description: Build UI in the "Pop" style — neo-brutalist pop with ink outlines, hard offset shadows, a hot orange accent and pastel fills (Bricolage Grotesque / Figtree / DM Mono). Use when the user asks for the Pop style, the YarnFlow/crochet or pptgpt look, "neo-brutalist", "bold playful tool UI", or names pop.css / pop-* classes. Covers web apps, tools, dashboards, landing pages, editors.
---

# Pop UI

A friendly, chunky, tactile look for **tools people make things with**: every surface has a 2px ink
outline and a hard (un-blurred) offset shadow, buttons are fat pills that press *into* the page, one hot
accent does the shouting, and pastels (butter, pink, mint, sky, lilac) colour-code everything else.
Source sites: YarnFlow (crochet pattern → 3D) and pptgpt (deck builder, "bolt" theme).

## 1 · Install

Pick one. The stylesheet pulls its own Google Fonts.

```html
<!-- CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ghanemja/ui@main/skills/pop-ui/pop.css">
```

Or copy `pop.css` (next to this file) into the project and link it. Then put `class="pop"` on `<body>`
(or on the app root). In React use `className`. For Tailwind, also add `tailwind.preset.js` to `presets`.
Machine-readable tokens: `tokens.json`. Full live reference: `demos/pop.html` in the repo.

## 2 · The rules that make it look right

1. **Outline + hard shadow on every raised thing.** Cards `--pop-sh-lg` (6px), buttons/tiles `--pop-sh` (3px). Never blurred shadows. Never a raised surface without the ink border.
2. **One accent per view.** Orange (`pop-btn--primary`) is for the single main action. Everything else is white, ink or pastel.
3. **Pastels categorise, they don't decorate.** Use `--st` on pills/dots/avatars to colour-code types (stitch kinds, statuses, people). Use `pop-fill-*` on at most 1–2 cards per screen to make a stat or callout pop.
4. **Rounded, generous.** Radii are big (24px cards, 28px hero, pills 999px). Spacing is roomy: 16–24px inside cards, 20px grid gaps.
5. **Type:** headings Bricolage Grotesque 800, tight tracking. Body Figtree 15px. Anything technical — counts, codes, labels, eyebrows, table heads — DM Mono, uppercase for labels.
6. **Press physics.** Hover lifts 1px (shadow grows), active pushes 3px into the shadow. Don't add other hover effects.
7. **One tilted thing.** A `pop-sticker` (rotated −2°) for "New"/a highlight. Only one per screen.
8. **Highlight words with butter**: `<mark>` inside `.pop-display`, or `.pop-hl`.
9. Light page is `--pop-bg` (pale sage). Dark mode: `data-theme="dark"` on `<html>` — shadows turn accent-coloured.
10. Accent swaps: `data-pop-accent="cobalt|pink|mint"` (cobalt = pptgpt's blue + hot pink).

**Don't:** gradients on surfaces, glassmorphism, thin 1px grey borders on raised elements, more than one
accent button in a group, emoji spam (one emoji in a logo or empty state is on-brand), long grey paragraphs.

**Copy voice:** short, direct, warm, second person. "Paste a pattern, drop a PDF, or snap a photo." Name
the problem precisely in errors ("Rnd 7 works into 18 stitches but the row below has 12").

## 3 · Components (all plain classes)

| Need | Markup |
|---|---|
| Page root | `<body class="pop">` · container `.pop-wrap` |
| Big headline | `<h1 class="pop-display">See it <mark>made</mark></h1>` · `.pop-eyebrow` above, `.pop-lede` below |
| Button | `.pop-btn` + `--primary` `--ink` `--butter` `--ghost` · sizes `--sm` `--lg` `--icon` `--block` |
| Card | `.pop-card` (+ `--hover`, `--flat`) · smaller `.pop-tile` · inset `.pop-well` · hero `.pop-hero` |
| Colour fill | `.pop-fill-butter|pink|mint|sky|lilac|accent|ink|soft` on any surface |
| Sticker | `<div class="pop-sticker" style="--tilt:3deg"><small>New</small>Live hands</div>` |
| Coded pill | `<span class="pop-pill" style="--st:#FFD86B">inc ×6</span>` (`--solid` for full colour) |
| Filter chip | `<button class="pop-chip" aria-pressed="true">All</button>` |
| Tag / badge / dot / key | `.pop-tag` · `.pop-badge` · `.pop-dot` (`--st`) · `<kbd class="pop-kbd">` |
| Field | `<label class="pop-field"><span class="pop-label">…</span><input class="pop-input"><span class="pop-hint">…</span></label>` |
| Inputs | `.pop-input` `.pop-select` `.pop-textarea` (`--mono`) · invalid: `aria-invalid="true"` |
| Check / radio | `<label class="pop-check"><input type="checkbox"> Label</label>` |
| Switch | `<label class="pop-switch"><input type="checkbox"> Label</label>` |
| Slider | `<input type="range" class="pop-slider">` |
| Top bar | `<nav class="pop-nav"><a class="pop-nav__brand"><span class="pop-logo">🧶</span> Name</a><a class="pop-nav__link" aria-current="page">…</a></nav>` |
| Tabs | `.pop-tabs` > `button.pop-tab[role=tab][aria-selected]` |
| Segmented | `.pop-seg` > `button[aria-pressed]` |
| Stepper | `ol.pop-steps` > `li.is-done` / `li.is-on` / `li` |
| List | `ul.pop-list` > `li` (`.is-here` highlight row, `.is-click` hover) |
| Table | `table.pop-table` (`td.num` right-aligns tabular numbers) |
| Alert | `.pop-alert.pop-alert--good|warn|bad` > `.pop-alert__icon` + `<div><strong>Title</strong>Body</div>` |
| Progress | `<div class="pop-progress" style="--p:62%">` (`--stripes`) |
| Toast | `.pop-toast` (fixed, bottom-centre) / `.pop-toast--inline` |
| Empty state | `.pop-empty` > `.pop-empty__art` + `h3` + text + primary button |
| Loading | `.pop-skeleton` blocks |
| Modal | `<dialog class="pop-modal">` > `__head` `__body` `__foot` · open with `showModal()` |
| Tooltip | `<button class="pop-tip" data-tip="Copies a link">` |
| Avatar | `.pop-avatar` (`--st` bg) inside `.pop-avatars` to overlap |
| Media frame | `.pop-media` around `img/video/canvas` (warm studio backdrop) |
| Layout | `.pop-stack` `.pop-row` `.pop-grid` (`--gap`, `--min`) · `.pop-divider` |

## 4 · Skeleton

```html
<body class="pop">
  <div class="pop-wrap pop-stack" style="--gap:24px; padding:20px 0 64px">
    <nav class="pop-nav"><a class="pop-nav__brand" href="/"><span class="pop-logo">✦</span> Appname</a>
      <a class="pop-nav__link" aria-current="page" href="#">Home</a><button class="pop-btn pop-btn--primary pop-btn--sm">New</button></nav>
    <header class="pop-hero"><span class="pop-eyebrow">What it is</span>
      <h1 class="pop-display">Do the <mark>thing</mark>.</h1><p class="pop-lede">One sentence on why.</p>
      <div class="pop-row"><button class="pop-btn pop-btn--primary pop-btn--lg">Start</button><button class="pop-btn pop-btn--lg">Learn more</button></div></header>
    <section class="pop-grid"><article class="pop-card">…</article><article class="pop-card pop-fill-mint">…</article></section>
  </div>
</body>
```

## 5 · Extending

Make new components from the tokens, not new colours: `border: var(--pop-bw) solid var(--pop-edge)`,
`box-shadow: var(--pop-sh)`, `border-radius: var(--pop-r-tile)`, fills from the pastel set. If a new
colour is unavoidable, add it as a `--pop-*` token and give it a pastel value that sits with the set.
