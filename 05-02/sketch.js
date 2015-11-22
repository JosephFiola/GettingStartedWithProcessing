var textPosition = 0;
var startUpText;

function setup() {
	var canvas = createCanvas(480, 400);
	canvas.parent("canvas");
	background(200);
	
	fill(255);
	noStroke();
	textSize(16);
	startUpText = "I'm starting";
	print(startUpText);                           // print to console
	text("I'm starting", 20, 20, 600, 80);        // print into canvas
}

function draw() {
	textPosition++;
	if (textPosition>24)
		{	
			background(200);
			text(startUpText, 20, 20, 600, 80);
			textPosition = 1;
		}
	print("I'm running (frame " + frameCount + ")");
	text ("I'm running (frame " + frameCount + ")", 20, 20+(textPosition*15), 600, 80);
}
