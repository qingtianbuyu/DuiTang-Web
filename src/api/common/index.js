import axios from 'axios'

export function getQNToken(key) {
	return new Promise((resolve, reject) => {
		var params = new URLSearchParams();
		params.append('key', key);
		axios.post('http://192.168.1.105:9001/api/qiniu/token', params).then(function(response){
				resolve(response.data)
		});
	} )	
}
