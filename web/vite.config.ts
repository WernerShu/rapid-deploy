import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': join(__dirname, "src"),
      '#': join(__dirname, "types"),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 两种方式都可以
        additionalData: '@use "@/style/global/index.scss" as *;'
      }
    }
  },
})
