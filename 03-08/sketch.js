function setup() {
		var canvas = createCanvas(480, 120);
	canvas.parent("canvas00");
	background(210); //light gray background to make it visible in this example
}

function draw() {
	arc(90, 60, 80, 80, 0, radians(90));
	arc(190, 60, 80, 80, 0, radians(270));
	arc(290, 60, 80, 80, radians(180), radians(450));
	arc(390, 60, 80, 80, radians(45), radians(225));
	}