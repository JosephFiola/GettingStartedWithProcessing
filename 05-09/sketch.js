var x = 0;
var y = 0;
var px = 0;
var py = 0;
var easing = 0.05;

function setup() {
  var canvas = createCanvas(480, 120);
  canvas.parent("canvas");
  background(200);
}

function draw() {
	noStroke();
	fill(200,5);
	rect(0,0, width, height);
	
	stroke(0);
	var targetX = mouseX;
	x += (targetX - x) * easing;
	var targetY = mouseY;
	y += (targetY - y) * easing;
	var weight = dist(x, y, px, py);
	strokeWeight(weight);
	line(x, y, px, py);
	py = y;
	px = x;
}
