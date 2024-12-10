/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: '#0f172a',
        disableColor: '#6b7280',
        highlightColor: '#A576E3',
        highlightPrimary: '#04B5DD',
        borderColor: '#E9E9E9'
      }
    },
  },
  plugins: [],
}