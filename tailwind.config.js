/** @type {import('tailwindcss').Config} */

module.exports = {
  
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],

  theme: {
    extend: {
      colors: {
        'bgBlack': '#1D1626',
        'blackAlt': '#1A202C',
        'txtWhite': '#eeeeee',
        'nuxtGreen': '#00DC82',
        'nuxtGrey': '#b2cccc'
      } 
    },
  },

  plugins: [],
};
