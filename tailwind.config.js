/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    extend: {
      screens: {
        sm: '500px',
        // => @media (min-width: 640px) { ... }
      },
      colors: {
        'lobster-black': '#01000B',
        'lobster-white': '#F2F2F2',
        'lobster-red': {
          500: '#E71A33',
          700: '#CB1026',
        },
      },
      fontFamily: {
        Poppins: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
