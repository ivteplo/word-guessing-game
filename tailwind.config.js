const { gray } = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-gray': gray[200],
        'light-background': '#fff',
        'light-foreground': '#000',

        'dark-gray': gray[900],
        'dark-background': '#000',
        'dark-foreground': '#fff',

        primary: '#006D77',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Open Sans',
          'Helvetica Neue',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
        ],
      },
    },
  },
  plugins: [],
}
