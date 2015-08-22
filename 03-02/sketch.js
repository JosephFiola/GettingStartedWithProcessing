function setup() {
	createCanvas(480, 120);
	background(210); //light gray background to make it visible in this example
}

var xPos = 240;
var yPos = 60;

function draw() {
	point(xPos,yPos);
}

function mousePressed(){
	xPos = mouseX;
	yPos = mouseY;
}

