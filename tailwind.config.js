/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#ACA9E6',
        secondary:'#7935AF'
      }
    },
  },
  plugins: [require('daisyui'),],
  
}

