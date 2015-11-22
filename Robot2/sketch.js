var x = 60;
var y = 420;
var bodyHeight = 110;
var neckHeight = 140;
var radius = 45;
var ny = y - bodyHeight - neckHeight - radius;

function setup() {
	var canvas = createCanvas(720, 480);
	canvas.parent("canvas");
	background(200);
	ellipseMode(RADIUS);
	strokeWeight(2);
}

function draw() {	
	//neck
	stroke(102);                 					// gray stroke
	line(x+2, y-bodyHeight, x+2, ny);    			// left
	line(x+12, y-bodyHeight, x+12, ny);    			// middle
	line(x+22, y-bodyHeight, x+22, ny);    			// right
	
	//antennae
	line(x+12, ny, x-18, ny-43);    				// small
	line(x+12, ny, x+42, ny-99);     				// tall
	line(x+12, ny, x+78, ny+15);    				// medium
	
	//body
	noStroke();
	fill(102);                   					// fill gray
	ellipse(x, y-33, 33, 33);   					// antigravity orb
	fill(0);                     					// black
	rect(x-45, y-bodyHeight, 90, bodyHeight-33);	// main body
	fill(102);                   					// gray
	rect(x-45, y-bodyHeight+17, 90, 6);     		// gray stripe
	
	//head
	fill(0);                     					// black
	ellipse(x+12, ny, radius, radius);   			// head
	fill(255);                   					// white
	ellipse(x+24, ny-6, 14, 14);   					// large eye
	fill(0);                     					// black
	ellipse(x+24, ny-6, 3, 3);     					// pupil
	fill(153);                   					// gray
	ellipse(x, ny-8, 5, 5);     					// small eye 1
	ellipse(x+30, ny-26, 4, 4);     				// small eye 2
	ellipse(x+41, ny+6, 3, 3);     					// small eye 3
}