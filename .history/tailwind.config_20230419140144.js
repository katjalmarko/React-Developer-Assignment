/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px', // small screens, mobile devices
        'md': '768px', // medium screens, tablets
        'lg': '1024px', // large screens, laptops/desktops
        'xl': '1440px', // extra large screens, larger desktops
      },
    },
  },
  plugins: [],
}
