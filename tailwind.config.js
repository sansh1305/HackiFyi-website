/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      Clash: ["Clash", "sans-serif"],
    },
    extend: {
      boxShadow: {
        'circle': '0 0 50px rgba(220, 20, 60, 0.796), inset 0 0 30px rgba(220, 20, 60, 0.796)'
      }
    }
  },
  plugins: [],
}

