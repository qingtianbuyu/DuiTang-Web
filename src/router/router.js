import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../index'

Vue.use(VueRouter)


const AlbumList = {
	template:'<div>测试</div>'
}


export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
    	path: '/album',
    	component: AlbumList
    },
    {
    	path: '*',
    	component: App
    }
  ]
})