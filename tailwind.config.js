/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'strong-red': '#ff0000',
        blue: '#114df1',
        orange: '#e96900',
        'midnight-blue':'#000014',
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
        shield: "polygon(51.05% 99.99%,24.34% 65.54%,6.18% 25.91%,49.37% 20.01%,92.77% 24.10%,76.29% 64.45%)",
        cardSkill: "polygon(26% 0, 31% 5%, 61% 5%, 66% 0, 92% 0, 100% 8%, 100% 89%, 91% 100%, 7% 100%, 0 92%, 0 0)",
        cardProject:'polygon(30px 0%, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0% 30px)'
      },
      backgroundImage: {
        'hero': "url('/img/section-hero.jpg')",
        'texture': "url('/img/bg-texture.png')",
        'contact': "url('/img/contact.gif')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-clip-path'),
    require('autoprefixer'),
  ],
};
