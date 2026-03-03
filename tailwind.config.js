/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0CC8A8', // Teal accent
          dark: '#0AA88D',
        },
        background: {
          light: '#F5F5F5',
          dark: '#0F0F0F',
          card: {
            light: '#FFFFFF',
            dark: '#1A1A1A',
          }
        },
        severity: {
          critical: '#FF4D4D',
          high: '#FF9900',
          medium: '#FFCC00',
          low: '#00CC66',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
