import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';
const __dirname = path.resolve(path.dirname(''));
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
})
