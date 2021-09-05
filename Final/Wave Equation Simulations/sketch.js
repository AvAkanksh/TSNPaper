var wave1 = []
var wave2 = []
var speed 
var i
var helix
var phase
var Equation
var omegaSpeed
var Radius

function setup() {
  
  Radius = createSlider(0 , 30 , 10)
  omegaSpeed = createSlider(0 , 50 , 10)
  speed = createSlider(2 , 8 , 4)
  phase = createSlider(0 , 2*PI , PI)
  helix = createRadio()
  helix.option('Single Helix',1)
  helix.option('Double Helix',2)
  textAlign(CENTER)
  Equation = createRadio()
  Equation.option('Ae^i(wt-kx)   ',1)
  Equation.option('Ae^i(wt+kx)   ',2)
  Equation.option('Ae^i(-wt-kx)  ',3)
  Equation.option('Ae^i(-wt-kx)  ',4)
  textAlign(CENTER)
  Radius.input(startOver)
  speed.input(startOver)
  phase.input(startOver)
  helix.input(startOver)
  omegaSpeed.input(startOver)
  Equation.input(startOver)
  createCanvas(800,800,WEBGL);
  count = 0
}
  
function draw(){
  background(255);
  if(count<199){
    wave1[count]=new Points(0,'red',speed.value(),Equation.value(),omegaSpeed.value()/100,Radius.value()/20)
    if(helix.value() == 2)
    {
      wave2[count]=new Points(phase.value(),'blue',speed.value(),Equation.value(),omegaSpeed.value()/100,Radius.value()/20)
    }
  }
  count+=1
  for(var i = 0 ; i<wave1.length ; i++){
    wave1[i].update()
    wave1[i].show()   
    if(helix.value() == 2){
      wave2[i].update()
      wave2[i].show() 
      stroke(150,150,150)
      if(i%2==0){
        
        strokeWeight(5)
        line(wave1[i].x,wave1[i].y,wave1[i].z,wave2[i].x,wave2[i].y,wave2[i].z)   
      }
    }
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
  wave1= []
  wave2 = []
  count = 0
}