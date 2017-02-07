import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../index.vue'
import Home from '../module/index/home.vue'

Vue.use(VueRouter)

const Bar = { template: '<div><h1>bar</h1></div>' }

export default new VueRouter({
  mode: 'history',
  routes: [
    {
    	path: '/album',
    	component: Bar
    },
    {
      path: '／home',
      component: Home
    },
    {
      path: '*',
      component: Home
    }
  ]
})