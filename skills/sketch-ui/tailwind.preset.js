// Sketch UI Tailwind preset — values read the CSS variables in sketch.css. Load sketch.css too.
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        sk: {
          page: 'var(--sk-page)', paper: 'var(--sk-paper)', 'paper-2': 'var(--sk-paper-2)', cream: 'var(--sk-cream)', night: 'var(--sk-night)',
          ink: 'var(--sk-ink)', 'ink-2': 'var(--sk-ink-2)', 'ink-3': 'var(--sk-ink-3)',
          accent: 'var(--sk-accent)', gold: 'var(--sk-gold)',
          mustard: 'var(--sk-mustard)', rose: 'var(--sk-rose)', terracotta: 'var(--sk-terracotta)', sage: 'var(--sk-sage)',
          teal: 'var(--sk-teal)', dusty: 'var(--sk-dusty)', lilac: 'var(--sk-lilac)', forest: 'var(--sk-forest)',
          slate: 'var(--sk-slate)', brick: 'var(--sk-brick)', bulb: 'var(--sk-bulb)',
        },
      },
      fontFamily: { hand: 'var(--sk-hand)', script: 'var(--sk-script)' },
      boxShadow: { sk: 'var(--sk-sh)', 'sk-lg': 'var(--sk-sh-lg)', 'sk-sm': 'var(--sk-sh-sm)' },
      borderRadius: { sketch: 'var(--sk-sketch)', 'sketch-2': 'var(--sk-sketch-2)', 'sketch-3': 'var(--sk-sketch-3)' },
      borderWidth: { sk: 'var(--sk-bw)' },
      rotate: { 'tilt-l': '-1.2deg', 'tilt-r': '0.9deg' },
    },
  },
};
