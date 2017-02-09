import * as albumApi from '../../../api/album'
import * as types  from './mutation-types.js'

export const LISTBYALBUMID = ({ commit , dispatch, state}) => {
	return albumApi.listByAlbumId().then((albumList) => {
		commit(types.LISTBYALBUMID, albumList)
	});
}