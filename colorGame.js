var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);//array of colors
var squares = document.querySelectorAll(".square"); //selcting the squares divs and saving them in all the variable squares
var pickedColor = pickedRandomColor(); //selecting the color that we want to find from the colors array
var colorDisplay = document.querySelector("#colorDisplay"); //selecting the h1 span for changing its content to the color that we want to find
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickedRandomColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickedRandomColor();
	colorDisplay.textContent = pickedColor;
		for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
});

resetButton.addEventListener("click", function(){
	//generate new colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random colo from array
	pickedColor = pickedRandomColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "#232323";

});

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
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Play Again";
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

function pickedRandomColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(generateRandomColorString());
	}
	//return that array
	return arr;
}

function generateRandomNumber(num){
	return Math.floor(Math.random() * num);
}

function generateRandomColorString(){
	var string = "rgb(";
	string += generateRandomNumber(256) + ", ";
	string += generateRandomNumber(256) + ", ";
	string += generateRandomNumber(256) + ")"; 
	return string;
}