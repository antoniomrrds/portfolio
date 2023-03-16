/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      mobileUS: '284px',
      mobileS: '320px',
      mobileM: '375px',
      mobileL: '414px',
      mobileUL: '568px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
};
