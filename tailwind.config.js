/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'pale-blue': '#B3CDEB',
        cyan: '#82C5BC',
        orange: '#FDD87C',
        'soft-orange': '#FEDFB1',
        'pale-orange': '#fff4e3',
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
};
