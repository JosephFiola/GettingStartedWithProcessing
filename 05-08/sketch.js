var x = 0;
var easing = 0.01;
var diameter = 12;

function setup() {
  var canvas = createCanvas(480, 120);
  canvas.parent("canvas");
  stroke(0,100);
  fill(255,100);
  
background(200);
  
  
}

function draw() {
	var targetX = mouseX;
	x += (targetX - x) * easing;
	ellipse(x, 40, 12, 12);
	println(targetX + " : " + x);
}
