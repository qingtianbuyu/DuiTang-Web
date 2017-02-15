import axios from 'axios'

export function listByUser() {
	return new Promise( (resolve, reject) => {
		axios.get('http://localhost:8080/article_list_by_user.json').then(function(response){
			resolve(response.data)
		})
	})
}