import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
    // hmr: {
      // protocol: 'ws',
      // port: 3000
      // host: '192.168.99.100'
    // }
  // }
})
