class SelectionBox extends Entity{
    constructor(x=0, y=0){
        super(new PIXI.Graphics(),x,  y);
        this.width = 40;
        this.height = 40;
        this.zindex = 1000;
        this.redraw();
    }

    setSize(width, height){
        this.width = width;
        this.height = height;
        this.redraw();
    }

    redraw(){
        this.sprite.clear();
        this.sprite.beginFill(0x3d3d3d, 0.4);
        this.sprite.lineStyle(2, 0x000);
        this.sprite.drawRect(this.x, this.y, this.width, this.height);
    }
    

}