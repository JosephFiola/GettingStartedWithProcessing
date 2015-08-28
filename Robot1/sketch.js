function setup() {
	var canvas = createCanvas(720, 480);
	canvas.parent("canvas00");
	background(200);
}

function draw() {
	strokeWeight(2);
	ellipseMode(RADIUS);
	
	//neck
	stroke(102);                 // gray stroke
	line(266, 257, 266, 162);    // left
	line(276, 257, 276, 162);    // middle
	line(286, 257, 286, 162);    // right
	
	//antennae
	line(276, 155, 246, 112);    // small
	line(276, 155, 306, 56);     // tall
	line(276, 155, 342, 170);    // medium
	
	//body
	noStroke();
	fill(102);                   // fill gray
	ellipse(264, 377, 33, 33);   // antigravity orb
	fill(0);                     // black
	rect(219, 257, 90, 120);     // main body
	fill(102);                   // gray
	rect(219, 274, 90, 6);       // gray stripe
	
	//head
	fill(0);                     // black
	ellipse(276, 155, 45, 45);   // head
	fill(255);                   // white
	ellipse(288, 150, 14, 14);   // large eye
	fill(0);                     // black
	ellipse(288, 150, 3, 3);     // pupil
	fill(153);                   // gray
	ellipse(263, 148, 5, 5);     // small eye 1
	ellipse(296, 130, 4, 4);     // small eye 2
	ellipse(305, 162, 3, 3);     // small eye 3

	}