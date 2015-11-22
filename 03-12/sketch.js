function setup() {
		var canvas = createCanvas(480, 120);
	canvas.parent("canvas");
	background(210); //light gray background to make it visible in this example
}

function draw() {
	ellipse(75, 60, 90, 90);
	strokeWeight(8);
	ellipse(175, 60, 90, 90);
	ellipse(279, 60, 90, 90);
	strokeWeight(20);
	ellipse(389, 60, 90, 90);
	}