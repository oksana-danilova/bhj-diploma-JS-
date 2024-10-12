/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
	const xhr = new XMLHttpRequest();
	xhr.responseType = 'json';

	let {url, method, data, callback} = options;
	let formData = new FormData();

	if (data) {
		data = Object.entries(options.data);

		if (method === 'GET') {
			for (let [key, value] of data) {
				url = url + '?' + key + '=' + value;
			}
		} else {
			for (let [key, value] of data) {
				formData.append(key, value);
			}
		}
		/* 
		if (method === 'GET') {
			url += '?' + [...data].map(([key, value]) => `${key}=${value}`).join('&');
		} else {
			for (let [key, value] of data) {
				formData.append(key, value);
			}
		}
		*/
	}

	xhr.addEventListener('load', () => {
		callback(null, data);
	});

	try {
		xhr.open(method, url);
		xhr.send(formData);
	} catch (err) {
		callback(err, data);
	}
}