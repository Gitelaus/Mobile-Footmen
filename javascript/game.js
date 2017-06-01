var canvas = document.getElementById('game-screen')
var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {
    view:canvas,
    antialias:false,
    resolution:1});

var stage = new PIXI.Container();
stage.interactive = true;
stage.buttonmode = true;

var mouse_selection_box;
var pointX, pointY;

var world = new Array();

var FPS = 60;
var START_TIME = Date.now();
var frameDuration = 1000 / FPS;
var lag = 0;


stage.on('pointerdown', (event) => {
    pointX = event.data.global.x    
    pointY = event.data.global.y
    if(mouse_selection_box){
        removeEntity(mouse_selection_box);
        mouse_selection_box = undefined;
    }
    mouse_selection_box = new SelectionBox(pointX, pointY);
    addEntity(mouse_selection_box);
});

stage.on('pointermove', (event)=>{
    mX = event.data.global.x    
    mY = event.data.global.y
    if(mouse_selection_box){
        pointX = mouse_selection_box.sprite.x;
        pointY = mouse_selection_box.sprite.y;
        mouse_selection_box.setSize(mX - pointX, mY - pointY)
    }
});

stage.on('pointerup', (event)=>{
    if(mouse_selection_box){
        removeEntity(mouse_selection_box);
        mouse_selection_box = undefined;
    }
});

function render(){
    requestAnimationFrame(render);
    var CURRENT = Date.now();
    var ELAPSED = CURRENT - START_TIME;
    START_TIME = CURRENT;
    
    lag += ELAPSED;

    while (lag >= frameDuration){  
        lag -= frameDuration;
    }
    var lagOffset = lag / frameDuration;
    world.forEach(e => e.update(lagOffset));
    renderer.render(stage);
}
 

function createEntity(entity_name, entity_type, x, y){
    let t_sprite = Object.create(entity_name, entity_type);
    t_sprite.setPosition(x, y);
    return t_sprite;
}

function compare(a, b) {
  if (a.zindex < b.zindex) {
    return 1;
  }
  if (a.zindex > b.zindex) {
    return -1;
  }
  // a must be equal to b
  return 0;
}

function addEntity(entity){
    world.push(entity);
    stage.addChild(entity.sprite);
    stage.children.sort(function(a,b) {
        a.zindex = a.zindex || 0;
        b.zindex = b.zindex || 0;
        return b.zindex - a.zindex
    });
}
function removeEntity(entity){
    stage.removeChild(entity.sprite);
    var i = world.indexOf(entity);
    if(i != -1) {
        world.splice(i, 1);
    }
    stage.children.sort(compare);
}
var entities;
loadJSON("javascript/entities.json",(data) => {
    entities = JSON.parse(data);
    xOffset = 0;
    yOffset = 0;
    for(var x = 0; x < 42; x++){
        for(var y = 0; y < 20; y++){
            var t = new Tile(x * 32, y * 32);
            //console.log(t);
            //return;
            addEntity(t);
        }
    }
    var b = new Base(20, 20);
    addEntity(b);
    render();
});

function loadJSON(path,callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', path, true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }


 