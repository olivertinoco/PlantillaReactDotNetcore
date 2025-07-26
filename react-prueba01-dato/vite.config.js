import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isDev = command === 'serve'

  return {
    plugins: [react()],
    build: {
      outDir: '../wwwroot/react-app',
      emptyOutDir: true,
    },
    server: {
      port: 5173,
      strictPort: true,
      hmr: {
          host: 'localhost',
          protocol: 'ws'
      }
    },
    base: isDev ? '/' : '/react-app/'
  }
})
