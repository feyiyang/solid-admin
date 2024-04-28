import { resolve } from 'path'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [solid(), UnoCSS({ configFile: './uno.config.ts' })],
  resolve: {
    alias: {
      '@': resolve(__dirname, './components'),
      '@utils': resolve(__dirname, './utils')
    }
  }
})
