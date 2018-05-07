import qs from 'qs';

const apiToken = 'da65fafb6cb9242168b7724fb5ab75e7';
const apiUrl = 'http://api.openweathermap.org/data/2.5/';

const fetchApi = (endPoint, payload = {}, method = 'get', headers = {}) => {
	const request = {
		method,
		headers,
		...(method !== 'get') ? {
			body: JSON.stringify(payload),
		} : {},
	};

	const requestUrl = `${apiUrl}${endPoint}?APPID=${apiToken}${
		(method === 'get') ? `&${qs.stringify(payload)}` : ''
	}`;

	console.log('requesturl', requestUrl);

	return fetch(requestUrl, request)
	.then(response => (
		response.json()
			.then(json => ({ json, response }))
			.catch(() => ({ json: {}, response }))
	))
	.then(({ json, response }) => {
		if (response.ok === false) {
			throw json;
		}
		return json;
	})
	.catch((e) => {
		if (e.response && e.response.json) {
			return e.response.json().then((json) => {
				if (json) throw json;
				throw e;
			});
		} else {
			throw e;
		}
	});
}

export const fetchForecastByCityName = cityName => fetchApi(`/forecast/daily`, { q: cityName, units: 'metric' });
