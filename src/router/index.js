import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/home/homePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomePage
    }
  ]
})
