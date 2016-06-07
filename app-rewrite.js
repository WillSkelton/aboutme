// sanitizes input compares user's answer to correct answer
function askRiddle(riddle, rightAnswer, numGuesses){

	// While user has guesses left
	while(numGuesses > 0){
		var userInput = prompt(riddle);
		//if user is correct, increases score, alerts user, and breaks
		if(userInput.toLowerCase() === rightAnswer){
			score++;
			alert("Correct. Score: " + score + ".");
			break;
		// if incorrect, decrease number of guesses, and then go back through the loop
		}else {
			numGuesses--;
			alert("False. '" + userInput + "' is incorrect. You have " + numGuesses + " guesses left.");
		}
	}

	// Gives the user the right answer
	alert("The correct answer was: " + rightAnswer + ".")

}
// asks the user to guess my age
function guessAge(riddle, rightAnswer, numGuesses){
	while(numGuesses > 0){
		var userInput = prompt(riddle);

		//If correct
		if (parseInt(userInput) === rightAnswer){
			score++;
			alert("Correct. Score: " + score + ".");
			break;
		}
		// Too low
		else if (parseInt(userInput) < rightAnswer) {
			numGuesses--;
			alert("Nope. Too low. You have " + numGuesses + " guesses left.");
		}
		// Too high
		else if (parseInt(userInput) > rightAnswer) {
			numGuesses--;
			alert("Nope. Too high. You have " + numGuesses + " guesses left.");
		}
		// not a number
		else {
			numGuesses--;
			alert("'" + userInput + "' is not a number. Score: " + score + ". You have " + numGuesses + " guesses left.");
		}
	}
}
// asks user if they want to play
function askToPlay(userInput){
	if (userInput.toLowerCase() === "yes") {
		return true;
	}else {
		return false;
	}
}

// sanitizes input and checks to see if userGuess is in the array of valid answers
guessState = function(question, stateArray, numGuesses){
	while(numGuesses > 0){
		var userInput = prompt(question).toLowerCase();
		if(stateArray.indexOf(userInput) != -1){
			score++;
			alert("Yep, I lived in " + userInput + ". Score: " + score + ".");
			break;
		}
		else if (userInput === "massachusetts") {
			numGuesses--;
			score += 0.5;
			alert("Nope. But my parents met in boston and my middle name is Fenway. You have " + numGuesses + " guesses left.  Score: " + score)
		}
		else {
			numGuesses--;
			alert("Nope. You have " + numGuesses + " guesses left.");
		}


	}
}

// prints states in a readable manor
printStates = function(stateArray){
	var states = "";
	for(var i = 0; i < stateArray.length; i++){
		states =  states + (stateArray[i] + " ");
	}
	return states;
}

// gets username
getUserName = function(){
	userName = prompt("Hello! What's your name?");
	wantsToPlay = prompt("Hello " + userName + "! Would you like to play a game? (Yes/no)").toLowerCase();
}

score = 0.0;
var userName;
var wantsToPlay;
var userGuess;
var riddle1 = "Poor people have it. Rich people need it. If you eat it you die. What is it? ";
var riddle2 = "I'm tall when I'm young and I'm short when I'm old. What am I?";
var riddle3 = "Mary's father has 5 daughters - Nana, Nene, Nini, Nono. What is the fifth daughters name?";
var adondeEsta = "Name a state that I've lived in.";
var ageRiddle = "How old am I?";
var validStates = ["washington", "ohio", "michigan", "idaho"];

var questions = [riddle1, riddle2, riddle3, ageRiddle, adondeEsta]
var answers = ["nothing", "candle", "mary", 19, validStates];


getUserName();

// if the user wants to play, asks questions
if(askToPlay(wantsToPlay)){

	for (var i = 0; i < questions.length; i++){
		if(i <= 2){
			askRiddle(questions[i], answers[i], 6);
		}
		else if (i === 3){
			guessAge(questions[i], answers[i], 4);
		}
		else{
			guessState(questions[i], answers[i], 6);
			alert("Valid answers were: " + printStates(answers[4]));
		}
	}

}
