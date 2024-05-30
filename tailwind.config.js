/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan': '#87CEEB'
      },
      backgroundImage: {
        'primary-bg' : "url('/primary-bg.jpg')",
      }
    },
  },
  plugins: [],
}
