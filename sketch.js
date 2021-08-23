var garden, rabbit;
var gardenImg, rabbitImg;
var leaf, orangeLeaf, redLeaf, leafImg, orangeLeafImg, redLeafImg;
var apple, appleImg;

var rand_sprite;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg = loadImage("leaf.png");
  appleImg = loadImage("apple.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
  redLeafImg = loadImage("redImage.png");
}

function setup(){
  createCanvas(400,400);
  
  // background
  garden = createSprite(200,200);
  garden.addImage(gardenImg);

  // creating rabbit
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges = createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX;

  var sprites = Math.round(random(1, 5));
  if(frameCount%80==0){
    switch(sprites){
      case 1:
        createLeaves();
        sprites = Math.round(random(1, 5));
        break;
      case 2:
        createOrangeLeaves();
        sprites = Math.round(random(1, 5));
        break;
      case 3:
        createRedLeaves();
        sprites = Math.round(random(1, 5));
        break;
      case 4:
        createApples();
        sprites = Math.round(random(1, 5));
        break;
      case 5:
        createApples();
        sprites = Math.round(random(1, 5));
        break;
      default:
        break;
    }
  }

  drawSprites();
}

function createLeaves(){
  leaf = createSprite(random(50, 350), 40, 10, 10);
  leaf.addImage(leafImg)
  leaf.scale = 0.1;
  leaf.velocityY = 2;
  leaf.lifetime = 200;
  leaf.depth = rabbit.depth;
  rabbit.depth ++;
}

function createOrangeLeaves(){
  orangeLeaf = createSprite(random(50, 350), 40, 10, 10);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.scale = 0.1;
  orangeLeaf.velocityY = 2;
  orangeLeaf.lifetime = 200;
  orangeLeaf.depth = rabbit.depth;
  rabbit.depth ++;
}

function createRedLeaves(){
  redLeaf = createSprite(random(50, 350), 40, 10, 10);
  redLeaf.addImage(redLeafImg);
  redLeaf.scale = 0.1;
  redLeaf.velocityY = 2;
  redLeaf.lifetime = 200;
  redLeaf.depth = rabbit.depth;
  rabbit.depth ++;
}


function createApples(){
  if(frameCount%80===0){
    apple = createSprite(random(50, 350), 40, 10, 10);
    apple.addImage(appleImg);
    apple.scale = 0.1;
    apple.velocityY = 2;
    apple.lifetime = 200;
    apple.depth = rabbit.depth;
    rabbit.depth ++;
  }
}
