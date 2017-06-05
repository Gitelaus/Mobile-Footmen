class Entity{
    sprite : Phaser.Sprite;
    constructor(sprite : Phaser.Sprite, layer : Phaser.Group){
        this.sprite = sprite;
        layer.add(sprite);
    }
}