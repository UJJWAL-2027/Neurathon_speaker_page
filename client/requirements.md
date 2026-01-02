## Packages
framer-motion | Complex animations for reveal effects and glitch transitions
lucide-react | Icons for the UI (already in base but explicit for clarity)
clsx | Utility for conditional class names
tailwind-merge | Utility for merging tailwind classes

## Notes
Tailwind Config - extend fontFamily:
fontFamily: {
  display: ["var(--font-display)"],
  body: ["var(--font-body)"],
  mono: ["var(--font-mono)"],
}
Tailwind Config - extend colors:
colors: {
  neon: {
    cyan: "#00f3ff",
    magenta: "#ff00ff",
    purple: "#bc13fe",
    blue: "#4d4dff",
  }
}
Tailwind Config - extend backgroundImage:
backgroundImage: {
  'grid-pattern': "linear-gradient(to right, rgba(0, 243, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 243, 255, 0.1) 1px, transparent 1px)",
}
