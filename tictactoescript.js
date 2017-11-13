var character = 'X';

//this function handles onclick event
function turn(location){
	//update the box with character, if box is empty
	if(document.getElementById(location).innerHTML == ""){
		//switch between X and O
		if(character == 'X'){
			character = 'O';
		}
		else{
			character = 'X';
		}
		//write character in a box
		document.getElementById(location).innerHTML = character;
		//check for winner after move
		checkWinner();
	}
}

//checks for winner
function checkWinner(){

	//grab HTML of each tic tac toe div (which holds x or o)
	var r1c1 = document.getElementById("r1c1").innerHTML;
	var r1c2 = document.getElementById("r1c2").innerHTML;
	var r1c3 = document.getElementById("r1c3").innerHTML;
	var r2c1 = document.getElementById("r2c1").innerHTML;
	var r2c2 = document.getElementById("r2c2").innerHTML;
	var r2c3 = document.getElementById("r2c3").innerHTML;
	var r3c1 = document.getElementById("r3c1").innerHTML;
	var r3c2 = document.getElementById("r3c2").innerHTML;
	var r3c3 = document.getElementById("r3c3").innerHTML;

	if(((r1c1 == r1c2) && (r1c1 == r1c3) && r1c1 != '') ||
	  ((r2c1 == r2c2) && (r2c1 == r2c3) && r2c1 !='') ||
	  (r3c1 == r3c2) && (r3c1 == r3c3) && r3c1 !=''){
		alert("Winner!");
	}

}