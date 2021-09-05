function Planes(distance){
    this.x = 0
    this.y = 0
    this.z1 = (distance-0.1)
    this.z2 = -(distance-0.1)
    // this.z1 = 600
    // this.z2 = -600
    this.update = function(){

    }
    this.show = function(){
        push()
        stroke(0,255,255)
        translate(this.x, this.y, this.z1)
        plane(200,200)
        pop()

        push()
        stroke(0,255,255)
        translate(this.x, this.y, this.z2)
        plane(200,200)
        pop()
    }
}