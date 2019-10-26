
    
$("#submit-button").on("click", function() {
	event.preventDefault()
	$(".mainSearch").hide();
	var userInput = $("#userInput").val().trim();
	console.log(userInput);
	call(userInput);

});


function call(userInput) {
	$.ajax({
		url: "https://dog.ceo/api/breed/"+ userInput + "/images/random",
		method: "GET"
	}).then(function (response) {
		console.log (response.message[0])
		// console.log (response[5].message[0]) // dog breed "hound"




		$(".content").show();
		// $(".imgContainer").text(response.message[5])

		// 1: first build the image as you want it
		var dogImg = $('img'); // creates the "img" element using jquery
								// <img>
		dogImg.attr("src", response.message)
		// 2: append images to the target
		$(".imgContainer").append(dogImg)


		console.log(response);
	})	
};


