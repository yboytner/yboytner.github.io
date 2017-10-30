var character = 'X';

//this function handles onclick event
function turn(location){

	//switch between X and O
	if(character == 'X'){
		character = 'O';
	}
	else{
		character = 'X';
	}
	document.getElementById(location).innerHTML = character;
}