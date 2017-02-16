import * as types from './mutation-types'

export const state = {
	albumItemList: [],
	albumList: [],
	peopleCollectAlbumList:[]
}

export const mutations = {
	[types.LISTBYALBUMID](state, itemList){
		state.albumItemList = itemList.data.object_list
	}, 

	[types.LISTBYUSER](state, albumList){
		state.albumList = albumList.data.object_list	
	}, 

	[types.LISTBYPEOPLECOLLECT](state, albumList){
		state.peopleCollectAlbumList = albumList.data.object_list	
	}

}