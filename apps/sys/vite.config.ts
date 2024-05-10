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
      '/api': 'https://1253457920-2r3uhzjzy5-nj.scf.tencentcs.com'
    }
  }
})
