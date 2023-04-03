/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'strong-red': '#ff0000',
        'blue':'#114df1',
        transparent: 'transparent',
        current: 'currentColor',
      },
      screens: {
        mobileUS: '284px',
        mobileS: '320px',
        mobileM: '375px',
        mobileL: '414px',
        mobileUL: '568px',
        ...defaultTheme.screens,
      },
      fontFamily: {
        montserrat: ['Montserrat, sans-serif'],
      },
      clipPath: {
        triangle: ' polygon(50% 0%, 0% 100%, 100% 100%)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('tailwind-clip-path')],
};
