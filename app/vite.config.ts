import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    proxy: {
      "/api/v1.0": {
        target: "http://server:8080",
        changeOrigin: true,
      },
    },
  },
})
