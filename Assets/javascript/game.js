
$(document).ready(function() {
	//variables
	var secretNumber = 0;
	var winCounter = 0;
	var lossCounter = 0;
	var blue = 0;
	var red = 0;
	var yellow = 0;
	var green = 0;
	var totalScore = 0;

	//Get the game ready to play and prepped to reset
	//Generate a random number between 19-120
	
	var prepGame = function() {    
		totalScore = 0;
        secretNumber = Math.floor(Math.random() * (120 - 19)) + 19; 
        console.log(secretNumber);
    

	//Generate a random number per jewel between 1-12

		blue = Math.floor(Math.random() * 12 - 1 + 1) + 1;
		console.log(blue);
		yellow = Math.floor(Math.random() * 12 - 1 + 1) + 1;
		console.log(yellow);
		red = Math.floor(Math.random() * 12 - 1 + 1) + 1;
		console.log(red);
		green = Math.floor(Math.random() * 12 - 1 + 1) + 1;
		console.log(green);

		$("#secretNumber").html(secretNumber);
    }
	//The player will click a jewel to identify the number assigned to that jewel
	prepGame();
	

	var playGame = function() {
		totalScore = blue + green + red + yellow;
		$("#totalScore").html(totalScore);
		console.log(totalScore);
	}

	var addNumber = function(blue) {
		totalScore = totalScore + addNumber;
	}

		$('#diamond').on("click", function(){
			totalScore += addNumber;
		});

		$('#ruby').on("click", function(){
			playGame(red);
		});

		$('#yellowSapp').on("click", function(){
			playGame(yellow);
		});

		$('#emerald').on("click", function(){
			playGame(green);
		});

	

	playGame();

	//The player will continue to guess (by clicking jewels) until the meet or exceed the random generated number.
	//If, they match the random number, then a one will be added to their overall win score and a note will read 'You Won!'
	//If, they exceed the random number, then a one will be added to the overall loss score and a note will read 'You Lost'

	// if (totalScore === secretNumber) {
	// 	win++ $("winLoss").html("<h3>You won!</h3");
		
	// } else (totalScore > secretNumber) {
	// 	loss++ $("winLoss").html("<h3>You lost...<h3>")
	// }

	//At the end of each game the following numbers will reset/regenerate: the total score and the random generated number/jewel number
	// $(playGame)[0].reset();
	
});

