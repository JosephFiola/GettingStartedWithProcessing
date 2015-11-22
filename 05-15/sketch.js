var x = 0;
var offset = 10;

function setup() {
  var canvas = createCanvas(480, 120);
  canvas.parent("canvas");
  x = width/2;
}

function draw() {
  background(200);
  if (mouseX > x){
	  x += 0.5;
	  offset = -10;
  }
  if (mouseX < x){
	  x -= 0.5;
	  offset = 10;
  }
  line(x, 0, x, height);
  line(mouseX, mouseY, mouseX + offset, mouseY - 10);
  line(mouseX, mouseY, mouseX + offset, mouseY + 10);
  line(mouseX, mouseY, mouseX + offset*3, mouseY);
}
