import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//module
import Home   from '../module/index'
import Album  from '../module/album'
import People from '../module/people'
//非单页懒加载会导致部分样式丢失



const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }

const People_Album = resolve => require(['../module/people/album.vue'], resolve)


export default new VueRouter({
  mode: 'history',
  routes: [
    {
    	path: '/album',
    	component: Album
    },
    {
      path: '/people',
      component: People,
      children: [
        {
          path: 'album',
          component: People_Album
        },
        {
          path: 'article',
          component: UserProfile
        },
        {
          path: 'favalbum',
          component: UserPosts
        },
        {
          path: 'collect',
          component: UserHome
        },
        {
          path: 'original',
          component: UserHome
        }
      ]
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