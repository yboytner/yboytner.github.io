//draws random circle in clickPanel
function randomCircle(){
	
	//randomly get top positions
	document.getElementById("circle").style.top = randomNum();
	//randomly get left positions
	document.getElementById("circle").style.left = randomNum();
	//update position of circle

}

//handles onclick event

//when a random circle is click in clickPanel, it dissapears
//then generates a new random circle
function clickCircle(){

	//circle is clicked
	document.getElementById('circle').style.visibility = "hidden";	

	randomCircle();

	//generates a random circle
	document.getElementById("circle").style.visibility = "visible";
}

function randomNum() {

return Math.floor (Math.random() * 200)

}
