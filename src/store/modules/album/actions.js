import * as albumApi from '../../../api/album'
import * as types  from './mutation-types.js'

export const LISTBYALBUMID = ({ commit , dispatch, state}) => {
	return albumApi.listByAlbumId().then((albumItemList) => {
		commit(types.LISTBYALBUMID, albumItemList)
	});
}

export const LISTBYUSER = ({commit, dispatch, state}) => {
	return albumApi.listByUser().then((albumList) => {
		commit(types.LISTBYUSER, albumList)
	});
}