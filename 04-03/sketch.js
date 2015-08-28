function setup() {
		var canvas = createCanvas(480, 120);
	canvas.parent("canvas00");
	background(200);
}

function draw() {
	line(0,0,width, height);
	line(width,0,0, height);
	ellipse(width/2, height/2, 60, 60);
	}