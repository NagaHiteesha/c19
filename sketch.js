var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(300,200,30,80);
  movingRect = createSprite(500,200,80,30);
  
 
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}