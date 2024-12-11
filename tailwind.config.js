/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./content/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Libre: ["Libre Baskerville", "serif"],
      },
      gridTemplateRows: {
        0: "0fr",
        full: "1fr",
      },
      colors: {
        malachite: {
          50: "#f0fdf4",
          100: "#dbfde7",
          200: "#b9f9ce",
          300: "#82f3aa",
          400: "#45e37d",
          500: "#1ed760",
          600: "#11a847",
          700: "#11843b",
          800: "#136832",
          900: "#12552c",
          950: "#042f16",
        },
      },
    },
  },
  plugins: [],
};
