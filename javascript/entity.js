class Entity{
    constructor(sprite, x=0, y=0){
        this.setSprite(sprite);
        this.setPosition(x,y);
        this.zindex = 0;
    }
    update(deltaTime){

    }

    setPosition(x, y){
        this.sprite.x = x;
        this.sprite.y = y;
    }

    setSprite(sprite){
        this.sprite = typeof sprite === "object" ? sprite : PIXI.Sprite.fromImage(sprite);
        this.sprite.width = 32;
        this.sprite.height = 32;
    }
}