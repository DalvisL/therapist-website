/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        serene: {
          50: '#f8fafc',
          500: '#64748b',
          700: '#334155',
          900: '#1e2937',
        },
        healing: {
          400: '#67e8f9',
          500: '#22d3ee',
          600: '#0891b2',
        },
        warm: {
          500: '#f59e0b',
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}