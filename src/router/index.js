import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//module
import Home   from '../module/index'
import Album  from '../module/album'

import People from '../module/people'
const People_Album = resolve => require(['../module/people/album.vue'], resolve)
const People_Article = resolve => require(['../module/people/article.vue'], resolve)
const People_Fav_Album = resolve => require(['../module/people/favAlbum.vue'], resolve)
const People_Collect_Album = resolve => require(['../module/people/albumCollect.vue'], resolve)

const Blog = resolve => require(['../module/blog'], resolve)


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
          path: '',
          component: People_Album
        },{
          path: 'album',
          component: People_Album
        },
        {
          path: 'article',
          component: People_Article
        },
        {
          path: 'favalbum',
          component: People_Fav_Album
        },
        {
          path: 'collect',
          component: People_Collect_Album
        },
        {
          path: 'original',
          component: People_Collect_Album
        }
      ]
    },
    { 
      path: '/blog',
      component: Blog
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