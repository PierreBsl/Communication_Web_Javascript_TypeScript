function Shape(x, y){
    this.center = new Point(x, y);
}
Shape.prototype.setCenter=function(center){
    this.center=center;
}
Shape.prototype.getCenter=function(){
    return this.center;
}
Shape.prototype.draw = function(){};
