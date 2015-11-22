function setup() {
  var canvas = createCanvas(480, 120);
  canvas.parent("canvas");
  strokeWeight(30);
}

function draw() {
  background(200);
  stroke(100);
  line(40, 0, 70, height);
  if (mouseIsPressed){
    if (mouseButton == LEFT){
      stroke(255);
      } else {
      stroke(0);
      }
    line(0, 70, width, 50);
  }
}
