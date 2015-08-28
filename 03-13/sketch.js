function setup() {
		var canvas = createCanvas(480, 120);
	canvas.parent("canvas00");
	background(210); //light gray background to make it visible in this example
}

function draw() {
	strokeWeight(12);
	strokeJoin(ROUND);
	rect(40, 25, 70, 70);
	strokeJoin(BEVEL);
	rect(140, 25, 70, 70);
	strokeCap(SQUARE);
	line(270, 25, 340, 95);
	strokeCap(ROUND);
	line(350, 25, 420, 95);

	}