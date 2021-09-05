function setup() {
	createCanvas(1600, 800, WEBGL);
	slider = createSlider(1, 10, 1, 1);
}
function draw() {
	background(255);
	orbitControl();
	axis();
}
function axis() {
	push();
	strokeWeight(2);
	stroke(255, 0, 0);
	line(-height, 0, 0, height, 0, 0);
	stroke(0, 255, 0);
	line(0, -height, 0, 0, height, 0);
	stroke(0, 0, 255);
	line(0, 0, -height, 0, 0, height);
	pop();
}
