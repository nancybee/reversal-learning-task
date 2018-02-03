(function (fetch) {
	window.rltApp.fetch = (url, data) => {
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
		})
			.then((res) => res.json())
			.then((json) => console.log('response:', json));
	};
}(window.fetch));
