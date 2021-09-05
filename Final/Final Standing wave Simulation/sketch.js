var wave1 = [];
var wave2 = [];
var speed;
var i;
var helix;
var phase;
var Equation1;
var Equation2;
var omegaSpeed;
var Radius;
var maxCount;
var planeSetup;
var planesBoundaries;
var distance = 80;
var click;
var spokes;

function setup() {
	Radius = createSlider(0, 3, 1, 0); // Radius(Magnitude of A)
	omegaSpeed = createSlider(0, PI / 2, PI / 20, 0); // omegaspeed(Magnitude of w)
	speed = createSlider(0, 4, 4, 0); // speed(Magnitude of k)
	phase = createSlider(0, 2 * PI, PI, 0); // phase (Phase Difference)
	maxCount = createSlider(1, 10, 1); // maxCount( L )
	helix = createRadio();
	helix.option('Single Helix', 1);
	helix.option('Double Helix', 2);
	spokes = createRadio();
	spokes.option('Without Spokes', 1);
	spokes.option('With Spokes', 2);
	textAlign(CENTER);
	Equation1 = createRadio();
	Equation1.option('Ae^i(wt-kx)   ', 1);
	Equation1.option('Ae^i(wt+kx)   ', 2);
	Equation1.option('Ae^i(-wt-kx)  ', 3);
	Equation1.option('Ae^i(-wt+kx)  ', 4);
	textAlign(CENTER);
	Equation2 = createRadio();
	Equation2.option('Ae^i(wt-kx)   ', 1);
	Equation2.option('Ae^i(wt+kx)   ', 2);
	Equation2.option('Ae^i(-wt-kx)  ', 3);
	Equation2.option('Ae^i(-wt+kx)  ', 4);
	textAlign(CENTER);
	planeSetup = createRadio();
	planeSetup.option('NO Plane', 1);
	planeSetup.option('WITH Plane', 2);
	textAlign(CENTER);
	Radius.input(startOver);
	speed.input(startOver);
	phase.input(startOver);
	helix.input(startOver);
	omegaSpeed.input(startOver);
	Equation1.input(startOver);
	Equation2.input(startOver);
	maxCount.input(startOver);
	planeSetup.input(startOver);
	spokes.input(startOver);
	createCanvas(600, 600, WEBGL);
	planesBoundaries = new Planes(distance * maxCount.value());
	count = 0;
	click = true;
}

function draw() {
	background(255);

	if (count <= 80 * maxCount.value()) {
		// wave1[count]=new Points(0,[255,0,0],speed.value(),Equation1.value(),omegaSpeed.value(),Radius.value(),(distance)*maxCount.value())
		wave1[count] = new Points(
			0,
			[255, 0, 0],
			speed.value() * (2 / maxCount.value()),
			Equation1.value(),
			omegaSpeed.value(),
			Radius.value(),
			distance
		);
		if (helix.value() == 2) {
			// wave2[count]=new Points(phase.value(),[0,0,255],speed.value(),Equation2.value(),omegaSpeed.value(),Radius.value(),distance*maxCount.value())
			wave2[count] = new Points(
				phase.value(),
				[0, 0, 255],
				speed.value() / maxCount.value(),
				Equation2.value(),
				omegaSpeed.value(),
				Radius.value(),
				distance
			);
		}
	}
	count += 1;

	for (var i = 0; i < wave1.length; i++) {
		if (planeSetup.value() == 2) {
			planesBoundaries.show();
		}

		if (click == true) {
			wave1[i].update();
		}
		wave1[i].show();
		wave1[i].collisionCheck(planesBoundaries);
		if (helix.value() == 2) {
			wave2[i].update();
			wave2[i].show();
			if (spokes.value() == 2) {
				if (i % 2 == 0) {
					strokeWeight(3);
					stroke(150, 150, 150);
					line(wave2[i].x, wave2[i].y, wave2[i].z, 0, 0, wave2[i].z);
				}
			}
		}
		if (spokes.value() == 2) {
			stroke(150, 150, 150);
			strokeWeight(3);
			line(wave1[i].x, wave1[i].y, wave1[i].z, 0, 0, wave1[i].z);
		}
	}
	orbitControl();
	axis();
}

function axis() {
	strokeWeight(3);
	stroke(255, 0, 0);
	line(0, 0, 0, 20 * distance, 0, 0); // +ve x-axis
	stroke(100, 0, 0);
	line(-20 * distance, 0, 0, 0, 0, 0); // -ve x-axis

	stroke(0, 100, 0);
	line(0, 0, 0, 0, 20 * distance, 0); // -ve y-axis , this is to eliminate the webgl notation of direction
	stroke(0, 255, 0);
	line(0, -20 * distance, 0, 0, 0, 0); // +ve y-axis , this is to eliminate the webgl notation of direction

	stroke(0, 0, 255);
	line(0, 0, 0, 0, 0, 20 * distance); // +ve z-axis
	stroke(0, 0, 100);
	line(0, 0, -20 * distance, 0, 0, 0); // -ve z-axis
}

function startOver() {
	background(255);
	wave1 = [];
	wave2 = [];
	// planesBoundaries = new Planes(distance*maxCount.value())
	planesBoundaries = new Planes(distance);
	count = 0;
}

function keyPressed() {
	if (keyCode == 32) {
		click = !click;
	}
}
