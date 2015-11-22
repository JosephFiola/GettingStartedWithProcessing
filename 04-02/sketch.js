function setup() {
		var canvas = createCanvas(480, 120);
	canvas.parent("canvas");
	background(200);
}

function draw() {
	var y = 100;
	var d = 130;
	ellipse(75, y, d, d);
	ellipse(175, y, d, d);
	ellipse(275, y, d, d);
	}