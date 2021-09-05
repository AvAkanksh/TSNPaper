var R 
var theta1
var theta2
var a 
var relativeOmega
var count 
var wave1 = []
var wave2 = []
var spokes
var dir
function setup() {
relativeOmega = createSlider(1, 20 , 10)
spokes = createRadio()
spokes.option('Without Spokes',1)
spokes.option('With Spokes',2)
createCanvas(800,800,WEBGL)
relativeOmega.input(startOver)
spokes.input(startOver)
R = 200
a = 10
theta1 = 0
theta2 = theta1*relativeOmega.value()
count = 0
dir = 1
}

function draw(){

  background(255)
  // normalMaterial((255,255,0))
  ambientLight(255)
  ambientMaterial(100, 105, 100)
  strokeWeight(0)
  sphere(20)
  // noStroke()
  stroke(255,0,0)
  strokeWeight(10)
  if(count<60*relativeOmega.value()){
    wave1[count]= new Points(R,a,0,relativeOmega.value(),[255 ,0,0],dir)
    wave2[count]= new Points(R,a,PI/2,relativeOmega.value(),[0,255,0],dir)
  }
  console.log(wave1)
  count+= 1
  for(var i = 0; i<wave1.length;i++){
    wave1[i].update(relativeOmega.value())
    wave2[i].update(relativeOmega.value())
    wave1[i].show()
    wave2[i].show()
  }

  axis()
  orbitControl()
}

function axis(){
  strokeWeight(3)
  stroke(255, 0, 0);
  line(0,0,0,height,0,0) // +ve x-axis
  stroke(100, 0, 0);
  line(-height,0,0,0,0,0) // -ve x-axis


  stroke(0,100, 0);
  line(0,0,0,0,height,0) // -ve y-axis , this is to eliminate the webgl notation of direction
  stroke(0,255, 0);
  line(0,-height,0,0,0,0) // +ve y-axis , this is to eliminate the webgl notation of direction


  stroke(0,0, 255);
  line(0,0,0,0,0,height) // +ve z-axis
  stroke(0,0, 100);
  line(0,0,-height,0,0,0) // -ve z-axis
}

function startOver(){
  wave1 = []
  theta2 = theta1*relativeOmega.value()
  count = 0
}