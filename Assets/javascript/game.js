
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
	
		blueValue = Math.floor(Math.random() * 12 - 1 + 1) + 1;
		// console.log(blueValue);
		redValue = Math.floor(Math.random() * 12 - 1 + 1) + 1;
		// console.log(redValue);
		yellowValue = Math.floor(Math.random() * 12 - 1 + 1) + 1;
		// console.log(yellowValue);
		greenValue = Math.floor(Math.random() * 12 - 1 + 1) + 1;
		// console.log(greenValue);

		$("#secretNumber").html(secretNumber);
	}
   
	//The player will click a jewel to identify the number assigned to that jewel

	var playGame = function() {

		$('#diamond').on("click", function(){
			totalScore = totalScore + blueValue;
			// console.log(blueValue);
			$("#totalScore").html(totalScore);
		});

		$('#ruby').on("click", function(){
			totalScore = totalScore + redValue;
			// console.log(redValue);
			$("#totalScore").html(totalScore);			
		});

		$('#yellowSapp').on("click", function(){
			// console.log(yellowValue);
			$("#totalScore").html(totalScore);
		});

		$('#emerald').on("click", function(){
			// console.log(greenValue);
			$("#totalScore").html(totalScore);
		});
	}


	playGame();

	//The player will continue to guess (by clicking jewels) until the meet or exceed the random generated number.
	//If, they match the random number, then a one will be added to their overall win score and a note will read 'You Won!'
	//If, they exceed the random number, then a one will be added to the overall loss score and a note will read 'You Lost'

	if (totalScore === secretNumber) {
		win++ 
		$("winLoss").html("<h3>You won!</h3");
		$("#wins").html('Wins: ' + winCounter);
		prepGame();
	} 

	else if (totalScore > secretNumber) {
		loss++ 
		$("winLoss").html("<h3>You lost...<h3>");
		$("#loss").html('Losses: ' + lossCounter);
		prepGame();
	}

	//At the end of each game the following numbers will reset/regenerate: the total score and the random generated number/jewel number
	

});
