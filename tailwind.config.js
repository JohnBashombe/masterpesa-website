/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pinky: '#FFF7F0',
        yelleoww: '#D5920B',
        purplee: '#5590B4',
      },
    },
  },
  plugins: [],
};
