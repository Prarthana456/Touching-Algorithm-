var fixedRect, movingRect; 
var gameObj1, gameObj2, gameobj3, gameobj4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100,500,50,80);
  fixedRect.shapeColor = "blue";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
  gameObj1 = createSprite(100,200,50,50);
  gameObj1.shapeColor = "blue";
  gameObj2 = createSprite(200,200,50,50);
  gameObj2.shapeColor = "blue";
  gameobj3 = createSprite(300,600,50,50);
  gameobj3.shapeColor = "pink";
  // gameobj3.velocityY = -2;
  gameobj4 = createSprite(400,400,50,50);
  gameobj4.shapeColor = "pink";
  // gameobj4.velocityY = +2;
 }

function draw() {
  background(255,255,255);  
  drawSprites();
  //to make both the x &< y value of the rect move with the mouse
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  console.log(fixedRect.y-movingRect.y);
  //the if statement for getting it colored when the rectangles touch
   if(isTouching(movingRect, gameObj2))
  { 
    //to make it yellow color when it touches 
       gameObj2.shapeColor="yellow"; 
       movingRect.shapeColor="yellow";
  }
  else{
    //to make it green when it doesnt touch 
      gameObj2.shapeColor="green";
      movingRect.shapeColor="green"; 
  }
}
//   //funnction for bouce of 2 objects 
//     if(gameobj3.x-gameobj4.x < gameobj4.width/2 + gameobj3.width/2
//       && gameobj4.x - gameobj3.x< gameobj4.width/2 + gameobj3.width/2)
//     { 
//      gameobj3.velocityX = gameobj3.velocityX * (-1);
//      gameobj4.velocityX = gameobj4.velocityX * (-1);
//     }
//     if(gameobj3.y - gameobj4.y < gameobj4.height/2 + gameobj3.height/2
//       && gameobj4.y - gameobj3.y < gameobj4.height/2 + gameobj3.height/2) 
//     {
//     gameobj3.velocityY = gameobj3.velocityY * (-1);
//     gameobj4.velocityY = gameobj4.velocityY * (-1);
//     }

function isTouching(object1, object2) {
//the if statement for getting it colored when the rectangles touch
  if(object2.x-object1.x < object1.width/2 + object2.width/2
    && object1.x - object2.x< object1.width/2 + object2.width/2
    && object2.y - object1.y < object1.height/2 + object2.height/2
    && object1.y - object2.y < object1.height/2 + object2.height/2)
  { 
    return true;
  }
  else{
    return false;
  }
}
