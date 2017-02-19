require('es6-promise').polyfill()
import Vue from 'vue'
import Vuex from 'vuex'
import userList from './modules/user'
import albumList from './modules/album'
import articleList from './modules/article'
import blogModule from './modules/blog'

Vue.use(Vuex)

export default new Vuex.Store({
	modules : {
		userList,
		albumList, 
		articleList,
		blogModule		
	}
})
