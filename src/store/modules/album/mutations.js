import * as types from './mutation-types'

export const state = {
	itemList: []
}

export const mutations = {
	[types.LISTBYALBUMID](state, itemList){
		state.itemList = itemList.data.object_list
	}
}