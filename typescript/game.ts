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

    map : Map;

    selectionbox : Phaser.Graphics;

    preload(){
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
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
        this.map = new Map();
        var base : Base = new Base(0, 0);
        this.map.entities.push(base);
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

    debouce : boolean;
    selection_box : Phaser.Graphics;

    update(){
        var delta_time = this.game.time.elapsed/1000;
        var mouseDown = this.game.input.activePointer.isDown;
        if(mouseDown && !this.debouce){
            if(this.selection_box){
                this.layer_4.removeChild(this.selection_box);
            }
            var pos = this.game.input.activePointer.position;
            this.selection_box = this.game.add.graphics(pos.x, pos.y, this.layer_4);
            this.debouce = true;
        }
        if(!mouseDown && this.debouce){
            if(this.selection_box){
                this.layer_4.removeChild(this.selection_box);
            }
            this.selection_box = undefined;
            this.debouce = false;
        }
        if(this.selection_box){
            var pos = this.game.input.activePointer.position;
            this.selection_box.clear();
            this.selection_box.beginFill(0xFFFFFF, 0.2);
            this.selection_box.drawRect(0,0, pos.x - this.selection_box.x, pos.y - this.selection_box.y);
        }
        this.map.entities.forEach(e => {
            e.update(delta_time);
        });
    }

}

let game_object : Game = new Game();