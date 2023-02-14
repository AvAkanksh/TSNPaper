let time = 0;
let wave = [];
let radius = 150;
let t;
let x;
let y;
let z;
let radio;
let factor = 0.75;
let inconsolata;
function preload() {
	inconsolata = loadFont('font.otf');
}

function setup() {
	axis_value = createCheckbox('Axis', true);
	createCanvas(1500, 800, WEBGL);
	textFont(inconsolata);
}

function draw() {
	background(250);

	rotateY(millis() / 10000);
	x = radius * cos(time);
	y = radius * sin(time);
	z = 30 * time - factor * height;
	t = createVector(x, y, z);
	wave.unshift(t);
	push();
	strokeWeight(10);
	push();
	stroke(0, 0, 0);
	beginShape();
	noFill();
	for (let i = 0; i < wave.length; i++) {
		vertex(wave[i].x, wave[i].y, wave[i].z);
	}
	endShape();
	pop();
	push();
	stroke(0, 255, 0);
	beginShape();
	noFill();
	for (let i = 0; i < wave.length; i++) {
		vertex(400, wave[i].y, wave[i].z); //Y-Z Plane projection
	}
	endShape();
	pop();
	push();
	stroke(255, 0, 0);
	beginShape();
	noFill();
	for (let i = 0; i < wave.length; i++) {
		vertex(wave[i].x, 400, wave[i].z); //X-Z Plane projection
	}
	endShape();
	pop();
	pop();

	time += 0.1;
	if (wave.length > 250) {
		wave.pop();
	}
	if (wave[0].z > factor * height) {
		wave = [];
		time = 0;
	}
	// pointLight(255, 0, 255, mouseX, mouseY);
	// ambientMaterial(25, 100, 200);
	// normalMaterial();
	push();
	translate(401, 0, 0);
	rotateY(PI / 2);
	noStroke();
	fill(150);
	// plane(1200, 1200);
	plane(1.5 * height, 1.5 * height);
	pop();
	push();
	translate(0, 401, 0);
	rotateX(PI / 2);
	noStroke();
	fill(100, 200, 255);
	plane(1.5 * height, 1.5 * height);
	pop();
	if (axis_value.checked()) {
		axis();
	}
	orbitControl();

}
// function axis() {
// push();
// strokeWeight(10);
// stroke(255, 0, 0);
// line(0, 0, 0, height, 0, 0); // +ve x-axis
// stroke(100, 0, 0);
// line(-height, 0, 0, 0, 0, 0); // -ve x-axis

// stroke(0, 100, 0);
// line(0, 0, 0, 0, height, 0); // -ve y-axis , this is to eliminate the webgl notation of direction
// stroke(0, 255, 0);
// line(0, -height, 0, 0, 0, 0); // +ve y-axis , this is to eliminate the webgl notation of direction

// stroke(0, 255, 255);
// line(0, 0, 0, 0, 0, height); // +ve z-axis
// stroke(0, 255, 100);
// line(0, 0, -height, 0, 0, 0); // -ve z-axis
// pop();
// }

function axis() {
	push();
	strokeWeight(5);
	translate(400 - 10, 400 - 10, -600);
	strokeWeight(5);
	stroke(255, 0, 0);
	line(0, 0, 0, -height, 0, 0);
	line(0, 0, 0, 0, -height, 0);
	line(0, 0, 0, 0, 0, height + 200);
	textSize(60);
	push();
	rotateY(-PI / 2);
	fill(20, 55, 220);
	text('Z-Axis', height + 200, 0, 0);
	pop();
	push();
	// rotateY(PI);
	fill(20, 55, 220);
	text('Y-Axis', -height - 200, 0, 0);
	// rotateX(PI);
	pop();
	push();
	rotateZ((3 * PI) / 2);
	fill(20, 55, 220);
	text('X-Axis', height, 0, 0);
	pop();
	pop();
}
