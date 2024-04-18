/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        playfair:['Playfair Display', 'serif'],
        bebas:['Bebas Neue', 'sans-serif'],
        inter:[ 'Inter', 'sans-serif'],
        basker:["Baskervville, serif"],
        

      }
    },
  },
  plugins: [],
}

