module.exports = {
  purge: ['./src/**/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          light: '#F49857',
          DEFAULT: '#E2690D',
          dark: '#AD4E0A',
        },
        froomYellow: {
          DEFAULT: '#ffc843',
        },
        twitter: '#1D9BF0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
