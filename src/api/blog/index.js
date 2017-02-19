import axios from 'axios'

export function loadBlogById() {
	return new Promise( (resolve, reject) => {
		axios.get('http://localhost:8080/blog.json').then(function(response){
			resolve(response.data)
		})
	})
}