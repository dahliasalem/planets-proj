/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'stars': "./src/assets/background-stars.svg",
        'random': "url('https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"
      }
    },
    fontFamily: {
      sans: ['League Spartan', 'sans-serif']
    }
  },
  plugins: [],
}
