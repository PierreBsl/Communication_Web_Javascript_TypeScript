class Rectangle1 extends Shape1{
    protected width : number;
    protected height : number;
    constructor(w : number, h:number){
        super(0,0);
        this.width = w;
        this.height = h;
    }

    draw1(context : any) : void{
        context.beginPath();
        context.rect(this.getCenter1().getX(),this.getCenter1().getY(),this.width, this.height);
        context.stroke();
    }
}
