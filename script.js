//create a list of strings, to hold harold ball responses
var list = ["yaaas",
"Nah",
"Hell Yea Dude",
"Sorry I forgot the question try again",
"just google it",
"lol idk bro",
"thats kinda a weird question",
"great question",
"error 404 response not found"];

//this function outputs a random number
function randomNum(){
	return Math.floor(Math.random() * 10);
}
//this functions responds with a yes or no to answer a yes or no question
function shakeMagicharoldBall(){
	//alert("test");

	//grab image by id
	document.getElementById("magicharoldball").src="Images/happyharold.jpg";

	//grab the results
	document.getElementById("results").innerHTML=list[randomNum()];

//alert(randomNum()); 

} 