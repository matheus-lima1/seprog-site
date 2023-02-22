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
    extend: {},
  },
  plugins: [],
}
