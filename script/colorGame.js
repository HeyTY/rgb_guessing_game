var colors = [
"rgb(0,255,61)",
"rgb(0,255,255)",
"rgb(255,255,0)",
"rgb(255,0,0)",
"rgb(99,255,0)",
"rgb(238,83,65)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[2]
var colorDisplay = document.getElementById("colorDisplay")


colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
}


