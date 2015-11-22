var x = 280;
var y = -100;
var diameter = 380;


function setup() {
	var canvas = createCanvas(480, 120);
	canvas.parent("canvas");
	fill(100);
}

function draw() {
	background(200);
	ellipse(x, y, diameter, diameter);
}
