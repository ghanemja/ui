// Pop UI Tailwind preset — colours/shadows/radii read the CSS variables in pop.css,
// so dark mode and data-pop-accent swaps keep working. Load pop.css too.
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        pop: {
          bg: 'var(--pop-bg)', card: 'var(--pop-card)', soft: 'var(--pop-soft)', here: 'var(--pop-here)',
          ink: 'var(--pop-ink)', 'ink-2': 'var(--pop-ink-2)', 'ink-3': 'var(--pop-ink-3)', line: 'var(--pop-line)', edge: 'var(--pop-edge)',
          accent: 'var(--pop-accent)', 'accent-press': 'var(--pop-accent-press)',
          butter: 'var(--pop-butter)', pink: 'var(--pop-pink)', mint: 'var(--pop-mint)', sky: 'var(--pop-sky)', lilac: 'var(--pop-lilac)',
          good: 'var(--pop-good)', warn: 'var(--pop-warn)', bad: 'var(--pop-bad)',
        },
      },
      fontFamily: { display: 'var(--pop-display)', sans: 'var(--pop-sans)', mono: 'var(--pop-mono)' },
      boxShadow: { pop: 'var(--pop-sh)', 'pop-lg': 'var(--pop-sh-lg)', 'pop-none': '0 0 0 var(--pop-edge)' },
      borderRadius: { 'pop-hero': 'var(--pop-r-hero)', 'pop-card': 'var(--pop-r-card)', 'pop-tile': 'var(--pop-r-tile)', 'pop-sm': 'var(--pop-r-sm)' },
      borderWidth: { pop: 'var(--pop-bw)' },
      transitionTimingFunction: { pop: 'cubic-bezier(.32,.72,0,1)' },
    },
  },
};
