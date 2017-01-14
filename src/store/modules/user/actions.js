import * as userApi from '../../../api/user'
import * as types from './mutation-types.js'


export const LIST_USER_BY_TOP = ({commit, dispatch, state}) => {
	return userApi.listUserByTop().then((userList) => {
		commit(types.LIST_USER_BY_TOP, userList)
	});
}