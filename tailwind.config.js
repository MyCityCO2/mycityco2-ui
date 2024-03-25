/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#47b9a3",
        secondary: "#6cc7de",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
