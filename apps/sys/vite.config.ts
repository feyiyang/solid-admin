import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [solid(), AutoImport({ imports: ['solid-js'] })],
  resolve: {
    alias: {
      '@': '/src',
      '@p/': '../../packages/'
    }
  },
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:7001'
    }
  }
})
