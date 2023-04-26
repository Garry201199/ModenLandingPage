/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      raleway : ['Raleway', 'sans-serif'],
      bowley : ['Bowlby One'  , 'sans-serif']
    },
    extend: {
      keyframes:{
        rotate:{
          '0%': { transform: 'rotate(0.0deg)' },
          '50%': {scale : '1 1.3' },
          '100%': { transform: 'rotate(360.0deg)' },
        }
      },
      animation: {
        'rotating-blob': 'rotate 5s  infinite',
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}