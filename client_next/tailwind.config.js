/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero':"url('/market.jpg')"
      },
      colors:{
        'primary':'#1EB2A6',
        'secondary':'#F7F5F6'
      }
    },
  },
  plugins: [],
};
