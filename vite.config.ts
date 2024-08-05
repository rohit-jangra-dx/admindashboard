import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://rohit-jangra-dx.github.io/admindashboard/",
 resolve:{
  alias:{
    "@":resolve(__dirname, './src'),
  }
 }
})
