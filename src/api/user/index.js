import axios from 'axios'

export function listUserByTop() {
	return new Promise((resolve, reject) => {
		axios.get('https://bird.ioliu.cn/v1?url=https://www.duitang.com/napi/people/badge/user/list/by_top/').then(function(response){
				resolve(response.data)
		})
	})
}

export function listHot(){
	return new Promise((resolve, reject) => {
		axios.get('http://localhost:8080/recommend.json').then(function(response){
				resolve(response.data)
		})
	} )
}

export function login(phone, password) {
	return new Promise((resolve, reject) => {
		var params = new URLSearchParams();
		params.append('phone', phone);
		params.append('password', password);
		axios.post('http://192.168.1.103:3000/api/user/login', params).then(function(response){
				resolve(response.data)
		});
	} )	
}
