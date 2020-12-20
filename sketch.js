var backtower,backtowerimg;
var door,doorimg;
var climber,climberimg;
var ghost,ghostimg;
var climbergroup;
var doorgroup;
var invisible,invisiblegroup;
var PLAY=1;
var END=0;
var gameState="PLAY";




function preload(){
  backtowerimg=loadImage("tower.png");
  doorimg=loadImage("door.png");
  climberimg=loadImage("climber.png");
  ghostimg=loadImage("ghost-standing.png");
  
  
}















function setup(){
  createCanvas(600,600);
  
  
  
  backtower=createSprite(300,300);
  backtower.addImage("backtower",backtowerimg);
  backtower.velocityY=2;
  
  ghost=createSprite(300,300,10,10);
  ghost.addImage("ghostmove",ghostimg);
  ghost.scale=0.27;
  
  climbergroup=new Group();
  doorgroup=new Group();
  invisiblegroup=new Group();
  
  
}




function draw(){
  background(0);
  
    if (backtower.y>600){
    backtower.y=300;
  }
  
  if(gameState==="PLAY"){
  
    
  if (keyDown ("space")){
    ghost.velocityY=-4;
    
  }
 ghost.velocityY=ghost.velocityY+0.8;
 
 
  if(keyDown("right")){
    ghost.x=ghost.x+4;
    
  }
  
   if(keyDown("left")){
    ghost.x=ghost.x-4;
    
  }
  spawndoors();
  
  if(ghost.isTouching(climbergroup)){

    ghost.velocityY=0;
  
  }
  
 
  
  }
  
    if(ghost.isTouching(invisiblegroup)||ghost.y>600){
      ghost.destroy();
      gameState="END";
      
      
    }
  
    drawSprites();
  
  
  
  if(gameState==="END"){
    background ("black");
fill("yellow");
    stroke(10);
    textSize(30);
    text("GAME OVER",250,300);
  
  }
  
  
  
  
  
 
  
  
}

function spawndoors(){
  if(frameCount%200===0){
    door=createSprite(Math.round(random(100,500)),200,10,10);
    door.addImage("doormove",doorimg);
    door.velocityY=2;
    door.lifetime=100;
    climber=createSprite(10,250,10,10); 
    climber.addImage("climbermove",climberimg);
    climber.x=door.x;
    climber.velocityY=2;
    climber.lifetime=100;
    door.depth=ghost.depth;
    ghost.depth=ghost.depth+1;
    invisible=createSprite(10,265,100,10);
    invisible.shapeColor="blue";
    invisible.x=climber.x;
    invisible.velocityY=2;
    invisible.lifetime=100;
    
    invisiblegroup.add(invisible);
    climbergroup.add(climber);
    doorgroup.add(door);
    
    
  }
  
}