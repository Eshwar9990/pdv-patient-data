import axios from 'axios';

import { RECEIVE_API_DATA_PDV_DATA } from '../actionTypes/actionTypes';

var sampleBaseUrl = "http://localhost:8080/api/v1/";

const requestTypes = {
	get: async function(payload) {
		console.log('payload from reqTypes: ', payload.partialUrl);
		return new Promise((resolve, reject) => {
			axios.get(sampleBaseUrl + payload.partialUrl)
			.then(res => {
				console.log('Response: ', res);
				resolve(res);
				// resolve(null);
			}).catch(err => {
				console.log("Error: ", err);
				reject(err);
			});
		});
	},
	post: async function(payload) {
		console.log('payload from reqTypes: ', payload.partialUrl);
		return new Promise((resolve, reject) => {
			axios.post(sampleBaseUrl + payload.partialUrl, payload.reqBody)
			.then(res => {
				console.log('Response: ', res);
				resolve(res);
				// resolve(null);
			}).catch(err => {
				console.log("Error: ", err);
				reject(err);
			});
		});
	},
	put: async function(payload) {
		console.log('payload from reqTypes: ', payload.partialUrl);
		return new Promise((resolve, reject) => {
			axios.put(sampleBaseUrl + payload.partialUrl + '/' + payload.ids , payload.reqBody)
			.then(res => {
				console.log('Response: ', res);
				resolve(res);
				// resolve(null);
			}).catch(err => {
				console.log("Error: ", err);
				reject(err);
			});
		});
	},
	receiveApiData: function(data) {
		return {
			type: RECEIVE_API_DATA_PDV_DATA,
			payload: data
		}
	}
};

export default requestTypes;