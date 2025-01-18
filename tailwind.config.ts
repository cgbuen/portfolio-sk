import containerQueries from '@tailwindcss/container-queries'
import typography from '@tailwindcss/typography'
import type {Config} from 'tailwindcss'
import DaisyUI from 'daisyui'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {},
  },

  darkMode: 'selector',

  plugins: [typography, containerQueries, DaisyUI],
} satisfies Config
