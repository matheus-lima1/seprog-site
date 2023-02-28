/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "snas": ["Product Sans Regular", "Helvetica", "Arial", "sans-serif"]
    },
    colors:{
      "white": "#FFFFFF",
      "black": "#000000",
      "yellow": "#F3BC18",
      "blue":{
        "lightest":"#48AADF",
        "light":"#345D8F",
        "dark":"#2D3E51",
      },
      "gray":"#354455"
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
