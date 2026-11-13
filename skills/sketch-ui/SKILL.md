---
name: sketch-ui
description: Build UI in the "Sketch" style — hand-drawn storybook UI on warm paper (wobbly ink boxes, tilted cards, Caveat + Patrick Hand lettering, muted gouache) plus a Main Street kit (striped scalloped awnings, shop signs, bunting, marquee bulbs, tickets, gilt frames). Use when the user asks for the Sketch / sketchbook / storybook style, the art-heist or "Vanishing Gallery" look, the Main Street / cosy small-town shopfront look, game HUDs and menus, or names sketch.css / sk-* classes.
---

# Sketch UI (+ Main Street kit)

UI that looks **drawn in a sketchbook and painted in gouache**: every box is inked with a slightly wobbly
outline (elliptical, uneven radii), sits on warm paper, casts a hard pencil-dark shadow, and is often tilted
a degree or two. Names and headings are hand-lettered (Caveat); body text is neat handwriting
(Patrick Hand). The Main Street kit adds the small-town shopfront vocabulary: striped scalloped awnings,
painted fascia signs, round blade signs, bunting, cinema marquee bulbs, ticket stubs and gilt frames.
Source: *The Vanishing Gallery* (art-heist) — its HUD, case board, notebook, phone and its Main Street.

## 1 · Install

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ghanemja/ui@main/skills/sketch-ui/sketch.css">
```

Or copy `sketch.css` (next to this file). Put `class="sketch sk-grain"` on `<body>` (`sk-grain` adds paper
grain). React: `className`. Tailwind: add `tailwind.preset.js`. Tokens: `tokens.json`. Live reference:
`demos/sketch.html` in the repo. Fonts come from Google Fonts via the stylesheet; for offline/games, bundle
Caveat 600/700 and Patrick Hand 400 (both OFL) and override `--sk-script` / `--sk-hand`.

## 2 · The rules that make it look right

1. **Everything is an inked box.** `border: 2.5px solid var(--sk-ink)` + `border-radius: var(--sk-sketch)` + `box-shadow: var(--sk-sh)` — use `.sk` or a component. Alternate `--sk-sketch` / `--sk-sketch-2` on neighbours so they don't look stamped.
2. **Tilt, a little, not everything.** Cards −1.2°…+1°, prompts −1°, big buttons −1.5°, stamps −8°. Lists, inputs and long text stay straight. Never more than ~2° on anything with paragraphs.
3. **Two markers only.** Gold (`--sk-gold`) = the primary action, keys, highlights. Tomato (`--sk-accent`) = urgency, the current step, the shout, the title's key word. Everything else is paper and ink.
4. **Gouache is for the world, not the chrome.** Rose, sage, teal, dusty, lilac, mustard, terracotta belong to shop fronts, chips, avatars, illustrations — muted, never neon.
5. **Type:** Caveat 700 for titles, names, card heads, labels on fields, shouts. Patrick Hand 18–20px for everything people read. Small caps-spaced `.sk-label` for meta. No sans-serif anywhere.
6. **Ink is warm aubergine (`#2A2230`)**, never pure black. Paper is `#F6EFDF` on a `#F3EAD7` page; `--sk-cream` for the brightest things (bubbles, inputs, prompts).
7. **Physical motion.** Hover nudges up-left and rotates −0.6°; press pushes into the shadow; things *drop* in with an overshoot (`.sk-drop`). Respect reduced motion (built in).
8. **Main Street pieces are set dressing:** use one or two per screen (an awning header, a bunting edge, a ticket for a confirmation, a marquee for a title). A whole street row is for menus/maps/shop pickers.
9. **Copy voice:** storybook and specific, short sentences, a bit of character. "The painting left the gallery between 6 and 7 a.m." Buttons say what you do in the world ("Look closer", "Ask about it", "Name the thief").

**Don't:** drop shadows with blur, gradients on boxes (only the gilt frame and shop window have them),
perfectly round pill buttons, system fonts, cold greys, more than one tilted thing in a row of buttons,
pure white backgrounds.

## 3 · Components

