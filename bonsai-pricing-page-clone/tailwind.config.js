/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#00b289",
        grey: "#4c4d5f",
        white: "#fff",
        yellow: "#f8db62",
      },
      boxShadow: {
        more: "0px 0px 32px 7px #00000024",
      },
      screens: {
        xl: "1010px",
      },
    },
  },
  plugins: [],
};
