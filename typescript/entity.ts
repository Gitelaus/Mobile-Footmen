class Entity{
    sprite : Phaser.Sprite;
    constructor(sprite : Phaser.Sprite){
        this.sprite = sprite;
        game_object.game.physics.enable(this.sprite);
        console.log(this.sprite);
    }

    update(deltaTime){

    }
}