import axios from 'axios';

export default class ItemService {

	sendData(data) {
		axios.post('http://localhost:3001/api/db', {
			item: data
		}).then(function(res) {
			console.log(res);
		}).catch(function(error) {
			console.log(error);
		});
	}
}