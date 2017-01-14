import * as types from './mutation-types'

export const state = {
	items: []
}

export const mutations = {
	[types.LIST_USER_BY_TOP](state, userList){
		state.items = userList.data.object_list
	}
}
