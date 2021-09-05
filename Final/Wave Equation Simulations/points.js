function Points(omega,color1,speed,Equation,omegaSpeed,radius) {
    if(Equation == 1){
        this.zStart = 1
        this.omegaDir = -1
    }
    if(Equation == 2){
        this.zStart = -1
        this.omegaDir = -1
    }
    if(Equation == 3){
        this.zStart = 1
        this.omegaDir = 1
    }
    if(Equation == 4){
        this.zStart = -1
        this.omegaDir = 1
    }
    this.z = -height*this.zStart;
    this.zSpeed = speed;
    this.total = 0;
    this.omega = omega
    this.omegaSpeed = omegaSpeed*this.omegaDir
    this.radius = radius
    this.update = function() {
      this.omega += this.omegaSpeed
      this.x = this.radius*100*cos(this.omega)
      this.y = this.radius*100*sin(this.omega)
      this.z += this.zSpeed*this.zStart
      if(this.z > height||this.z<-height){
          this.z = -height
          this.omega = omega
      }
    };
  
    this.show = function() {
      stroke(color1);
      strokeWeight(10)
      point(this.x, this.y, this.z);
    };
  }