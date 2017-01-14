import axios from 'axios'

export function listUserByTop() {
	return new Promise((resolve, reject) => {
		axios.get('https://bird.ioliu.cn/v1?url=https://www.duitang.com/napi/people/badge/user/list/by_top/').then(function(response){
				resolve(response.data)
		})
	})
}
