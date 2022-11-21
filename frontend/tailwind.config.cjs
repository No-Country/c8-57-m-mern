/* eslint-disable quote-props */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '600px',
    },
    extend: {},
    colors: {
      primary: '#3D6487',
      secondary: '#9BADBC',
      third: '#F4717F',
      fourth: 'white',
      transparent: 'transparent',
      fifth: '#7E97AC',
    },
  },
  plugins: [],
};
