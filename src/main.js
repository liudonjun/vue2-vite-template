import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

// 引入进度条样式
import 'nprogress/nprogress.css'
import './styles/index.less'

console.log(import.meta.env.MODE)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
