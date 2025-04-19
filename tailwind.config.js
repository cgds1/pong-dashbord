/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/app/**/*.{ts,tsx}',
      './src/components/**/*.{ts,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          arcade: ['"Press Start 2P"', 'cursive'],
        },
        keyframes: {
          gradient: {
            '0%, 100%': { 'background-position': '0% 50%' },
            '50%': { 'background-position': '100% 50%' },
          },
        },
        animation: {
          'gradient-x': 'gradient 15s ease infinite',
        },
      },
    },
    plugins: [],
  };
  