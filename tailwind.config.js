/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        KreedentialsBlack: '#111111',
        KreedentialsGray: '#f5f5f5',
      },
      boxShadow: {
        'soft': '0 18px 45px rgba(0,0,0,0.18)',
      }
    },
  },
  plugins: [],
}