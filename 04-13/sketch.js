function setup() {
	var canvas = createCanvas(480, 120);
	canvas.parent("canvas");
	background(200);
	fill(255);
	stroke(100);
}

function draw() {
	for (var y = 32; y <= height; y += 8){
		for (var x = 12; x <= width; x += 15){
			ellipse(x + y, y, 16 - y/10.0, 16 - y/10.0);
		}
	}
}
