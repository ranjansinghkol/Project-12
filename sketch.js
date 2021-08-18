var garden, rabbit;
var gardenImg, rabbitImg;
var leaf, leafImg;
var apple, appleImg;

var rand_sprite;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg = loadImage("leaf.png");
  appleImg = loadImage("apple.png");
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

  rand_sprite = Math.round(random(1, 2));
  if(rand_sprite==1){
    createLeaves();
    rand_sprite = Math.round(random(1, 2));
  }
  else if(rand_sprite==2){
    createApples();
    rand_sprite = Math.round(random(1, 2));
  }

  drawSprites();
}

function createLeaves(){
  if(frameCount%80===0){
    leaf = createSprite(random(50, 350), 40, 10, 10);
    leaf.addImage(leafImg);
    leaf.scale = 0.1;
    leaf.velocityY = 2;
    leaf.depth = rabbit.depth;
    rabbit.depth ++;
  }
}

function createApples(){
  if(frameCount%80===0){
    apple = createSprite(random(50, 350), 40, 10, 10);
    apple.addImage(appleImg);
    apple.scale = 0.1;
    apple.velocityY = 2;
    apple.depth = rabbit.depth
    rabbit.depth ++;
  }
}