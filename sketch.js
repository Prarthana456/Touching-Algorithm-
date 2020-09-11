var fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "blue";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
 }

function draw() {
  background(255,255,255);  
  drawSprites();
  //to make both the x &< y value of the rect move with the mouse
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  console.log(fixedRect.y-movingRect.y);
  //the if statement for getting it colored when the rectangles touch
   if(fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2
     && movingRect.x - fixedRect.x< movingRect.width/2 + fixedRect.width/2
     && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2
     && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2)
  { 
    //to make it yellow color when it touches 
       fixedRect.shapeColor="yellow"; 
       movingRect.shapeColor="yellow";
  }
  else{
    //to make it green when it doesnt touch 
      fixedRect.shapeColor="green";
      movingRect.shapeColor="green"; 
  }
}