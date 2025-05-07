import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'racing-gold': '#FFD700',
        'racing-navy': '#003264',
        'racing-blue': '#0066CC',
        'racing-yellow': '#FFC72C',
        'racing-black': '#0a0a0a',
        'racing-dark': '#111111',
        'racing-gray': '#1a1a1a',
        primary: "#FFD700",
        racing: {
          navy: '#003264',
          blue: '#0066CC',
          gold: '#FFD700',
          yellow: '#FFC72C',
          black: '#0a0a0a',
          dark: '#111111',
          gray: '#1a1a1a',
        },
      },
    },
  },
  plugins: [],
};

export default config; 