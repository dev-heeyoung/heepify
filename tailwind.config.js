/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#1c1c1cff',
        point: '#c9ab78ff',
        basic: '#eceae7ff',
        beige: '#e8e5e2ff',
        border: '#ccc'
      },
      fontFamily: {
        brand: ['Italiana', 'serif'],
        basic: ['Lato', 'sans-serif']
      },
      backgroundImage: {
        banner:
          'url("https://cdn.pixabay.com/photo/2019/05/19/23/47/clouds-4215608_1280.jpg")',
        womenImg:
          'url("https://cdn.pixabay.com/photo/2018/08/04/20/48/woman-3584435_1280.jpg")',
        menImg:
          'url("https://cdn.pixabay.com/photo/2016/03/29/03/14/portrait-1287413_1280.jpg")',
        accessoriesImg:
          'url("https://cdn.pixabay.com/photo/2016/11/21/16/01/woman-1846127_1280.jpg")'
      },
      keyframes: {
        slide: {
          from: {
            transform: 'translateX(0%)'
          },

          to: {
            transform: 'translateX(-50%)'
          }
        }
      },
      animation: {
        slide: 'slide 30s linear infinite'
      },
      height: {
        196: '48rem'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
