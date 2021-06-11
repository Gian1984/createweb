const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './resources/**/*.blade.php',
     './resources/**/*.js',
     './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
      colors: {
          teal: colors.teal,
          transparent: 'transparent',
          current: 'currentColor',
          black: colors.black,
          white: colors.white,
          gray: colors.coolGray,
          indigo: colors.indigo,
          red: colors.rose,
          yellow: colors.amber,
          green: colors.emerald,
      },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
