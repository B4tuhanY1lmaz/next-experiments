/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,jsx,tsx}",
    "./components/**/*.{js,jsx}",
    "./containers/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

