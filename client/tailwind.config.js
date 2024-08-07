/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero':"url('./src/assets/market.jpg')"
      },
      colors:{
        'primary':'#1EB2A6',
        'secondary':'#F7F5F6'
      }
    },
  },
  plugins: [],
}

