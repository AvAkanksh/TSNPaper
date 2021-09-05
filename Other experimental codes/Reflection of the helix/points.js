function Points(a,z,theta1,theta2){
    this.a = a
    this.zInitial = z
    this.theta1 = theta1
    this.theta2 = theta2
    this.color = [255,100,100]
    this.x = this.a*sin(this.theta2)
    this.y = this.zInitial*tan(this.theta1)+this.a*cos(this.theta2)*cos(this.theta1)
    this.z = this.zInitial - this.a*cos(this.theta2)*sin(this.theta1)
    this.collision  = false
    this.collisionCheck = function(){
        if(this.z >= 0){
            this.collision = true
            this.color = [0,0,0]
        }
    }
    this.update = function(){
        this.zInitial+=1
        this.theta2+=PI/20 
        this.x = this.a*sin(this.theta2)
        this.y = this.zInitial*tan(this.theta1) + this.a*cos(this.theta2)*cos(this.theta1)
        this.z = this.zInitial - this.a*cos(this.theta2)*sin(this.theta1) 
    }
    this.show = function(){
        push()
        stroke(this.color)
        strokeWeight(5)
        if(this.collision){
            push()
            stroke(this.color)
            point(this.x, this.y,-this.z)
        }
        else(
            point(this.x,this.y,this.z)
        )
        pop()
    }
}