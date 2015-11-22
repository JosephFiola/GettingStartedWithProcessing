function setup() {
	var canvas = createCanvas(480, 120);
	canvas.parent("canvas");
	background(200);
}

function draw() {
	strokeWeight(8);
	for (var i = 20; i < 400; i += 60){
		line(i, 40, i + 60, 80);
	}
}