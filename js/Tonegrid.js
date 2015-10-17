
var renderer = new PIXI.WebGLRenderer(600, 600, {
  antialias: true
});

document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

var sz = 2;
var totalSprites = 20000;
var sprites = new PIXI.ParticleContainer(totalSprites, {
  position: true,
  alpha: true
});

stage.addChild(sprites);

var maggots = [];
var frame = 0;

var gfx = new PIXI.Graphics();
gfx.lineStyle(0);
gfx.beginFill(0xFFFFFF);
gfx.drawCircle(15, 15, 1.5);
gfx.endFill();

var texture = gfx.generateTexture(); 

for(var i=0; i<totalSprites; i++) {
  var dude = new PIXI.Sprite(texture);
  dude.anchor.set(0.5);
  dude.x = 100;
  dude.y = 100;
  dude.dist = Math.random();
  dude.alpha = 0.3;
  maggots.push(dude);
  sprites.addChild(dude);
}

animate();

function animate() {
  for (var i = 0; i < totalSprites; i++) {
    var dude = maggots[i];

    dude.x += Math.random() - 0.5;
    dude.y += Math.random() - 0.5;
  }

  frame++;

  renderer.render(stage);

  requestAnimationFrame(animate);
}

/*
   var iv = setInterval(function() {
   console.log(frame);
   frame = 0;
   }, 1000);
*/

