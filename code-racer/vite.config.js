import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/Snippet': {
        target: 'http://localhost:9926',
        changeOrigin: true,
      },
      '/Score': {
        target: 'http://localhost:9926',
        changeOrigin: true,
      },
    }
  }
})
