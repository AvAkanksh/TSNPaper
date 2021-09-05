function Particle(radius){
    this.xInitial = floor(random(-100,100))
    this.yInitial = floor(random(-100,100))
    this.x = 0
    this.y = 0
    this.z = -height
    this.radius = radius
    this.angle = random(0,2*PI)
    this.dangle = PI/10
    this.tail = []
    this.boundaryPoint
    this.total = 1
    this.collided = false
    this.tail[0]= createVector(this.x,this.y,this.z)
    this.update = function(){
        for(var i = 0 ; i <this.tail.length-1; i ++){
            this.tail[i]= this.tail[i+1]
        }
        this.tail[this.total-1] = createVector(this.x, this.y, this.z)
        this.angle += this.dangle
        this.z +=this.radius*this.dangle
        this.x = this.radius*cos(this.angle) +this.xInitial
        this.y = this.radius*sin(this.angle) +this.yInitial
        if(this.z >= height-0.00001){
            boundaryPoints[j]= new createVector(this.x,this.y , this.z)
            j++
            this.collided = true
            this.z = -height

        }
        if(this.total<50){
            this.total ++
        }
        if(this.angle==2*PI){
            this.angle = 0
        }
    }
    this.show = function(){
        strokeWeight(5)
        stroke(0)
        for (var i = 0 ; i<this.tail.length;i ++ ){
            // rotateX(this.angle )
            point(this.tail[i].x,this.tail[i].y,this.tail[i].z)
        }
    }
}