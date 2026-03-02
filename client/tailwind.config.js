/** @type {import('tailwindcss').Config} */
// Và với Tailwind v4 + Vite plugin thì KHÔNG dùng tailwind.config.js kiểu require() nữa.
import typography from '@tailwindcss/typography'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    typography,
  ],
}
