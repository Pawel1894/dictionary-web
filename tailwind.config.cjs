/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Lora", "serif"],
      mono: ["Inconsolata", "monospace"],
    },
    colors: {
      primary: "rgb(164, 69, 237)",
      accent: "rgb(255, 82, 82)",
      neutral: {
        100: "rgb(5,5,5)",
        200: "rgb(31,31,31)",
        300: "rgb(45,45,45)",
        400: "rgb(58,58,58)",
        500: "rgb(131,131,131)",
        600: "rgb(233,233,233)",
        700: "rgb(244, 244, 244)",
      },
      white: "rgb(255,255,255)",
    },
    extend: {
      dropShadow: {
        "3xl": "0px 3px 15px var(--tw-shadow-color, rgba(0,0,0,0.1))",
      },
    },
  },
  plugins: [],
};
