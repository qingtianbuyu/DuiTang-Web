import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../index.vue'
import Home from '../module/index/home.vue'
import Album from '../module/album/album.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
    	path: '/album',
    	component: Album
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