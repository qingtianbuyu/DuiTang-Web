import * as userApi from '../../../api/user'
import * as types from './mutation-types.js'


export const LIST_USER_BY_TOP = ({commit, dispatch, state}) => {
	return userApi.listUserByTop().then((userList) => {
		commit(types.LIST_USER_BY_TOP, userList)
	});
}

export const LIST_HOT = ({commit, dispatch, state}) => {
	return userApi.listHot().then((hotList) => {
		commit(types.LIST_HOT, hotList)
	});
}


export const LOGIN = ({commit, dispatch, state}, payload) => {
	return userApi.login(payload.phone, payload.password).then((account) => {
		commit(types.LOGIN, account)
	});
}