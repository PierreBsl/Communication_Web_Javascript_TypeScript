abstract class Shape1{
    protected center:Point1;
    constructor(x:number, y:number){
        this.center = new Point1(x,y);
    }
    abstract draw1(context : any) : void;
    setCenter1(center : Point1) : void {
        this.center = center;
    }
    getCenter1() : Point1{
        return this.center;
    }
}