function Rays(x, y, theta) {
    this.x = x
    this.y = y
    this.theta = theta
    this.update = function() {

    }
    this.show = function() {
        line(this.x, this.y, this.x + ((hf * height) - this.x) * tan(this.theta), hf * height)
        if ((((hf * height) - this.x) * tan(this.theta) + 200) % 100 <= 1) {
            line(((hf * height) - this.x) * tan(this.theta), hf * height, sc * width, 2 * hf * height - (sc * width - ((hf * height) - this.x) * tan(this.theta)) / tan(this.theta))
            p = createVector(sc * width, 2 * hf * height - (sc * width - ((hf * height) - this.x) * tan(this.theta)) / tan(this.theta) + random(-10, 10))
            screenpoints.push(p)
        }
    }
}