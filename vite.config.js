import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Repo is deployed as a GitHub Pages *project* site (username.github.io/repo-name/),
// so asset paths need the repo name as a base in production.
// Locally (`npm run dev`) this stays "/" so nothing breaks in dev.
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/niloy-barua-engineering-portfolio/' : '/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react'
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion'
          }
        },
      },
    },
  },
})
