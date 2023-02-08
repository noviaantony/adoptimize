/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {

      fontFamily: {
        default: ['Open Sans', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
};