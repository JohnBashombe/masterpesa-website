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
        yelleoww: '#FFE121',
        purplee: '#6368E5',
      },
    },
  },
  plugins: [],
};
