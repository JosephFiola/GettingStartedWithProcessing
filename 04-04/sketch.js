function setup() {
		var canvas = createCanvas(480, 120);
	canvas.parent("canvas00");
	background(200);
}

function draw() {
	var x = 25;
	var h = 20;
	var y = 25;
	rect(x, y, 300, h);          // top
	x = x + 100;
	rect(x, y + h, 300, h);      // middle
	x = x - 250;
	rect(x, y + h*2, 300, h);    // bottom
	}