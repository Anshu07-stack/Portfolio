/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        cream: '#F5F0E8',
        charcoal: '#1A1A1A',
        accent: '#E8572A',
        muted: '#6B6B6B',
        border: '#E0D9CF',
        card: '#FDFAF5',
      },
    },
  },
  plugins: [],
}
