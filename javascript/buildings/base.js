class Base extends Entity{
    constructor(x=0, y=0){
        super(entities.building.base.image, x, y);
        this.last_unit_creation_time = new Date().getTime();
        this.unit_creation_cooldown = 2000;
        this.zindex = 1;
    }

    update(deltaTime){
        var now = new Date().getTime();
        var difference = now - this.last_unit_creation_time;
        if(difference > this.unit_creation_cooldown){
            let unit = new Unit(this.sprite.x + 50, this.sprite.y + 40);
            addEntity(unit);
            this.last_unit_creation_time = new Date().getTime();
        }
    }
}