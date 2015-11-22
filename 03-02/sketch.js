function setup() {
	var canvas = createCanvas(480, 120);
	canvas.parent("canvas");
	background(200); //light gray background to make it visible in this example
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

function mouseDragged(){
	xPos = mouseX;
	yPos = mouseY;
}

