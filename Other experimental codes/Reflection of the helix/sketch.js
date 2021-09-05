var wave = []
var count 
var projectionAngle
var plane
function setup() {
  createCanvas(600,600,WEBGL)
  projectionAngle = createSlider(-PI/3, PI/3, 0 , 0)
  projectionAngle.input(startOver)
  count = 0
}

function draw(){
  background(255)
  if(count<200){
    wave[count] = new Points(10,-height/2,projectionAngle.value(),0) 
  }
  count++
  for (var i = 0 ; i<wave.length ; i++){
    wave[i].update()
    wave[i].collisionCheck()
    wave[i].show()
  }
  orbitControl()
  axis()
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
  wave = []
  count = 0
}