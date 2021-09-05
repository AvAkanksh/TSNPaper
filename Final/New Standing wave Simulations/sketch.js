let x, y, z, radius, time, factor, time_sign, z_scaling_factor;
let wave1 = [];
let wave2 = [];
let slider, f_rate;
function setup() {
	createCanvas(1200, 800, WEBGL);
	radius = 100;
	time = 0;
	factor = 0.5;
	time_sign = 1;
	z_scaling_factor = 200;
	phase = 0;
	slider = createSlider(1, 10, 1, 1);
	slider.input(startOver);
	f_rate = createSlider(1, 120, 120, 0);
	f_rate.input(startOver);
}

function draw() {
	background(155);
	rotatecamera();
	x = radius * cos(time * time_sign + phase);
	y = radius * sin(time * time_sign + phase);
	z = (z_scaling_factor * time) / slider.value() - (z_scaling_factor * PI) / 2;
	t = new createVector(x, y, z);
	wave1.unshift(t);
	beginShape();
	noFill();
	for (let i = 0; i < wave1.length; i++) {
		push();
		if (time_sign > 0) {
			stroke(255, 100, 10);
		} else {
			stroke(55, 250, 10);
		}
		strokeWeight(5);
		vertex(wave1[i].x, wave1[i].y, wave1[i].z);
		pop();
	}
	endShape();
	x = radius * cos(-time * time_sign + phase);
	y = radius * sin(-time * time_sign + phase);
	z = (z_scaling_factor * time) / slider.value() - (z_scaling_factor * PI) / 2;
	t = new createVector(x, y, z);
	wave2.unshift(t);
	beginShape();
	for (let i = 0; i < wave2.length; i++) {
		push();
		if (time_sign > 0) {
			stroke(255, 100, 10);
		} else {
			stroke(55, 250, 10);
		}
		strokeWeight(5);
		vertex(wave2[i].x, wave2[i].y, wave2[i].z);
		pop();
	}
	endShape();
	for (let i = 0; i < wave1.length; i++) {
		if (i % 4 == 0) {
			push();
			strokeWeight(3);
			stroke(0);
			line(
				wave1[i].x,
				wave1[i].y,
				wave1[i].z,
				wave2[i].x,
				wave2[i].y,
				wave2[i].z
			);
			pop();
		}
	}
	if (wave1.length > slider.value() * 200) {
		wave1.pop();
		wave2.pop();
	}

	if (
		wave1[0].z >= (z_scaling_factor * PI) / 2 + 0.000000000001 ||
		wave1[0].z <= (-z_scaling_factor * PI) / 2 - 0.000000000001
	) {
		if (time_sign > 0) {
		}
		time_sign *= -1;
		wave1 = [];
		wave2 = [];
	}
	orbitControl();
	axis();
	time += slider.value() * (PI / 100) * time_sign;
	frameRate(f_rate.value());
}
function axis() {
	push();
	strokeWeight(3);
	stroke(255, 0, 0);
	line(-height, 0, 0, height, 0, 0);
	stroke(100, 25, 100);
	line(0, -height, 0, 0, height, 0);
	stroke(0, 0, 255);
	line(0, 0, -height, 0, 0, height);
	pop();
}

function rotatecamera() {
	// rotateX(millis() / 10000);
	rotateY(millis() / 20000);
	// rotateZ(millis() / 10000);
}
function startOver() {
	wave1 = [];
	wave2 = [];
	time = 0;
}
