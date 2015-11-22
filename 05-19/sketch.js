function setup() {
  var canvas = createCanvas(480, 120);
  canvas.parent("canvas");
  textSize(64);
  textAlign(CENTER);
}

function draw() {
  background(200);
  text(key, 60, 80);
}