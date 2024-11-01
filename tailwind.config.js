/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      playFair: ' Playfair',
      workSans:'Work Sans'
    },
  },
  plugins: [
    require('daisyui'),
  ],
}