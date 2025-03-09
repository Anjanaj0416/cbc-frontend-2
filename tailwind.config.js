/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#4FDFD0",
        "secondary":"#F5F5F5",
        "account":"#E7E7E7",
      }
    },
  },
  plugins: [],
}