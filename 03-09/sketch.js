function setup() {
		var canvas = createCanvas(480, 120);
	canvas.parent("canvas");
	background(210); //light gray background to make it visible in this example
}

function draw() {
	ellipse(140, 0, 190, 190);
	// the rectangle draws on top of the ellipse
	// because it comes after in the code
	rect(160, 30, 260, 20);
	}