// tailwind.config.js - UPDATED
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "SF Mono", "monospace"],
      },
      colors: {
        navy: "#0a192f",
        "light-navy": "#112240",
        "lightest-navy": "#233554",
        slate: "#8892b0",
        "light-slate": "#a8b2d1",
        "lightest-slate": "#ccd6f6",
        white: "#e6f1ff",
        green: "#64ffda",
        "green-tint": "rgba(100, 255, 218, 0.1)",
      },
      fontFamily: {
        mono: ['"SF Mono"', '"Fira Code"', "monospace"],
        sans: [
          '"Calibre"',
          '"Inter"',
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      animationDelay: {
        200: "200ms",
        400: "400ms",
        600: "600ms",
      },
    },
  },
  plugins: [],
}
