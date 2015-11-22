function setup() {
		var canvas = createCanvas(480, 120);
	canvas.parent("canvas");
	background(210); //light gray background to make it visible in this example
}

function draw() {
	quad(158, 55, 199, 14, 392, 66, 351, 107);
	triangle(347, 54, 392, 9, 392, 66);
	triangle(158, 55, 290, 91, 290, 112);
}