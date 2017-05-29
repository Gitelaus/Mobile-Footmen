class Unit extends Entity{
    constructor(x=0, y=0){
        super(entities.unit.default.image, x, y);
        this.zindex = 1;
        this.owner = 0;
    }
    update(deltaTime){

    }
}