/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        blue: "#0000ff",
        "light-blue": "#b1c5ff",
        orange: "#ff764d",
        yellow: "#fbffa7",
        violet: "#d5b3ff",
        cyan: "#b6ffc0",
      },
      fontFamily: {
        sans: ["PT Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
