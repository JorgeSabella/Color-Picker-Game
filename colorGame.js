var numberOfSquares = 6; // starts at medium level
var colors = []//declaration of array of colors
var pickedColor; 
var squares = document.querySelectorAll(".square"); //selcting the squares divs and saving them in all the variable squares
var colorDisplay = document.querySelector("#colorDisplay"); //selecting the h1 span for changing its content to the color that we want to find
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset"); 
var hexadecimal = document.querySelector("#hexadecimal"); // Button to change between Hex and RGB
var modeButtons = document.querySelectorAll(".mode"); // Easy Medium and Hard Buttons
var bool = true;
//function to initialize all the game
init();

function init(){
	//mode buttons event listeners
	setupModeButtons();
	//function to add content and funcionality of the squares divs
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			for(var j = 0; j < modeButtons.length; j++){
				modeButtons[j].classList.remove("selected");
			}
			this.classList.add("selected");
			if(this.textContent === "Easy"){
				numberOfSquares = 3;
			} else if (this.textContent === "Medium"){
				numberOfSquares = 6;
			} else{
				numberOfSquares = 9;
			}
			//figure pu how many squares to show
			//pick new colors
			//pick a new pickedColor
			//update page to reflect changes
			reset();
		});
	}
}
function setupSquares(){
	for(var i = 0; i < squares.length; i++){	
		//adding the event for picking colors
		squares[i].addEventListener("click" , function(){		
			var clickedColor = this.style.backgroundColor; //grab color of clicked square
			if(hexadecimal.textContent === "Hexadecimal"){
				if(clickedColor === pickedColor){ //compare color to pickedColor
					messageDisplay.textContent = "Correct!";
					changeColors(clickedColor);
					h1.style.backgroundColor = clickedColor;
					resetButton.textContent = "Play Again?";
				}else{
					this.style.backgroundColor = "#232323";
					messageDisplay.textContent = "Try Again";
				}
			} else{
				if(clickedColor === createRgbString(pickedColor)){ //compare color to pickedColor
					messageDisplay.textContent = "Correct!";
					changeColors(clickedColor);
					h1.style.backgroundColor = clickedColor;
					resetButton.textContent = "Play Again?";
				}else{
					this.style.backgroundColor = "#232323";
					messageDisplay.textContent = "Try Again";
				}
			}
		});
	}
}
function checkIfWinner(clickedColor){
	if(clickedColor === pickedColor){ //compare color to pickedColor
		messageDisplay.textContent = "Correct!";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
		resetButton.textContent = "Play Again?";
	}else{
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";
	}
}

function reset(){
	//generate new colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random colo from array
	pickedColor = pickedRandomColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor; //changing the span content
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function(){
	reset();
});

hexadecimal.addEventListener("click", function(){
	//if that serves as a switch button to change modes
	if(this.textContent === "Hexadecimal"){
		this.textContent = "rgb";
		bool = true;

	} else{
		this.textContent = "Hexadecimal";
		bool = false;
	}
	reset();
})


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
	if (hexadecimal.textContent === "Hexadecimal"){
		var string = "rgb(";
		string += generateRandomNumber(256) + ", ";
		string += generateRandomNumber(256) + ", ";
		string += generateRandomNumber(256) + ")"; 
		return string;
	} else {
		var string = "#";
		for(var i = 0; i < 6; i++){
			string += generateRandomNumber(16).toString(16);
		}
		return string;
	}
}

function createRgbString(hex){
	var rbgObject = hexToRgb(hex);
	var string = "rgb(";
	string += rbgObject.r + ", ";
	string += rbgObject.g + ", ";
	string += rbgObject.b + ")"; 
	return string;
}

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}