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
      backgroundImage: (theme) => ({
        'header-hero': "url('/img/header.webp')",
      }),
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',
        11: 'repeat(11, minmax(0, 1fr))',
        12: 'repeat(12, minmax(0, 1fr))',
        13: 'repeat(13, minmax(0, 1fr))',
        14: 'repeat(14, minmax(0, 1fr))',
        15: 'repeat(15, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-question-mark')],
};
