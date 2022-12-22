/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'snapchat': '#fefc01',
      'white': '#ffffff',
      'gray': '#808080',
      'smoke': '#F5F5F5',
      'red': '#FF0000'
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}