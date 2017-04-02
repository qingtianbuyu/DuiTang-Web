import axios from 'axios'

export function listByAlbumId() {
	return new Promise( (resolve, reject) => {
		axios.get('http://localhost:8080/list_by_album.json').then(function(response){
			resolve(response.data)
		})
	})
}

export function listByUser() {
	return new Promise((resolve, reject) => {
		axios.get('http://localhost:8080/list_by_user.json').then(function(response){
			resolve(response.data)
		})
	})
}

export function listByPeopleCollect() {
	return new Promise((resolve, reject) => {
		axios.get('http://localhost:8080/people_collect.json').then(function(response){
			resolve(response.data)
		})
	})
}


export function create(userId,name, desc, tag) {
	return new Promise( (resolve, reject) => {
		var params = new URLSearchParams();
		params.append('user_id', userId);
		params.append('name', name);
		params.append('desc', desc);
		params.append('tag', tag);
		axios.post('http://192.168.1.105:9001/api/album/create', params).then(function(response){
				resolve(response.data)
		});
	})
}


