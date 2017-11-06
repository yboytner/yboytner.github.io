var character = 'X';


//this function handles onclick event
function turn(location){

	//update box with character if its empty
	if(document.getElementById(location).innerHTML == ""){

		//update results div with feedback
	document.getElementById("results").innerHTML = "It's " + character + "'s turn!";

	//switch between X and O
	if(character == 'X'){
		character = 'O';
	}
	else{
		character = 'X';
	}


		//write character in box
		document.getElementById(location).innerHTML = character;
	}

}