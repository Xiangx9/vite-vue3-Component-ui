import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/   https://juejin.cn/post/7257144279050403896
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      entry:'./packages/index.js',
      name: 'xiangx-ui',
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@use "./src/assets/styles/style.scss" as *;'
      }
    }
  }
})