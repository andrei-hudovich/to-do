import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue(), Components()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
            @use 'sass-mq/mq' as * with (
              $breakpoints: (
                container: 1120px,
              )
            );
            @use "@/assets/styles/utilities/_functions.scss" as *;
            @use "@/assets/styles/utilities/_mixins.scss" as *;
          `
      }
    }
  }
})
