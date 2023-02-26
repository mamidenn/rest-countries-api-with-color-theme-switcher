/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    colors: {
      "light-element": "hsl(0, 0%, 100%)",
      "light-bg": "hsl(0, 0%, 98%)",
      "light-input": "hsl(0, 0%, 52%)",
      "light-text": "hsl(200, 15%, 8%)",
      "dark-element": "hsl(209, 23%, 22%)",
      "dark-bg": "hsl(207, 26%, 17%)",
      "dark-text": "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    fontWeight: {
      light: 300,
      normal: 600,
      bold: 800,
    },
    extend: {},
  },

  plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
