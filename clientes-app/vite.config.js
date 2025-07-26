import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './src')
    }
  },
  define: {
    'process.env': {}, // Añade esta definición
    'import.meta.env': JSON.stringify(import.meta.env) // Asegura acceso a env vars
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      'vuetify',
      'vue-toastification'
    ]
  }
})