/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        // aquí podrías añadir colores retro, tipografías, animaciones, etc.
        animation: {
          gradientBG: "gradientBG 20s ease infinite",
        },
        keyframes: {
          gradientBG: {
            "0%":   { "background-position": "0% 50%" },
            "50%":  { "background-position": "100% 50%" },
            "100%": { "background-position": "0% 50%" },
          },
        },
      },
    },
    plugins: [],
  };
  