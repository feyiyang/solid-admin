import { presetUno, presetAttributify, presetIcons, defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({
      prefix: 'chai-',
      prefixedOnly: true
    }),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
        color: '#a8a29e'
      }
    })
  ]
})
