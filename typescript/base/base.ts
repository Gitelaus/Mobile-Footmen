class Base extends Entity{
    units : Entity[];
    
    // Stats
    unit_max : number;
    unit_spawn_speed : number;

    
    constructor(x : number, y : number){
        var sprite = game_object.createSprite(x, y, 'Base', 2);
        sprite.scale.set(0.75, 0.75);
        super(sprite);
        this.units = [];
        this.unit_max = 4;
        this.unit_spawn_speed = 1;
    }

    
}