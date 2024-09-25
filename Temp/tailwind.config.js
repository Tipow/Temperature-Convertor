/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Archivo', 'sans-serif']
    },
  },
  plugins: [],
}
}
