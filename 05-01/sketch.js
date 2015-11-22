function setup() {
	var canvas = createCanvas(480, 120);
	canvas.parent("canvas");
	fill(255);
	noStroke();
	textSize(16);
}

function draw() {
	background(200);
	
	mText = "I'm drawing";
	
	print(mText);                        // print to console
	print(frameCount);                   // print to console
	
	text(mText, 20, 20, 170, 80);        // print into canvas
	text(frameCount, 20, 40, 170, 180);  // print into canvas

}
