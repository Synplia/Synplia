/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#2D3047', 
        secondary: '#41B3A3', 
        accent: '#2A9D8F', 
        'accent-light': '#89D6CC', 
        'cool-gray': {
          50: '#F7F9FA',
          100: '#E8ECEF',
          200: '#D1D8DD',
          300: '#B3BEC5',
          400: '#8E9CA6',
          500: '#6B7C88',
          600: '#4A5964',
          700: '#364147',
          800: '#252B2F',
          900: '#151719',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-cool': 'linear-gradient(135deg, #2D3047 0%, #41B3A3 100%)',
        'gradient-soft': 'linear-gradient(to right, rgba(45,48,71,0.1), rgba(65,179,163,0.1))',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}