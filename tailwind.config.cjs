/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#47b9a3',
        secondary: '#6cc7de'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
