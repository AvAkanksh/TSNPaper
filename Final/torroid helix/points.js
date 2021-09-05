function Points(R,a,theta,relativeFactor,myColor,dir){
    this.R = R
    this.a = a
    this.theta1 = theta
    this.theta2 = theta*relativeFactor
    this.color = myColor
    this.dir = dir
    this.pd = theta
    this.x = (this.R+this.a*cos(this.theta2))*cos(this.theta1+this.pd)
    this.y = this.a*sin(this.theta2)
    this.z = (this.R+this.a*cos(this.theta2))*sin(this.theta1+this.pd)
    this.update= function (factor) {
        this.theta1 =  this.theta1 + PI/(factor*10)*this.dir
        this.theta2 =this.theta1*factor
        this.x = (this.R+this.a*cos(this.theta2+PI/2))*cos(this.theta1+this.pd)
        this.y = this.a*sin(this.theta2+PI/2)
        this.z = (this.R+this.a*cos(this.theta2+PI/2))*sin(this.theta1+this.pd)
    }
    this.show= function(){
        push()
        stroke(this.color)
        strokeWeight(10)
        point(this.x,this.y,this.z)
        pop()
    }
}