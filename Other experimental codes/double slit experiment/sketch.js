hf = 0.9
wf = 0.5
sc = 0.9
var reflector
var rays = []
var theta
var r = 0
var b
var p
var theta
var theta2
var d
var screenpoints = []

function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight, P2D);
    // reflector = new Reflector(0, hf * height, wf * width);
    screen = new Screen(sc * width);
    theta = random(0, atan((wf * width) / (hf * height)));
    theta2 = 0;
    p = new createVector(0, 0);
    p2 = new createVector(0, 0);
    screen.show();
}

function draw() {
    // put drawing code here
    resizeCanvas(windowWidth, windowHeight)
    background(255);
    rays = [];
    for (let i = 0; i < atan((wf * width) / (hf * height)); i = i + PI / 500) {
        r = new Rays(0, mouseY, random(i - 0.1, i + 0.1));
        r.show();
        j = i * 500 / PI;
        rays[j] = r;
    }
    // reflector.update(0, hf * height, wf * width);
    // reflector.show();
    d = 200
    while (d < wf * width) {
        push()
        stroke(0, 0, 255)
        strokeWeight(5)
        point(d, hf * height);
        pop()
        d += 100;
    }
    // screen.update(sc * width);
    // screen.show();
    for (let i = 0; i < screenpoints.length; i++) {
        push()
        fill(255, 0, 0, 10)
            // stroke(255, 0, 0, 10);
            // strokeWeight(5);
        noStroke();
        ellipse(screenpoints[i].x, screenpoints[i].y, 5, 5);
        pop()
    }
}










// b = 50 * sin(theta2);
// p.x = r * sin(theta) + b * cos(theta)
// p.y = r * cos(theta) - b * sin(theta)
// p2.x = r * sin(theta)
// p2.y = r * cos(theta)
// if (p.y > hf * height) {
//     p.y = 2 * hf * height - p.y
//     p2.y = 2 * hf * height - p2.y
// }
// console.log(p.x, p.y);
// strokeWeight(3)
// stroke(255, 0, 0)
//     // point(p2.x, p2.y)
// stroke(0, 255, 0)
// point(p.x, p.y)
// theta2 += PI / 2;
// r += 1