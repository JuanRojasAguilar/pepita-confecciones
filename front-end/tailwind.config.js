/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan': '#87CEEB',
        'dark-blue': '#34495E',
      },
      backgroundImage: {
        'primary-bg' : "url('/primary-bg.jpg')",
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 255, 255, 0  ), 0 0 40px rgba(0, 255, 255, 0 ), 0 0 60px rgba(0, 255, 255, 0.1  )',
      },
    },
  },
  variants: {
    transitionProperty: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [],
}
