/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#47b9a3",
        secondary: "#6cc7de",
      },
      keyframes: {
        slidein: {
          from: { transform: "translateY(100%);" },
          to: { transform: "translateY(0%);" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
