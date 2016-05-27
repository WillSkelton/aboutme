
while (true) {
	var wantsToPlay = prompt("Would you like to play a game? (Yes/no)").toLowerCase();
	if (wantsToPlay === "yes") {

	} else if(wantsToPlay === "no") {

		break;

	}else {
		alert('"' + wantsToPlay + '" is not yes or no.');
	}
}
