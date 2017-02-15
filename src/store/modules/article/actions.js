import * as types from './mutation-types.js'
import * as albumApi from '../../../api/article'

export const ARTICLELISTBYUSER  = ({commit, dispatch, state }) => {
		return albumApi.listByUser().then((itemList) => {
			commit(types.ARTICLELISTBYUSER, itemList)
		});
}
