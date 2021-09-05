function Points(omega, color1, speed, Equation, omegaSpeed, radius, zInitial = height) {
    if (Equation == 1) {
        this.zStart = 1
        this.omegaDir = -1
    }
    if (Equation == 2) {
        this.zStart = -1
        this.omegaDir = -1
    }
    if (Equation == 3) {
        this.zStart = 1
        this.omegaDir = 1
    }
    if (Equation == 4) {
        this.zStart = -1
        this.omegaDir = 1
    }
    this.pointColor = color1
    this.z = -zInitial * this.zStart + 0.0001;
    this.zSpeed = speed;
    this.total = 0;
    this.omega = omega
    this.omegaSpeed = omegaSpeed * this.omegaDir
    this.radius = radius
    this.collision = 1
    this.colorChange = true
    this.collisionPoints = []
    this.count = 0
    this.collisionCheck = function(planesBoundaries) {
        if (this.z >= planesBoundaries.z1 || this.z <= planesBoundaries.z2) {
            // for (var i = 0; i < this.collisionPoints.length; i++) {
            //     if ((this.collisionPoints[i].x != this.x) && (this.collisionPoints[i].y != this.y) && (this.collisionPoints[i].z != this.z)) {
            //         this.collisionPoints[this.count] = new createVector(this.x, this.y, this.z)
            //     }
            // }
            this.collisionPoints[this.count] = new createVector(this.x, this.y, this.z)
            this.collision = -this.collision // This is where the particle will get its velocity reversed 
                // This is for changing the Color of the particles (Start)
            if (this.total % 2 == 0) {
                this.colorChange = !(this.colorChange)
                this.total = 0
            }
            if (this.colorChange) {
                this.pointColor = [0, 0, 0]
            } else {
                this.pointColor = color1
            }
            // End of Changing of colors Code (End)
            this.total += 1
        }
    }
    this.update = function() {
        this.x = this.radius * 50 * cos(this.omega)
        this.y = this.radius * 50 * sin(this.omega)
        this.z += this.zSpeed * this.zStart * this.collision // here this.collision will help us in changeing the direction of the particle after collision
        this.omega += this.omegaSpeed
        console.log(this.x, this.y, this.z)
    };

    this.show = function() {
        stroke(this.pointColor);
        stroke(0)
        strokeWeight(10)
        point(this.x, this.y, this.z);
        for (var i = 0; i < this.collisionPoints.length; i++) {
            push()
            stroke(0);
            strokeWeight(15)
            point(this.collisionPoints[i].x, this.collisionPoints[i].y, this.collisionPoints[i].z);
            pop()
        }
    };
}