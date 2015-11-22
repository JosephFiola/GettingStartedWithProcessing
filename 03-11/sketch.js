// At the time of writting this code, noSmooth() did not appear to have any effect on the aliasing of objects
//http://forum.processing.org/two/discussion/11525/antialiased-edges-despite-initial-call-to-nosmooth

function setup() {
	var canvas = createCanvas(480, 120);
	canvas.parent("canvas");
	background(210); //light gray background to make it visible in this example
}

function draw() {
	smooth();
	ellipse(140, 60, 90, 90);
	noSmooth();
	ellipse(240, 60, 90, 90);

	}