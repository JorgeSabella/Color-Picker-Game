//array of colors
var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
];
//selcting the squares divs and saving them in all ina variable squares
var squares = document.querySelectorAll(".square");
//selecting the color that we want to find from the colors array
var pickedColor = colors[3];
//selecting the h1 span for changing its content to the color that we want to find
var colorDisplay = document.querySelector("#colorDisplay");
//changing the span content
colorDisplay.textContent = pickedColor;
//loop to add content and funcionality of the squares divs
for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click" , function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			alert("Correct!");
		}else{
			alert("Wrong!!!");
		}
	});
}