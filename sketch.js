
function preload(){
  bg=loadImage("images/iss.png");
  sleep=loadAnimation("images/sleep.png");
  brush=loadAnimation("images/brush.png");
  gym=loadAnimation("images/gym11.png","images/gym12.png");
  eat=loadAnimation("images/eat1.png","images/eat2.png");
  drink=loadAnimation("images/drink1.png","images/drink2.png");
  bath=loadAnimation("images/bath1.png","images/bath2.png");
  move=loadAnimation("images/move.png","images/move1.png");
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale=0.1;
}

function draw() {
  background(255,255,255);  

  Text("Instructions:",200,390);
  Text("Up Arrow = Brushing",200,380);
  Text("Down Arrow = Gymming",200,370);
  Text("Left Arrow = Eating",200,360);
  Text("Right Arrow = Bathing",200,350);
  Text("m key = moving",200,340);


  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y=350;
    astronaut.velocityX=-0.2;
    astronaut.velocityY=0.2;
  }
  drawSprites();
}