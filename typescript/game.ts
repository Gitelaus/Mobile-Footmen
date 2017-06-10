let image_dictionary : object[] = [
    {
        name:"Unit",
        url:"resources/unit/unit_level_1.png"
    },
    {
        name:"Base",
        url:"resources/base/base.png"
    },
    {
        name:"Grass_1",
        url:"resources/tile/grass_tile_1.png"
    },
    {
        name:"Grass_2",
        url:"resources/tile/grass_tile_2.png"
    }
] 

class Game{
    constructor(){
        this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game_container', {
            preload: this.preload.bind(this),
            create: this.create.bind(this),
            update:this.update.bind(this)});
    }

    game: Phaser.Game;
    
    layer_1 : Phaser.Group;
    layer_2 : Phaser.Group;
    layer_3 : Phaser.Group;
    layer_4 : Phaser.Group;

    entity_list : Entity[];

    selectionbox : Phaser.Graphics;

    preload(){
        console.log("preload");
        image_dictionary.forEach(image => {
            this.game.load.image(image['name'], image['url']);
        });
        this.layer_1 = this.game.add.group();
        this.layer_2 = this.game.add.group();
        this.layer_3 = this.game.add.group();
        this.layer_4 = this.game.add.group();

        this.selectionbox = this.game.add.graphics(0,0, this.layer_4);

    }

    create(){
        console.log("create");
        this.entity_list = new Array();
        for(var x = 0; x < 30; x++){
            for(var y = 0; y < 30; y++){
                new Grass(x * 32, y * 32);
            }
        }
        var unit : UnitDefault = new UnitDefault(0, 0);
        this.entity_list.push(unit);
        var base : Base = new Base(0, 0);
        this.entity_list.push(base);
    }

    createSprite(x : number, y : number, resource_name : String, layer : number){
        var sprite = game_object.game.add.sprite(x, y, resource_name);
        var s_group : Phaser.Group;
        switch(layer){
            case 1:
                s_group = this.layer_1;
                break;
            case 2:
                s_group =  this.layer_2;
                break;
            case 3:
                s_group = this.layer_3;
                break;
            case 4:
                s_group = this.layer_4;
                break;
        }
        s_group.add(sprite);
        return sprite;
    }

    update(){
        var delta_time = this.game.time.elapsed/1000;
        if(this.game.input.activePointer){
            console.log("down");
        }
        if(this.game.input.activePointer.justReleased){
            console.log("up");
        }
        this.entity_list.forEach(e => {
            e.update(delta_time);
        });
    }
}

let game_object : Game = new Game();