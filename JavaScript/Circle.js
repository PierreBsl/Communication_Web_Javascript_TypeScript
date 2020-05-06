function Circle(radius) {
    this.radius = radius;
}
Circle.prototype.getRadius = function() {
    return this.radius;
}

Circle.prototype.draw=function(ctx){
    console.log("Circle Drawing");
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
}

Circle.prototype = Object.create(Shape.prototype);
