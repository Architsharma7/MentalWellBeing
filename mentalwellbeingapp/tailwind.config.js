/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bgSquare" : "url('../public/bgsquare.jpg')",
        "bgSquare2" : "url('../public/bgsquare2.jpg')",
      }
    },
  },
  plugins: [],
}
