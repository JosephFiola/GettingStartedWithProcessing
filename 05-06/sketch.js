function setup() {
  var canvas = createCanvas(480, 120);
  canvas.parent("canvas");
  strokeWeight(4);
  stroke(0,100);
  
background(200);
  
  
}

function draw() {
	line(mouseX, mouseY, pmouseX, pmouseY);
}
