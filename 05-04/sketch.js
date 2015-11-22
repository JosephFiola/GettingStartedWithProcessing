function setup() {
	var canvas = createCanvas(480, 120);
	canvas.parent("canvas");
	fill(0, 100);
	noStroke();
	
	background(200);
	
}

function draw() {
	ellipse(mouseX, mouseY, 9, 9);
}
