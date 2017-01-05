import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const Foo = {
	template:'<div>Welcome to Your Vue.js App hehe</div>'
}


export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/',
      // a single route can define multiple named components
      // which will be rendered into <router-view>s with corresponding names.
      components: {
        default: Foo,
      }
    }
  ]
})