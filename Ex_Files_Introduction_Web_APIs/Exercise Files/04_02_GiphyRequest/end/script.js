var request = new XMLHttpRequest();

request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=qux7VuUxRJIz9dyeoI6X540I83miJgJU&tag=bacon$rating=g');

request.onload = function () {
	var response = request.response;
	var parsedData = JSON.parse(response);
	console.log(parsedData);

	var originalURL = parsedData.data.images.original.url;
	console.log(originalURL);

	var gif = document.createElement('img');
	gif.setAttribute('src', originalURL);
	document.body.appendChild(gif);
}

request.send();