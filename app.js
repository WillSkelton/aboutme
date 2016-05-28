
var userName = prompt("Hello! What's your name?");
var wantsToPlay = prompt("Hello " + userName + "!. Would you like to play a game? (Yes/no)").toLowerCase();
if (wantsToPlay === "yes") {
	var score = 0.0;
	var userGuess = prompt("Poor people have it. Rich people need it. If you eat it you die. What is it? ").toLowerCase();
	if(userGuess === "nothing"){
		score++;
		alert("Correct");
	}

	var userGuess = prompt("I'm tall when I'm young and I'm short when I'm old. What am I?").toLowerCase();
	if (userGuess === "candle"){
		alert("Correct");
		score++;
	}
	var userGuess = prompt("Mary's father has 5 daughters - Nana, Nene, Nini, Nono. What is the fifth daughters name?").toLowerCase();
	if (userGuess === "mary"){
		alert("Correct");
		score++;
	}

	alert("Now, let's play another game.");

	var numGuesses = 6;

	while(numGuesses > 0){
		var userGuess = prompt(" How old am I? (you have " + numGuesses + " guesses left.)");


		if(userGuess == 19){
			alert("That's it. I'm 19.");
			score++;
			break;
		}
		else if (userGuess > 19) {
			numGuesses--;
			alert("Nope. Too high. You have " + numGuesses + " guesses left.");
		}
		else if (userGuess < 19) {
			numGuesses--;
			alert("Nope. Too low. You have " + numGuesses + " guesses left.");
		}
		else {
			alert("''" + userGuess + "' isn't a number.");
			numGuesses--;
		}

	}

	alert("Now for one more game.");

	var states = ["washington", "ohio", "michigan", "idaho"];

	numGuesses = 6;
	while(numGuesses > 0){
		userGuess = ("Guess one of the states that I've lived in. ");
		if(states.indexOf(userGuess) != -1){
				alert("Yep, I lived in " + userGuess);
				score++;
				break;
		}
		else if (userGuess === "massachusetts") {
			alert("Nope. But my parents met in boston and my middle name is Fenway. You have " + numGuesses + " guesses left.")
			score += 0.5;

		}
		else {
			alert("Nope. You have " + numGuesses + " guesses left.");
			numGuesses--;
		}


	}
	alert("Correct answers: " + states);




	alert("You guessed " + score + " out of 6 correct answers. congratulations!")


}
