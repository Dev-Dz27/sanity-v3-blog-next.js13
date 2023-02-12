/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // colors: {
    //   'purple': "#bb80f4", 
    // },
    typography: (theme) => ({}),
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'), require('@tailwindcss/typography'),
  ],
}
