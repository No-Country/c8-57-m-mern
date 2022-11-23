/* eslint-disable quote-props */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {

    screens: {
      sm: '600px',
    },
    extend: {
      boxShadow:{
        '228b': '2px 2px 8px rgba(0,0,0)'
      }
    },
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
