import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003b43",
        "primary-container": "#1a535c",
        "primary-fixed": "#b6ecf6",
        secondary: "#3b6475",
        "secondary-container": "#bce6fa",
        surface: "#f3faff",
        "surface-container-low": "#ebf5fb",
        "surface-container": "#e5eff5",
        "surface-container-high": "#e0eaef",
        "surface-container-highest": "#dae4ea",
        "surface-container-lowest": "#ffffff",
        "on-surface": "#131d21",
        "on-surface-variant": "#40484a",
        "outline-variant": "#c0c8ca",
        "tertiary-fixed": "#c6e9e7",
        "tertiary-fixed-dim": "#abcdcb",
      },
      fontFamily: {
        serif: ["var(--font-noto-serif)", "serif"],
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
