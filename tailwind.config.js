module.exports = {
  purge: ['public/**/*.html', 'src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          light: '#F49857',
          DEFAULT: '#E2690D',
          dark: '#AD4E0A',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
