var radius = 50
var p
var L = 100
var pause
var boundaryPoints = []
var j
function setup() {
  // put setup code here
  createCanvas(PI*100, PI*100, WEBGL)
  p = new Particle(radius)
  pause = true
  j = 0
  // frameRate(10)
}

function draw() {
  // put drawing code here
  background(200)
  // Boundaries()
  if(pause){
    p.update()
  }
  p.show()
  if(p.collided){
    p = new Particle(radius)
  }
  axis()
  orbitControl()
  if(p.collided){
    boundaryPoints[j]= createVector(p.x, p.y, p.z)
    j++
  }
  // console.log(boundaryPoints)
  for (var i = 0 ; i < boundaryPoints.length; i++){
    push()
    strokeWeight(5)
    stroke(255,25,0)
    point(boundaryPoints[i].x,boundaryPoints[i].y,boundaryPoints[i].z)
    pop()
  }
}

function axis(){
  strokeWeight(3)
  stroke(255, 0, 0);
  line(0,0,0,20*L,0,0) // +ve x-axis
  stroke(100, 0, 0);
  line(-20*L,0,0,0,0,0) // -ve x-axis


  stroke(0,100, 0);
  line(0,0,0,0,20*L,0) // -ve y-axis , this is to eliminate the webgl notation of direction
  stroke(0,255, 0);
  line(0,-20*L,0,0,0,0) // +ve y-axis , this is to eliminate the webgl notation of direction


  stroke(0,0, 255);
  line(0,0,0,0,0,20*L) // +ve z-axis
  stroke(0,0, 100);
  line(0,0,-20*L,0,0,0) // -ve z-axis
}

function keyPressed(){
  if(keyCode == 32){
    pause =!pause
  }
}

function Boundaries(){
  // push()
  // translate(0, 0, -height)
  // plane(1000)
  // pop()
  push()
  translate(0, 0, height)
  ambientLight(255,255)
  // normalMaterial()
  // specularMaterial(0, 200)
  plane(1000)
  pop()
}
