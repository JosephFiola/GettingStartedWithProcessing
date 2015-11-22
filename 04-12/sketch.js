function setup() {
	var canvas = createCanvas(480, 120);
	canvas.parent("canvas");
	background(200);
	fill(255);
	stroke(100);
}

function draw() {
	for (var y = 20; y <= height-20; y += 10){
		for (var x = 20; x <= width-20; x += 10){
			ellipse(x, y, 4, 4);
			// Draw a line to the center of the display
			line(x,y, width/2, height/2);
		}

	}
}
