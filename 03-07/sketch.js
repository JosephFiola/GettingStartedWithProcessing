function setup() {
		var canvas = createCanvas(480, 120);
	canvas.parent("canvas00");
	background(210); //light gray background to make it visible in this example
}

function draw() {
	arc(90, 60, 80, 80, 0, HALF_PI);
	arc(190, 60, 80, 80, 0, PI+HALF_PI);
	arc(290, 60, 80, 80, PI, TWO_PI+HALF_PI);
	arc(390, 60, 80, 80, QUARTER_PI, PI+QUARTER_PI);
	}