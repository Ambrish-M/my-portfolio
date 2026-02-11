import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
    theme: {
    extend: {
      fontFamily: {
        gopher: ['Gopher', 'sans-serif'],
        sanscripf: ['Sanscripf', 'sans-serif'],
      },
      colors: {
        primaryBg: 'rgb(251, 246, 241)',
        primaryText: 'rgb(34, 54, 20)',
      },
    },
  },
})
