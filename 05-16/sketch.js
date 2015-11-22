var x = 120;
var y = 60;
var radius = 12;

function setup() {
  var canvas = createCanvas(480, 120);
  canvas.parent("canvas");
  ellipseMode(RADIUS);
}

function draw() {
  background(200);
  var d = dist(mouseX, mouseY, x, y);
  if (d < radius) {
	  radius++;
	  fill(0);
  } else {
	  fill(255);
  }
  ellipse(x, y, radius, radius);
}

function mousePressed(){
	radius = 12;
}

