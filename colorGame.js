var numberOfSquares = 6;
var colors = []//declaration of array of colors
var pickedColor;
var squares = document.querySelectorAll(".square"); //selcting the squares divs and saving them in all the variable squares
var colorDisplay = document.querySelector("#colorDisplay"); //selecting the h1 span for changing its content to the color that we want to find
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

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
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
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
			if(clickedColor === pickedColor){ //compare color to pickedColor
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
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