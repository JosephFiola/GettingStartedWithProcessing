function setup() {
  var canvas = createCanvas(480, 120);
  canvas.parent("canvas");
}

function draw() {
  background(200);
  line(20, 20, 220, 100);
  if (keyIsPressed){
	  line(220, 20, 20, 100);
  }
}