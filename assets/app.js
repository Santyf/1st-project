$.ajax({
	url: "https://dog.ceo/api/breeds/image/random",
	method: "GET"
}).then(function (response) {
	console.log(response);
});