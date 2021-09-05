function Planes(distance){
    this.x = 0
    this.y = 0
    this.z1 = distance
    this.z2 = -distance
    this.update = function(){

    }
    this.show = function(){
        push()
        translate(this.x, this.y, this.z1)
        plane(height/2,height/2)
        pop()

        push()
        translate(this.x, this.y, this.z2)
        plane(height/2,height/2)
        pop()
    }
}