import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin()],
  // 打包配置
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        // 移除console
        drop_console: true,
        // 移除debugger
        drop_debugger: true
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
      '@api': resolve(__dirname, 'src/api'),
      '@comp': resolve(__dirname, 'src/components'),
      '@util': resolve(__dirname, 'src/utils'),
      '@sty': resolve(__dirname, 'src/style')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8081, // 设置服务启动端口号
    open: false // 设置服务启动时是否自动打开浏览器
    // 代理
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:9000",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //   },
    // },
  }
})
