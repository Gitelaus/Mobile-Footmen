class Tile extends Entity{
    constructor(x=0, y=0){
        // console.log("grass_tile_" + (Math.random() > 0.5 ? "1" : "2"));
        super(entities.tile["grass_tile_" + (Math.random() > 0.5 ? "1" : "2")].image, x, y);
        this.zindex = 0;
    }
}