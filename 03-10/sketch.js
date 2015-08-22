function setup() {
	createCanvas(480, 120);
	background(210); //light gray background to make it visible in this example
}

function draw() {
	rect(160, 30, 260, 20);
	// the ellipse draws on top of the ellipse
	// because it comes after in the code
	ellipse(140, 0, 190, 190);
	}