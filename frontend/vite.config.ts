import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { presetUno } from 'unocss'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [UnoCSS({
    presets: [presetUno()],
  }), solid()]
})
