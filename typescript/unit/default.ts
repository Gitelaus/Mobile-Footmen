class UnitDefault extends Entity{
    constructor(x: number, y: number){
        var sprite = game_object.createSprite(x, y, 'Unit', 3);
        sprite.scale.set(0.75, 0.75);
        super(sprite);  
    }
}