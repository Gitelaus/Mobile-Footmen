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
    function Entity(sprite, layer) {
        this.sprite = sprite;
        layer.add(sprite);
    }
    return Entity;
}());
var image_dictionary = [
    {
        name: "Unit",
        url: "resources/unit/unit_level_1.png"
    }
];
var Game = (function () {
    function Game() {
        this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game_container', { preload: this.preload, create: this.create, update: this.update });
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
    };
    Game.prototype.create = function () {
        console.log("create");
        this.entity_list = new Array();
        var unit = new UnitDefault(0, 0, this.layer_1);
    };
    Game.prototype.update = function () {
    };
    return Game;
}());
var game_object = new Game();
var UnitDefault = (function (_super) {
    __extends(UnitDefault, _super);
    function UnitDefault(x, y, layer) {
        var _this = this;
        var sprite = game_object.game.add.sprite(x, y, 'Unit');
        console.log(layer);
        _this = _super.call(this, sprite, layer) || this;
        return _this;
    }
    return UnitDefault;
}(Entity));
//# sourceMappingURL=game.js.map