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
      },
      fontFamily: {
        'antonio': ['Antonio', 'san-serif']
      }
    },
    fontFamily: {
      sans: ['League Spartan', 'sans-serif'],
    },
    fontSize: {
      'xs': ['12px', {
        lineHeight: '25px',
        letterSpacing: '1px',
        fontWeight: '700',
      }],
      'sm': ['14px', {
        lineHeight: '25px',
        letterSpacing: '2.6px',
        fontWeight: '700',
      }],
      'base': ['16px', {
        lineHeight: '25px',
        fontWeight: '400'
      }],
      '4xl': ['40px', {
        lineHeight: '52px',
        letterSpacing: '-1.5px',
        fontWeight: '500'
      }],
      '8xl': ['80px', {
        lineHeight: '103px',
        fontWeight: '500'
      }],
    },
    colors: {
      'white': '#FFFFFF',
      'navy': '#070724',
      'dark-gray': '#38384F',
      'gray': '#838391',
      'light-blue': '#419EBB',
      'yellow': '#EDA249',
      'purple': '#6F2ED6',
      'dark-orange': '#D14C32',
      'red': '#D83A34',
      'orange': '#CD5120',
      'mint': '#1EC2A4',
      'blue': '#2D68F0'
    }
  },
  plugins: [],
}
