# ghanemja/ui

Two UI styles, packaged so **you or your agent** can drop them into anything: a CSS library (plain
classes, no JS, no build), design tokens, a Tailwind preset, and a `SKILL.md` that teaches an agent the
rules of the style.

| | **Pop UI** | **Sketch UI** + Main Street kit |
|---|---|---|
| Look | Neo-brutalist pop: ink outlines, hard offset shadows, hot orange + pastels, Bricolage Grotesque | Hand-drawn storybook: wobbly inked boxes on warm paper, tilted cards, Caveat lettering, muted gouache, shopfront awnings, bunting, marquees |
| From | YarnFlow (crochet), pptgpt | The Vanishing Gallery (art-heist) and its Main Street |
| Good for | Tools, editors, dashboards, landing pages | Games and HUDs, storytelling sites, cosy shops, portfolios |
| Classes | `pop-*` on `<body class="pop">` | `sk-*` on `<body class="sketch">` |
| Gallery | [`demos/pop.html`](demos/pop.html) | [`demos/sketch.html`](demos/sketch.html) |

## Use it in a page

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ghanemja/ui@main/skills/pop-ui/pop.css">
<body class="pop">
  <button class="pop-btn pop-btn--primary">Start</button>
</body>
```

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ghanemja/ui@main/skills/sketch-ui/sketch.css">
<body class="sketch sk-grain">
  <div class="sk-shop" data-shop="cafe"><div class="sk-awning"></div>
    <div class="sk-shop__body"><span class="sk-sign sk-sign--gilt">Bean There</span></div></div>
</body>
```

## Use it with an agent

**Claude Code** (installs both styles as skills):

```bash
claude plugin marketplace add ghanemja/ui
```

```bash
claude plugin install ghanemja-ui@ghanemja-ui
```

Then ask: *"build the settings page in my Pop style"* or *"make a shop picker in the Sketch Main Street style"*.

**Any other agent** (Cursor, Codex, Copilot…): point it at the instructions, e.g. add to your
`AGENTS.md` / rules file:

```
For UI, follow https://github.com/ghanemja/ui/blob/main/skills/pop-ui/SKILL.md
```

or copy a `skills/<style>/` folder into your project's skills directory. [`llms.txt`](llms.txt) is the
one-page index.

## What's in each style folder

```
skills/pop-ui/            skills/sketch-ui/
  SKILL.md                  SKILL.md               ← rules + every component, written for agents
  pop.css                   sketch.css             ← the library
  tokens.json               tokens.json            ← colours, radii, shadows, fonts
  tailwind.preset.js        tailwind.preset.js     ← maps the tokens into Tailwind
```

Both respect `prefers-reduced-motion`. Pop has a dark mode (`data-theme="dark"`) and accent swaps
(`data-pop-accent="cobalt|pink|mint"`). Sketch is light-only by design and ships shop palettes via
`data-shop="bakery|cafe|florist|grocer|icecream|toys|books|cinema|library"`.

MIT licensed.
