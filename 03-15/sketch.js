function setup() {
		var canvas = createCanvas(480, 120);
	canvas.parent("canvas");
	background(200);
}

function draw() {
	fill(153);                      // Medium gray
	ellipse(132, 82, 200, 200);     // Gray circle
	noFill();                       // Turn off fill
	ellipse(228, -16, 200, 200);    // Outline circle
	noStroke();                     // Turn off stroke
	ellipse(268, 118, 200, 200);    // Doesn't draw!
	}