| Need | Markup |
|---|---|
| Page root | `<body class="sketch sk-grain">` · `.sk-wrap` container |
| Title | `<h1 class="sk-title">The Vanishing <span>Gallery</span></h1>` + `.sk-label` byline |
| Any box | `.sk` (+ `--2`, `--3` shapes, `--cream`, `--flat`) |
| Button | `.sk-btn` + `--gold` (primary) `--accent` `--cream` `--ghost` `--big` `--sm` · toggled: `.is-on` / `aria-pressed` |
| Corner tab button | `<button class="sk-tab-btn">–</button>` (fold/close on a box) |
| Card | `.sk-card` (`--tilt` var; `--still` no tilt; `--lift` hover) > `h3` + `p` + `.sk-note-text` |
| Notebook page | `.sk-notebook` (lined; `--margin` adds a red margin line) |
| Sticky scrap | `.sk-scrap` (`--tilt`), add `.sk-tape` for a strip of tape |
| Case board / checklist | `ul.sk-checklist` > `li` (`.done` struck, `.on` current, `.pick` clickable) > `<i>✓</i>` + text + `<span class="ct">1/3</span>`; step headers `.sk-step` (`.go` = current) |
| Keys / badge / chip | `<kbd class="sk-kbd">E</kbd>` · `.sk-badge` · `.sk-chip` (`--st` colour) |
| Stamp | `<span class="sk-stamp">Case closed</span>` |
| Highlight / strike / squiggle | `.sk-mark` · `.sk-scrawl` · `.sk-ul` |
| Dialogue | `.sk-talk` > `.sk-avatar` + `div` > `b.sk-talk__who` + `p` + `.sk-talk__answers` (buttons) |
| Phone / chat | `.sk-msg` (theirs) · `.sk-msg--me` (yours) inside an `.sk` box with a dashed `.sk-hr`-style header |
| Speech bubble | `.sk-bubble` · floating words `.sk-shout` (`--yell`, `--wail`) |
| Hint | `<span class="sk-prompt"><kbd class="sk-kbd">E</kbd> look at the frame</span>` |
| Fields | `.sk-field` > `.sk-field__label` + `.sk-input` / `.sk-input--line` / `.sk-textarea` (lined) / `.sk-select` |
| Checkbox | `<label class="sk-check"><input type="checkbox"> I'm sure</label>` (hand-drawn ✓) |
| Folder tabs | `.sk-tabs` > `button[role=tab][aria-selected]`, panel below is an `.sk` with no top border |
| Toast / modal | `.sk-toast` (`--inline`) · `<dialog class="sk-modal">` + `.sk-modal__x` |
| Loader | `<svg class="sk-scribble">` with 1–3 `<path>`s — they draw themselves |
| Cinematic | `.sk-cine` on body = letterbox bars; `.sk-caption` for the subtitle |
| **Awning** | `<div class="sk-awning" data-shop="cafe"></div>` (`--awn-a`, `--awn-b`, `--stripe`, `--awn-h`) |
| **Shopfront** | `.sk-shop[data-shop]` > `.sk-awning` + `.sk-shop__body` > `.sk-sign` |
| **Fascia sign** | `.sk-sign` (`--gilt` = gold leaf letters), colours from `data-shop` or `--sign-bg/--sign-fg` |
| **Blade sign** | `<span class="sk-blade" data-shop="bakery">🥐</span>` |
| **Bunting** | `<div class="sk-bunting"></div>` (`--b1 --b2 --b3`, `--flag`, `--drop`) — great as a page top edge |
| **Marquee** | `<div class="sk-marquee"><p>The Bijou</p></div>` (`--blink`) |
| **Ticket** | `.sk-ticket` > `.sk-ticket__main` (`b` + text) + `.sk-ticket__stub` |
| **Gilt frame** | `.sk-frame` > img/div, then `.sk-plaque` caption |
| **Shop window** | `.sk-window` > `.sk-window__paint` (hand-painted lettering) |
| **Street sign** | `<span class="sk-street">Main St</span>` |
| Layout | `.sk-stack` `.sk-row` `.sk-grid` (`--gap`, `--min`) · `.sk-street-row` for shopfronts |

Shop palettes for `data-shop`: `bakery` (rose), `cafe` (teal-green, gilt sign), `florist` (forest),
`grocer` (green), `icecream` (pink), `toys` (red), `books` (slate), `cinema` (brick + gold), `library` (dusty blue).

## 4 · Skeleton

```html
<body class="sketch sk-grain">
  <div class="sk-bunting"></div>
  <main class="sk-wrap sk-stack" style="--gap:28px; padding:28px 0 64px">
    <header style="text-align:center"><h1 class="sk-title">Shop <span>Window</span></h1>
      <p class="sk-label">a little town of things</p>
      <button class="sk-btn sk-btn--big sk-btn--gold">Come in</button></header>
    <section class="sk-street-row">
      <div class="sk-shop" data-shop="bakery"><div class="sk-awning"></div>
        <div class="sk-shop__body"><span class="sk-sign">Rise &amp; Shine</span><p>Fresh at 7</p></div></div>
    </section>
    <section class="sk-grid"><article class="sk-card"><h3>A found thing</h3><p>…</p></article></section>
  </main>
</body>
```

## 5 · Game HUD notes

Fixed overlays over a canvas: case board top-left (`.sk` with a `.sk-checklist`, rotated −0.4°, foldable
with an `.sk-tab-btn`), notebook button top-right with a `.sk-badge`, `.sk-prompt` bottom-centre, dialogue
`.sk-talk` bottom-centre at `min(640px, 92vw)`, phone bottom-right rotated 1.4°. Keep the 3D world in the
same muted gouache palette (tokens.json has hex values) so chrome and scene feel painted together.
