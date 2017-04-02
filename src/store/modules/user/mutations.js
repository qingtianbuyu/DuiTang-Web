import * as types from './mutation-types'

export const state = {
	items: [],
	hotList: [],
	account: {}
}

export const STORAGE_KEY_ACCOUNT = 'account'

export const mutations = {
	[types.LIST_USER_BY_TOP](state, userList){
		state.items = userList.data.object_list
	},

	[types.LIST_HOT](state, hotList){
		console.log(hotList.data.next_start)
		state.hotList = hotList.data.object_list		
	},

	[types.LOGIN](state, account){
		state.account = account		
	}
}
