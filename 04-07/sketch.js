var iSlider;

function setup() {
	var canvas = createCanvas(480, 120);
	canvas.parent("canvas00");
	background(200);
	
	iSlider = createSlider(0, 255, 100);
	iSlider.position(200,205);
	
}

function draw() {
	background(200);
	var sliderValue = iSlider.value()+1;			// added +1 because a value of 0 will cause the script to hang
	strokeWeight(2);
	for (var i = 20; i < 400; i += sliderValue){
		line(i, 40, i + 60, 80);
	}
}
