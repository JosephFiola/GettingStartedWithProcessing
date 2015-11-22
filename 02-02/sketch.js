function setup() {
	var canvas = createCanvas(480, 120);
	canvas.parent("canvas");
	background(200);
}

var value=255;
var xPos = 0;
var yPos = 0;

function draw() {
	fill(value);
	ellipse(xPos, yPos, 80, 80);
}

function mousePressed(){
	value = 0;
}
function mouseReleased(){
	value = 255;
}
function mouseMoved(){
	xPos = mouseX;
	yPos = mouseY;
}
function mouseDragged(){
	xPos = mouseX;
	yPos = mouseY;
}
function touchMoved(){
	xPos = touchX;
	yPos = touchY;
}