/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/dlibs/src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Yahei', 'sans-serif', 'Inter var', ...defaultTheme.fontFamily.sans],
      },
  }
  },
  plugins: [require('daisyUI'), addDynamicIconSelectors()],
  daisyui: {
    themes: [
      {
        emerald: {
          ...require("daisyui/src/theming/themes")['emerald'],
          primary: '#659fff',
          default: "#93a5bc",
          secondary: '#06b6d4',
          success: '#4b9956',
          warning: '#d9c82f',
          error: '#dc3d4f',
          'primary-content': 'white',
          '.enn-modal-box': {
            padding: '1rem 1.4rem',
          },
          '--rounded-btn': '4px',
          '--rounded-box': '8px'
        },
      },
    ],
    prefix: 'enn-'
  }
}
