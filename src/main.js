import Vue from 'vue'
import App from './App.vue'

console.log(import.meta.env.MODE)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
