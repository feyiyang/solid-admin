import { presetUno, presetAttributify, presetIcons, defineConfig } from 'unocss'
import presetChinese from "unocss-preset-chinese"

export default defineConfig({
  shortcuts: [
    {
      'chai-btn': 'font-semibold rounded-sm',
      'chai-input': 'h-8 border border-stone-400 border-solid rounded-sm',
      login_err_tip: 'text-right text-xs'
    }
  ],
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
    }),
    presetChinese({
      chineseType: "simplified", // 指定文本为简体中文
    })
  ]
})
