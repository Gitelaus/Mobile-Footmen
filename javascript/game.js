var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Entity = (function () {
    function Entity(sprite) {
        this.sprite = sprite;
    }
    Entity.prototype.update = function (deltaTime) {
    };
    return Entity;
}());
var image_dictionary = [
    {
        name: "Unit",
        url: "resources/unit/unit_level_1.png"
    },
    {
        name: "Base",
        url: "resources/base/base.png"
    },
    {
        name: "Grass_1",
        url: "resources/tile/grass_tile_1.png"
    },
    {
        name: "Grass_2",
        url: "resources/tile/grass_tile_2.png"
    }
];
var Game = (function () {
    function Game() {
        this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game_container', {
            preload: this.preload.bind(this),
            create: this.create.bind(this),
            update: this.update.bind(this)
        });
    }
    Game.prototype.preload = function () {
        var _this = this;
        console.log("preload");
        image_dictionary.forEach(function (image) {
            _this.game.load.image(image['name'], image['url']);
        });
        this.layer_1 = this.game.add.group();
        this.layer_2 = this.game.add.group();
        this.layer_3 = this.game.add.group();
        this.layer_4 = this.game.add.group();
        this.selectionbox = this.game.add.graphics(0, 0, this.layer_4);
    };
    Game.prototype.create = function () {
        console.log("create");
        this.entity_list = new Array();
        for (var x = 0; x < 30; x++) {
            for (var y = 0; y < 30; y++) {
                new Grass(x * 32, y * 32);
            }
        }
        var unit = new UnitDefault(0, 0);
        this.entity_list.push(unit);
        var base = new Base(0, 0);
        this.entity_list.push(base);
    };
    Game.prototype.createSprite = function (x, y, resource_name, layer) {
        var sprite = game_object.game.add.sprite(x, y, resource_name);
        var s_group;
        switch (layer) {
            case 1:
                s_group = this.layer_1;
                break;
            case 2:
                s_group = this.layer_2;
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
    };
    Game.prototype.update = function () {
        var delta_time = this.game.time.elapsed / 1000;
        if (this.game.input.activePointer) {
            console.log("down");
        }
        if (this.game.input.activePointer.justReleased) {
            console.log("up");
        }
        this.entity_list.forEach(function (e) {
            e.update(delta_time);
        });
    };
    return Game;
}());
var game_object = new Game();
var Base = (function (_super) {
    __extends(Base, _super);
    function Base(x, y) {
        var _this = this;
        var sprite = game_object.createSprite(x, y, 'Base', 2);
        sprite.scale.set(0.75, 0.75);
        _this = _super.call(this, sprite) || this;
        _this.units = [];
        _this.unit_max = 4;
        _this.unit_spawn_speed = 1;
        return _this;
    }
    return Base;
}(Entity));
// This class is for map building.
var Map = (function () {
    function Map() {
        this.tile_map = [];
        this.entities = [];
    }
    /*
    *   If u use this for entities and not tile entities i will rekt you
    */
    Map.prototype.addTile = function (tile) {
        var v = this.tile_map.filter(function (x) { x.sprite.position == tile.sprite.position; });
        if (v.length > 1) {
            console.log("If this errors then we're fucked.");
        }
        if (v) {
            this.tile_map.splice(this.tile_map.indexOf(v[0]), 1);
        }
        this.tile_map.push(tile);
    };
    Map.prototype.removeTile = function (x, y) {
    };
    return Map;
}());
var SelectionBox = (function (_super) {
    __extends(SelectionBox, _super);
    function SelectionBox(x, y) {
        var _this = this;
        var sprite = game_object.game.add.graphics(x, y);
        _this = _super.call(this, undefined) || this;
        return _this;
    }
    return SelectionBox;
}(Entity));
var Grass = (function (_super) {
    __extends(Grass, _super);
    function Grass(x, y) {
        var _this = this;
        var sprite = game_object.createSprite(x, y, Math.random() > 0.5 ? "Grass_1" : "Grass_2", 1);
        sprite.scale.set(0.5, 0.5);
        _this = _super.call(this, sprite) || this;
        return _this;
    }
    return Grass;
}(Entity));
var UnitDefault = (function (_super) {
    __extends(UnitDefault, _super);
    function UnitDefault(x, y) {
        var _this = this;
        var sprite = game_object.createSprite(x, y, 'Unit', 3);
        sprite.scale.set(0.75, 0.75);
        _this = _super.call(this, sprite) || this;
        return _this;
    }
    return UnitDefault;
}(Entity));
//# sourceMappingURL=game.js.map