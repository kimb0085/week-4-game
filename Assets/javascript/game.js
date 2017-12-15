
$(document).ready(function() {
	//variables
	var secretNumber = 0;
	var winCounter = 0;
	var lossCounter = 0;
	var blueValue = 0;
	var redValue = 0;
	var yellowValue = 0;
	var greenValue = 0;
	var totalScore = 0;

	//Get the game ready to play and prepped to reset
	//Generate a random number between 19-120
	
	var prepGame = function() {    
		totalScore = 0;
        secretNumber = Math.floor(Math.random() * (120 - 19)) + 19; 
        // console.log(secretNumber);
   	

	//Generate a random number per jewel between 1-12
	
		blueValue = Math.floor(Math.random() * (12 - 1)) + 1;
		// console.log(blueValue);
		redValue = Math.floor(Math.random() * (12 - 1)) + 1;
		// console.log(redValue);
		yellowValue = Math.floor(Math.random() * (12 - 1)) + 1;
		// console.log(yellowValue);
		greenValue = Math.floor(Math.random() * (12 - 1)) + 1;
		// console.log(greenValue);

		$("#secretNumber").html(secretNumber);
		$("#totalScore").html(totalScore);
	}
   
	//The player will click a jewel to identify the number assigned to that jewel

	var playGame = function() {

		$('#diamond').on("click", function(){
			totalScore = totalScore + blueValue;
			console.log(blueValue);
			$("#totalScore").html(totalScore);

			if (totalScore === secretNumber) {
				winCounter++ 
				alert("You won!");
				$("#win").html(winCounter);
				prepGame();
			} 

				else if (totalScore > secretNumber) {
					lossCounter++ 
					alert("You lost...");
					$("#loss").html(lossCounter);
					prepGame();
				}
		});

		$('#ruby').on("click", function(){
			totalScore = totalScore + redValue;
			console.log(redValue);
			$("#totalScore").html(totalScore);

			if (totalScore === secretNumber) {
				winCounter++ 
				alert("You won!");
				$("#win").html(winCounter);
				prepGame();
			} 

				else if (totalScore > secretNumber) {
					lossCounter++ 
					alert("You lost...");
					$("#loss").html(lossCounter);
					prepGame();
				}			
		});

		$('#yellowSapp').on("click", function(){
			totalScore = totalScore + yellowValue;
			console.log(yellowValue);
			$("#totalScore").html(totalScore);

			if (totalScore === secretNumber) {
				winCounter++ 
				alert("You won!");
				$("#win").html(winCounter);
				prepGame();
			} 

				else if (totalScore > secretNumber) {
					lossCounter++ 
					alert("You lost...");
					$("#loss").html(lossCounter);
					prepGame();
				}
		});

		$('#emerald').on("click", function(){
			totalScore = totalScore + greenValue;
			console.log(greenValue);
			$("#totalScore").html(totalScore);

			if (totalScore === secretNumber) {
				winCounter++ 
				alert("You won!");
				$("#win").html(winCounter);
				prepGame();
			} 

				else if (totalScore > secretNumber) {
					lossCounter++ 
					alert("You lost...");
					$("#loss").html(lossCounter);
					prepGame();
				}
		});
	}


	playGame();

	//The player will continue to guess (by clicking jewels) until the meet or exceed the random generated number.
	//If, they match the random number, then a one will be added to their overall win score and a note will read 'You Won!'
	//If, they exceed the random number, then a one will be added to the overall loss score and a note will read 'You Lost'

	//At the end of each game the following numbers will reset/regenerate: the total score and the random generated number/jewel number
	

});
