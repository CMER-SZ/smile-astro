/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4570b6',
          dark: '#1d4ed8',
        },
        whatsapp: '#67ad5b',
        desc: '#6d6e71'
      },
      spacing: {
        '15': '3.75rem', // 60px
        '18': '4.5rem', // 72px
      },
    },
  },
  plugins: [],
};