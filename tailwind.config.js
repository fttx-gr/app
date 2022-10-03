const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./content/**/*.md"
  ],
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
