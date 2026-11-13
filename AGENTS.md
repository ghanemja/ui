# Agent notes

This repo ships two UI styles. When asked to build UI "in my Pop style" or "in my Sketch style":

1. Read `skills/pop-ui/SKILL.md` or `skills/sketch-ui/SKILL.md` first.
2. Link the CSS (CDN in the SKILL.md) or copy the `.css` file into the project.
3. Use the documented classes; extend from tokens, never invent new colours.

Maintaining the repo: the `.css` files are the source of truth. After changing `:root` tokens,
regenerate `tokens.json` and keep `tailwind.preset.js`, `SKILL.md` and the `demos/` page in sync.
Every component must appear in its demo page.
