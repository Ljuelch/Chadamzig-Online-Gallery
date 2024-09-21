/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    ],
  theme: {
    extend: {
      letterSpacing: {
        'wider-custom': '0.25em',
      },
      colors: {
        'base-text-color': 'rgb(80, 20, 20)',
      },
    },
  },
  plugins: [],
}

