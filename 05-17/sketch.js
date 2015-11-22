var x = 80;
var y = 30;
var w = 80;
var h = 60;

function setup() {
  var canvas = createCanvas(480, 120);
  canvas.parent("canvas");
}

function draw() {
  background(200);
  if ((mouseX > x) && (mouseX < x+w) && (mouseY > y) && (mouseY < y+h)){
	  fill(0);
  } else {
	  fill(255);
  }
  rect(x, y, w, h);
}