/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial-at-bottom-left': 'radial-gradient(circle at bottom left, #F2F1EB, #D5E5D5, #ffe8cdd1)',
      }
    },
  },
  plugins: [],
}