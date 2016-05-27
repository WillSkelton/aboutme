
var wantsToPlay = prompt("Would you like to play a game? (Yes/no)").toLowerCase();
if (wantsToPlay === "yes") {
	var score = 0;
	var userGuess = prompt("Poor people have it. Rich people need it. If you eat it you die. What is it? ").toLowerCase();
	if(userGuess === "nothing"){
		score++;
		var userGuess = prompt("I’m tall when I’m young and I’m short when I’m old. What am I?").toLowerCase();
			if (userGuess === "candle"){
				score++;
				var userGuess = prompt("Mary’s father has 5 daughters – Nana, Nene, Nini, Nono. What is the fifth daughters name?").toLowerCase();
						if (userGuess === "mary"){
							score++;
						}
			}
		alert("You guessed " + score + " out of 3 correct answers. Congradulations!")
	}
}
