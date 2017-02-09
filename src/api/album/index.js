import axios from 'axios'

export function listByAlbumId() {
	return new Promise( (resolve, reject) => {
		axios.get('http://localhost:8080/list_by_album.json').then(function(response){
			resolve(response.data)
		})
	})
}