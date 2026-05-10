import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Bind all interfaces — avoids localhost → ::1 vs 127.0.0.1 mismatches and “blank” shells.
    host: true,
    port: 5173,
    strictPort: true,
  },
})
