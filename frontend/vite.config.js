import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Changed to 3001 as per API_CONFIGURATION.md
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // Add a proxy for /auth routes as well
      '/auth': {
        target: 'http://localhost:5000', // Changed to 5000 as per API_CONFIGURATION.md
        changeOrigin: true,
        // No rewrite needed if backend routes are like /auth/register
      }
    }
  }
})
