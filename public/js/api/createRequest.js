/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
	let { url, method, data } = options;
	let formData = new FormData();
  
	if (options.data) {
	  data = Object.entries(options.data);
  
	  if (method === "GET") {
		for (let [key, value] of data) {
		  url = url + "?" + key + "=" + value;
		}
	  } else {
		for (let [key, value] of data) {
		  formData.append(key, value);
		}
	  }
	}

    xhr.onload = () => {
        options.callback(null, xhr.response);
    };

    xhr.open(options.method, url);

    xhr.send(options.method === 'GET' ? null : formData);
};