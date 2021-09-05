function Screen(x) {
    this.x = x
    this.update = function(x) {
        this.x = x
    }
    this.show = function() {
        push()
        strokeWeight(5)
        stroke(255)
        line(this.x, 0, this.x, height)
        pop()
    }
}