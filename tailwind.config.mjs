/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fad5b8',
          300: '#f6b88a',
          400: '#f0935a',
          500: '#C24A20', // Cor principal laranja-avermelhada
          600: '#a83d1a',
          700: '#8f3115',
          800: '#762812',
          900: '#5d1f0e',
        },
        secondary: {
          50: '#f0fdfc',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#004A49', // Verde escuro
          600: '#003d3c',
          700: '#003332',
          800: '#002928',
          900: '#001f1e',
        },
        accent: {
          50: '#fefbf3',
          100: '#fdf6e3',
          200: '#faecc4',
          300: '#f6dd9b',
          400: '#f1c970',
          500: '#C57E3A', // Laranja dourado
          600: '#a66830',
          700: '#8a5527',
          800: '#6f4420',
          900: '#56341a',
        },
        neutral: {
          50: '#f8faf9',
          100: '#f1f5f3',
          200: '#e3ebe7',
          300: '#d1ddd6',
          400: '#b8c9c0',
          500: '#85A88A', // Verde suave
          600: '#6f8f74',
          700: '#5c7661',
          800: '#4a5f4f',
          900: '#3a4a3f',
        },
      },
      fontFamily: {
        sans: ['Playfair Display', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Playfair Display', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}