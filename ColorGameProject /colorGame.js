var numSquares = 6;
var colors = [];
var pickedColor ;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setUpModeButtons();
	checkWinnig();
	reset();
}// end function 

function setUpModeButtons(){
  // mode buttons events listeners
  for (var i = 0; i < modeButtons.length; i++) {
	  modeButtons[i].addEventListener("click",function(){
	     modeButtons[0].classList.remove("selected");
	     modeButtons[1].classList.remove("selected");
         this.classList.add("selected");
         this.textContent ==="Easy" ? numSquares = 3 : numSquares = 6; // the first is true,second is false
	     reset();
	  });
   }// end for
}// end function

function checkWinnig(){
	for (var i = 0; i < squares.length; i++) {
		// add click listeners to squares
		squares[i].addEventListener("click",function () {
		   // grab color of clicked squares 
		   var clickedColor = this.style.background;
		    // compares color to pickedColor
		    if(clickedColor === pickedColor){
			   messageDisplay.textContent = "Correct"
			   changedColor(clickedColor);
			   resetButton.textContent = "Play Again?";
			   h1.style.background = clickedColor;
		    }else{
			   this.style.background = "#232323";
			   messageDisplay.textContent = "Try Again";
			} 
		}); // end aunonimous function and lsitener
	} // end for loop
}// end fucntion

function reset(){
	// generates all new colors 
	colors = generateRandomColors(numSquares);
	// picked a new randocm color from arrays 
	pickedColor = pickColor();
	// change color display to match picked color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	h1.style.background = "steelblue";
	resetButton.textContent = "News Colors";

	// change color of squares 
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){ // si hay un dato ponlo // si no es null
		squares[i].style.display = "block"; 
		squares[i].style.background = colors[i];			
		}else{ // colors[i] es undefinied //null
		  squares[i].style.display = "none";
		}
	}
}// end function 


resetButton.addEventListener("click",function(){
	reset();
	
});



function changedColor(color){
	//loop throught all squares 
	for (var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;	
	} // end for loop
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length) ;
	return colors[random];

}

function generateRandomColors(num){
	//make an array 
	var arr = []
	//repeat num times
	for (var i = 0; i < num; i++) {
		// get random color and push into array
		arr.push(randomColor());		
	}
	// return the array
	return arr;
}

function randomColor () {
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	// "rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", "+ b + ")";
}





