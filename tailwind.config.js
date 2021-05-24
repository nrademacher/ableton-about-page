module.exports = {
  mode: 'jit',
  purge: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'brand-yellow': '#fbffa7',
        'brand-purple': '#d5b3ff',
        'brand-orange': '#ff764d',
        'brand-green': '#b6fcc0',
        'brand-lightblue': '#b1c5ff',
        'brand-blue': '#0000ff',
      },
      textColor: {
        'brand-yellow': '#fbffa7',
        'brand-purple': '#d5b3ff',
        'brand-orange': '#ff764d',
        'brand-green': '#b6fcc0',
        'brand-lightblue': '#b1c5ff',
        'brand-blue': '#0000ff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-question-mark')],
};
