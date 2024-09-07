/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {

      aspectRatio: {
        '3/4': '3/4',  // Custom aspect ratio 32:35
      },
    },
  },
  plugins: [],
}

