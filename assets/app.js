
    
$("#submit-button").on("click", function() {
	event.preventDefault()
	// $(".mainSearch").hide();
	var userInput = $("#userInput").val().trim();
	console.log(userInput);
	call(userInput);
	info();

});


function call(userInput) {
	$.ajax({
		url: "https://dog.ceo/api/breed/"+ userInput + "/images/random",
		method: "GET"
	}).then(function (response) {
		console.log (response.message[0])
		// console.log (response[5].message[0]) // dog breed "hound"




		$(".content").show();
		

	
		var dogImg = $('img');
								
		dogImg.attr("src", response.message)
		$(".imgContainer").append(dogImg)


		console.log(response);
	})	
};

function info() {

	$.ajax({
		url: "https://enigmatic-beyond-33445.herokuapp.com/cors",
		method:"POST",
		data: {
			url: "hhttps://thedogapi.com/v1./breed_id/" + userInput + "/?api_key=15528f27-5320-4277-84ae-f1b588dee2b6",
			method: "GET",
			key: "6a00bee3031c82ad63a1aae5555a6e3b",
		}
	}).then(function (response){
		console.log(response)
	})

};
