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
        'greenmenu':  "rgb(78, 255, 234, 0.8)",
        'dark': '#212429',
      },
      screens: {
        xs: "480px",
        sm: "770px",
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