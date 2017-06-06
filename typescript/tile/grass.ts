class Grass extends Entity{
    constructor(x : number, y: number){
        var sprite = game_object.createSprite(x, y, Math.random() > 0.5 ? "Grass_1" : "Grass_2", 1);
        sprite.scale.set(0.5, 0.5);
        super(sprite);
    }
}