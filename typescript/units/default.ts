class UnitDefault extends Entity{
    constructor(x: number, y: number, layer: Phaser.Group){
        var sprite = game_object.game.add.sprite(x, y, 'Unit');
        console.log(layer);
        super(sprite, layer);  
    }
}