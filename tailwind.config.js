/** @type {import('tailwindcss').Config} */
import theme from './src/theme'

export default {
  mode:'jit',
  content: ["./src/**/*.{tsx,html,jsx}"],
  theme: theme,
  plugins: [],
}

