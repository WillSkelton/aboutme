// sanitizes input compares user's answer to correct answer
function askRiddle(riddle, rightAnswer, numGuesses){

	while(numGuesses > 0){
		var userInput = prompt(riddle);
		if(userInput.toLowerCase() === rightAnswer){
			score++;
			alert("Correct. Score: " + score + ".");
			break;
		}else {
			numGuesses--;
			alert("False. '" + userInput + "' is incorrect. You have " + numGuesses + " guesses left.");
		}
	}
	alert("The correct answer was: " + rightAnswer + ".")

}

function guessAge(riddle, rightAnswer, numGuesses){
	var userInput = prompt(riddle);
	if (parseInt(userInput) === rightAnswer){
		score++;
		alert("Correct. Score: " + score + ".");
	}
	else if (parseInt(userInput) < rightAnswer) {
		numGuesses--;
		alert("Nope. Too low. You have " + numGuesses + " guesses left.");
	}
	else if (parseInt(userInput) > rightAnswer) {
		numGuesses--;
		alert("Nope. Too high. You have " + numGuesses + " guesses left.");
	}
	else {
		numGuesses--;
		alert("'" + userInput + "' is not a number. Score: " + score + ".");
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
		var userInput = prompt(question);
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
var ageRiddle = "How old am I?";
var validStates = ["washington", "ohio", "michigan", "idaho"];
var answers = ["nothing", "candle", "mary", 19, stateArray]


getUserName();

if(askToPlay(wantsToPlay)){

	askRiddle(riddle1, answers[0], 6);
	askRiddle(riddle2, answers[1], 6);
	askRiddle(riddle3, answers[2], 6);
	guessAge(ageRiddle, answers[3], 4);

	guessState("Name a state that I've lived in.", answers[4], 6);
	alert("Valid answers were: " + printStates(answers[4]));
}
