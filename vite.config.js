import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 75 },
      webp: { quality: 80, lossless: true },
      avif: { quality: 70, lossless: true },
    }),
  ],
  server: {
    port: 8080,
    host: true, // Listen on all addresses (0.0.0.0)
    strictPort: false,
  }
})
