/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Lora", "serif"],
      mono: ["Inconsolata", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
