//create a list of strings, to hold harold ball responses
var list = ["yaaas",
			"Nah",
			"Hell Yea Dude",
			"Totes my dude",
			"just google it",
			"I think so",
			"its gonna be a no for me",
			"great question",
			"error 404 response not found",
			"I dont think so dawg"];

var imageState = "front";

//this function outputs a random number
function randomNum(){
	return Math.floor(Math.random() * 10);
}
//this functions responds with a yes or no to answer a yes or no question
function shakeMagicharoldBall(){
	
	//if the picture is the front side...
	if(imageState == "front"){
		document.getElementById("magicharoldball").src == "images/happyharold.jpg"

		//grab image by id
		document.getElementById("magicharoldball").src="Images/happyharold.jpg";

		//grab the results
		document.getElementById("results").innerHTML=list[randomNum()];
		
		imageState="back";
}
	//else, it's the pictures back side...
	else{
		//go back to the front picture
		document.getElementById("magicharoldball").src="images/harold.jpg";

		//change results paragraph to say something to prompt the user
		//to shake harold again
		document.getElementById("results").innerHTML="Click the Magic Harold to answer your yes or no question";

		imageState = "front";
}



//alert(randomNum()); 

} 