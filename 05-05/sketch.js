function setup() {
	var canvas = createCanvas(480, 120);
	canvas.parent("canvas");
	fill(0, 100);
	noStroke();
}

function draw() {
	background(200);
	ellipse(mouseX, mouseY, 9, 9);
}
