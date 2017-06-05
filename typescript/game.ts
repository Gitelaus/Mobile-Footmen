let image_dictionary : object[] = [
    {
        name:"Unit",
        url:"resources/unit/unit_level_1.png"
    }
] 

class Game{
    constructor(){
        this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game_container', 
                                    {  preload: this.preload, create: this.create, update:this.update});
    }

    game: Phaser.Game;
    
    layer_1 : Phaser.Group;
    layer_2 : Phaser.Group;
    layer_3 : Phaser.Group;
    layer_4 : Phaser.Group;

    entity_list : Entity[];

    preload(){
        console.log("preload");
        image_dictionary.forEach(image => {
            this.game.load.image(image['name'], image['url']);
        });
        this.layer_1 = this.game.add.group();
        this.layer_2 = this.game.add.group();
        this.layer_3 = this.game.add.group();
        this.layer_4 = this.game.add.group();
    }

    create(){
        console.log("create");
        this.entity_list = new Array();
        var unit : UnitDefault = new UnitDefault(0, 0, this.layer_1);
    }

    update(){
    
    }
}

let game_object : Game = new Game();