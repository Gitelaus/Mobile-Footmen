class Unit extends Entity{
    constructor(x=0, y=0){
        super(entities.unit.default.image, x, y);
        this.zindex = 1;
        this.owner = 0;

        // These describe the position which the unit will move towards constantly.
        this.target_x = 50;
        this.target_y = 100;



    }

    update(deltaTime){
        if(this.target_x != -1 && this.target_y != -1){
            this.move(deltaTime);
        }
    }

    move(deltaTime){
        var dx = this.target_x - this.sprite.x;
        var dy = this.target_y - this.sprite.y;
        var angle = Math.atan2(dy, dx);
        var x_velocity = (deltaTime) * Math.cos(angle);
        var y_velocity = (deltaTime) * Math.sin(angle);
        this.sprite.x += x_velocity;
        this.sprite.y += y_velocity;
    }
}