function setup() {
  var canvas = createCanvas(480, 120);
  canvas.parent("canvas");
}

function draw() {
  background(200);
  if (keyIsPressed){
	  if ((key == 'h') || (key == 'H')) {
		  line(30, 60, 90, 60);
	  }
	  if ((key == 'n') || (key == 'N')) {
		  line(30, 20, 90, 100);
	  }
  }
  line(30, 20, 30, 100);
  line(90, 20, 90, 100);
}