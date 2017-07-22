//array of colors
var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
];
var squares = document.querySelectorAll(".square"); //selcting the squares divs and saving them in all the variable squares
var pickedColor = pickedColor(); //selecting the color that we want to find from the colors array
var colorDisplay = document.querySelector("#colorDisplay"); //selecting the h1 span for changing its content to the color that we want to find
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor; //changing the span content
//loop to add content and funcionality of the squares divs
for(var i = 0; i < squares.length; i++){	
	squares[i].style.backgroundColor = colors[i]; //adding default colors
	//adding the event for picking colors
	squares[i].addEventListener("click" , function(){		
		var clickedColor = this.style.backgroundColor; //grab color of clicked square
		if(clickedColor === pickedColor){ //compare color to pickedColor
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match fiven color
		squares[i].style.backgroundColor = color;
	}
}

function pickedColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}