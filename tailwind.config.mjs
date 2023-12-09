/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react');

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        one: {
          DEFAULT: '#fefffe',
          dark: '#1a1a1a',
          light: '#fefffe',
        },
        two: '#f5f5f5',
        negro: '#151515',
        otroNegro: '#1a1a1a',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('tailwindcss-animated'),
    nextui(),
  ],
};
