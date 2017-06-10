// This class is for map building.
class Map{

    // These may look exactly the same, but if anyone puts a movable entitiy in the 
    // tile map I'll murder them
    tile_map : Entity[];

    // This is where you put movable entities.
    entities : Entity[];

    constructor(){
        this.tile_map = [];
        this.entities = [];
    }

    /*
    *   If u use this for entities and not tile entities i will rekt you
    */
    addTile(tile : Entity){
         let v = this.tile_map.filter(x => {x.sprite.position == tile.sprite.position});
         if(v.length > 1){
             console.log("If this errors then we're fucked.");
         }
         if(v){
             this.tile_map.splice(this.tile_map.indexOf(v[0]), 1);
         }
         this.tile_map.push(tile);
    }

    removeTile(x : number, y : number){

    }
}