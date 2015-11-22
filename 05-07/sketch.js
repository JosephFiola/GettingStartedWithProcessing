function setup() {
  var canvas = createCanvas(480, 120);
  canvas.parent("canvas");
  stroke(0,100);
}

function draw() {
	var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
	strokeWeight(weight);
	line(mouseX, mouseY, pmouseX, pmouseY);
}
