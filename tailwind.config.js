/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#4EFFEA',
        'dark': '#212429',
      },
      screens: {
        xs: "480px",
        sm: "760px",
        md: "1050px",
      },
      fontFamily: {
        sans: ["Embed code", "sans-serif"],
        montserrat: ["Montserrat"],
        Jacquard: ["Jacquard 12 Charted"]
        
      }
    },
  },
  plugins: [],
}