var x = 215;

function setup() {
  var canvas = createCanvas(480, 120);
  canvas.parent("canvas");
}

function draw() {
  background(200);
  
  if (keyIsPressed){
	  if (keyCode == LEFT_ARROW){
		  print("left arrow");
		  x--;
	  } else if (keyCode == RIGHT_ARROW){
		  x++;
	  }
  }
  rect(x, 45, 50, 50);
}

function keyPressed() {
  return false; // prevent default
}