/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#000000ff',
        point: '#c9ab78ff',
        basic: '#eceae7ff'
      },
      fontFamily: {
        brand: ['Italiana', 'serif'],
        basic: ['Lato', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
