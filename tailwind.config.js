/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'blue-400':'#2c98f0',
     },
     fontFamily: {
       'play': ['Playfair Display'],
     }
    },
  },
  plugins: [],
}

