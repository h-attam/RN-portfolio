/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#0D9488', // Teal-600
        secondary: '#111827', // Gray-900
        background: '#0F172A', // Slate-900
        card: '#1E293B', // Slate-800
        text: '#F8FAFC', // Slate-50
        muted: '#94A3B8', // Slate-400
      },
    },
  },
  plugins: [],
};
