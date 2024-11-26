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
  plugins: [require('daisyui'), addDynamicIconSelectors()],
  daisyui: {
    themes: [
      {
        emerald: {
          ...require("daisyui/src/theming/themes")['emerald'],
          default: "#93a5bc",
          primary: '#659fff',
          'primary-content': '#fff',
          secondary: '#06b6d4',
          success: '#4b9956',
          'success-content': '#fff',
          warning: '#e7c826',
          error: '#dc3d4f',
          'error-content': '#fff',
          'info': '#8d7cd3',
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

// {
// "primary": "#1d4ed8",
// "secondary": "#60a5fa",
// "accent": "#34d399",
// "neutral": "#fdba74",
// "base-100": "#ffffff",
// "info": "#d6d3d1",
// "success": "#84cc16",
// "warning": "#ea580c",
// "error": "#fc2626",
// }
