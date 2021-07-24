var snowflake,snowflakeimg,bgimg





function preload(){
  snowflakeimg = loadImage("snow4.webp")
  bgimg = loadImage("snow1.jpg")
}


function setup() {
  createCanvas(800,600);
  
}

function draw() {
  background(bgimg);  
  drawSprites();
  createSnowFlake()
}

function createSnowFlake(){

  if(frameCount%10===0){
    snowflake = createSprite(random(0,800),0,50,50)
    snowflake.addImage(snowflakeimg)
    snowflake.velocityX = -2
    snowflake.velocityY = 4
    snowflake.scale = 0.05
  }
  
}