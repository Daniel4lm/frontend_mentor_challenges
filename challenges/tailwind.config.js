const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./challenges/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
      },
      fontFamily: {
        // font-family: "Poppins", "Quicksand", "Roboto", "Nunito", Helvetica, Arial, Helvetica, sans-serif;
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        quicksand: ['Quicksand', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        nunito: ['nunito', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        1: '1em',
        1.1: '1.1em',
        1.2: '1.2em',
        1.4: '1.4em',
        1.6: '1.6em',
        2: '2em',
      },
      height: {
        104: '26rem',
        112: '28rem',
        128: '32rem',
        136: '34rem',
      },
      screens: {
        mobile: '375px',
        // => @media (min-width: 375px) { ... }
        tablet: '768px',
        // => @media (min-width: 768px) { ... }
        desktop: '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
  variants: {},
}
