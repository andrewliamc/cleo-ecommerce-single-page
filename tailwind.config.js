/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "cleo-bone": "#F8F5EF",
        "cleo-clay": "#D9C7B5",
        "cleo-charcoal": "#2D2D2D",
        "cleo-olive": "#7C8A64",
        "cleo-sienna": "#C27A4A",
        "cleo-cocoa": "#A78A7F",
        "cleo-cta": "#B65F3C"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        ui: ["var(--font-ui)", "sans-serif"]
      },
      boxShadow: {
        "soft": "0 10px 30px rgba(0, 0, 0, 0.06)"
      }
    }
  },
  plugins: []
};
