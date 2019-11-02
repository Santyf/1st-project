$(document).ready(function () {
	var userInput
	$("#submit-button").on("click", function () {
		$(".dogInfo").empty();
		event.preventDefault();
		userInput = $("#userInput").val().trim();
		console.log(userInput);
		var userInputsplit = split(userInput)
		call(userInputsplit);
		info();
	});

	function call(userInputsplit) {
		$.ajax({
			url: "https://dog.ceo/api/breed/" + userInputsplit + "/images/random",
			method: "GET"
		}).then(function (response) {
			console.log(response.message[0])

			$(".content").show();

			var dogImg = $('img');

			dogImg.attr("src", response.message)
			$(".imgContainer").append(dogImg)
			console.log(response);
		})
	};

	function split(userVariable) {
		var str = userVariable
		var res = str.split(" ");
		if (res.length > 1) {
			var newString = res[1] + "/" + res[0];
			console.log(newString);
			return newString
		}
		else {
			return userVariable
		}
	}

	function info() {
		$.ajax({
			url: "https://enigmatic-beyond-33445.herokuapp.com/cors",
			method: "POST",
			data: {
				url: "https://api.thedogapi.com/v1/breeds",
				method: "GET",
				key: "6a00bee3031c82ad63a1aae5555a6e3b",
			}
		}).then(function (response) {
			console.log(response)
			console.log(userInput)
			for (var i = 0; i < response.length; i++) {
				if (userInput.toLowerCase() === response[i].name.toLowerCase()) {
					console.log(response[i].bred_for);

					var infoDiv = $("<div>")
					infoDiv.addClass('dogInfo');
					var breedName = $("<p>").text("Name: " + response[i].name);

					var breedInfo = $("<p>").text("Bred For: " + response[i].bred_for)
					var breedGroup = $("<p>").text("Breed Group: " + response[i].breed_group)
					var breedHeight = $("<p>").text("Height: " + response[i].height.imperial + " in")
					var lifeSpan = $("<p>").text("LifeSpan: " + response[i].life_span)
					var temperament = $("<p>").text("Temperament: " + response[i].temperament);

					infoDiv.append(breedName);
					infoDiv.append(breedInfo);
					infoDiv.append(breedGroup);
					infoDiv.append(breedHeight);
					infoDiv.append(lifeSpan);
					infoDiv.append(temperament);

					$(".imgContainer").append(infoDiv);
				}
			}
		})
	};
});