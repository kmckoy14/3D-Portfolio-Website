import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // This helps with file system watching in Linux
    },
    host: true, // Listen on all addresses
    hmr: {
      overlay: true, // Show errors as overlay
    }
  },
})

