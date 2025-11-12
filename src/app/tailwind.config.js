/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'mint': {
          'light': '#A4F4CF', 
          'button': '#60E6D8', 
        },
      },
    },
  },
  plugins: [],
}