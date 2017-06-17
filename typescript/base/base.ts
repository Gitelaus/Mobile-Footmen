class Base extends Entity{
    units : Entity[];
    
    // Stats
    unit_max : number;
    unit_spawn_speed : number;

    last_spawn_time : Date;
    
    constructor(x : number, y : number){
        var sprite = game_object.createSprite(x, y, 'Base', 2);
        sprite.scale.set(0.75, 0.75);
        super(sprite);
        this.units = new Array();
        this.unit_max = 4;
        this.unit_spawn_speed = 3;
        this.last_spawn_time = new Date();
    }

    update(deltaTime){
        var current_time = new Date();
        if(this.units.length >= this.unit_max){
            return;
        }
        if(current_time.getTime() - this.last_spawn_time.getTime() > (this.unit_spawn_speed * 1000)){
            var unit : UnitDefault = new UnitDefault(this.sprite.centerX + this.sprite.width / 4, this.sprite.centerY + this.sprite.height / 4);
            game_object.map.entities.push(unit);
            this.units.push(unit);
            this.last_spawn_time = new Date();
        }
    }

    
}