function setup() {
	var canvas = createCanvas(480, 120);
	canvas.parent("canvas00");
	background(200);
	noStroke();
}

function draw() {
	for (var y = 0; y <= height; y += 40){
		for (var x = 0; x <= width; x += 40){
			fill(255, 140);
			ellipse(x, y, 40, 40);
		}
	}
}
