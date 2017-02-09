require('es6-promise').polyfill()
import Vue from 'vue'
import Vuex from 'vuex'
import userList from './modules/user'
import albumList from './modules/album'

Vue.use(Vuex)

export default new Vuex.Store({
	modules : {
		userList,
		albumList
	}
})
