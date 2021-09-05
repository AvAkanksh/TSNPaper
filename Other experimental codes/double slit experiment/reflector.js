function Reflector(x, y, w) {
    this.x = x
    this.y = y
    this.w = w
    this.update = function(x, y, w) {
        this.x = x
        this.y = y
        this.w = w
    }
    this.show = function() {
        push()
        strokeWeight(10)
        stroke(255, 1)
        line(this.x, this.y, this.x + this.w, this.y)
        pop()
    }
}