function setup() {
	var canvas = createCanvas(480, 120);
	canvas.parent("canvas00");
	background(200);
}

function draw() {
	strokeWeight(2);
	for (var i = 20; i < 400; i += 20){
		line(i, 0, i + i/2, 80);
		line(i + i/2, 80, i*1.2, 120);
	}
}
