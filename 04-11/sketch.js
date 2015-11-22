function setup() {
	var canvas = createCanvas(480, 120);
	canvas.parent("canvas");
	background(200);
	noStroke();
}

function draw() {
	for (var y = 0; y < height+45; y += 40){
		fill(255, 140);
		ellipse(0, y, 40, 40);
		}
	for (var x = 0; x < width+45; x += 40){
		fill(255, 140);
		ellipse(x, 0, 40, 40);
	}
}
