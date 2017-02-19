import * as types from './mutation-types'

export const state = {
	blog: ''
}; 

export const mutations = {
	[types.LOADBLOGBYID](state, item){
		state.blog = item.data;
	}
}
