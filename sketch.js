  var astronaut;
function preload() { 

  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  
  bath = loadAnimation("images/bath1.png","images/bath2.png");
  move = loadImage("images/move1.png");
}


function setup() {
  createCanvas(800,400);
  
  astronaut = createSprite(300,230);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale = 0.1;

}


function draw() {
  background(bg);  
  createEdgeSprites();
  drawSprites();
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 330;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
    if(keyDown("LEFT_ARROW")){
      astronaut.addAnimation("eating",eat);
      astronaut.changeAnimation("eating");
      astronaut.x = 350;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
    }
    if(keyDown("RIGHT_ARROW")){
      astronaut.addAnimation("bathing",bath);
      astronaut.changeAnimation("bathing");
      astronaut.x = 250;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
    }
    if(keyDown("M")){
      astronaut.addImage("moving",move);
      astronaut.changeAnimation("moving");
      astronaut.y = 250;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
    }
  textSize(20);
  fill("white");
  text("Instructions",30,30);
  
  text("Up Arrow = Brushing",30,60);
  text("Down Arrow = Gymming",30,90);
  text("Left Arrow = Eating",30,120);
  text("Right Arrow = Bathing",30,150);
  text("M = Moving",30,180);
}