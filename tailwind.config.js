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
        darkBgColor: '#020617',
        disableColor: '#545454',
        darkDisableColor: '#abc2d3',
        darkBorderColor: '#334155',
        darkTextColor: '#D9EEFF',
        highlightColor: '#A576E3',
        highlightPrimary: '#04B5DD',
        borderColor: '#E9E9E9'
      }
    },
  },
  plugins: [],
}