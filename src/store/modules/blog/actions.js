import * as types from './mutation-types'
import * as api from '../../../api/blog'

export const LOADBLOGBYID  = ({commit, dispatch, state }) => {
		return api.loadBlogById().then((item) => {
			commit(types.LOADBLOGBYID, item)
		});
}
