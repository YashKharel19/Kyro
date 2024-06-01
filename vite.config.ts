import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy /cart requests to Foxy.io API
      '/cart': {
        target: 'https://kyro.foxycart.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cart/, '/cart'),
      },
    },
  },
})
