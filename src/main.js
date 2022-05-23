import Vue from 'vue'
import App from './App.vue'

// 引入进度条样式
import 'nprogress/nprogress.css'
import './styles/index.less'

console.log(import.meta.env.MODE)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
