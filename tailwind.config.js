const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-gray": "#2C2F33",
        orange: colors.orange,
        sky: colors.sky
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
