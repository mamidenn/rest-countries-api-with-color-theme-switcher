/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    colors: {
      "light-element": "hsl(0, 0%, 100%)",
      "light-bg": "hsl(0, 0%, 98%)",
      "light-input": "hsl(0, 0%, 52%)",
      "light-text": "hsl(200, 15%, 8%)",
      "dark-element": "hsl(209, 23%, 22%)",
      "dark-bg": "hsl(207, 26%, 17%)",
      "dark-text": "hsl(0, 0%, 100%)",
      blue: "#2563eb",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    fontWeight: {
      light: 300,
      normal: 600,
      bold: 800,
    },
    boxShadow: {
      strong: "0 0 3px 3px rgb(0 0 0 / 0.1)",
      md: "0 0 3px 1px rgb(0 0 0 / 0.1)",
      lg: "0 1px 10px 0 rgb(0 0 0 / 0.05)",
    },
    extend: {},
  },

  plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
