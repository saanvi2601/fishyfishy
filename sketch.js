const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var heartImg,heart1,heart2,heart3;

var ground,platform;
var cat;

var fish1,fish2,fish3,fish4;
var slingshot;
var dragged = false;

var lives = 3;

var score = 0;

var gameState = "start";



function preload(){
  bg1 = loadImage("images/underwater.png");
  start = loadImage("images/start.png");
  bg2 = loadImage("images/background.jpg");
  heartImg = loadImage("images/life.png");

}




function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  playButton = createSprite(600,300,100,50);
  playButton.addImage(start);
  playButton.scale = 0.3
  playButton.visible = false;

  ground = new Ground(600,height-1,1200,10);
  platform = new Ground(100,300,300,100);

  cat = new Cat(200,60);

  slingshot = new Slingshot(cat.body,{x : 200, y : 60 });

  fish1 = new Fish(300,380,0)
  fish2 = new Fish(400,380,-20)
  fish3 = new Fish(600,380,-20)
  fish4 = new Fish(800,380,-30)

  heart1 = createSprite(30,20,20,20);
  heart1.addImage(heartImg);
  heart1.scale = 0.05

  heart2 = createSprite(70,20,20,20);
  heart2.addImage(heartImg);
  heart2.scale = 0.05

  heart3 = createSprite(110,20,20,20);
  heart3.addImage(heartImg);
  heart3.scale = 0.05





}

function draw() {
  background(bg1); 

  Engine.update(engine);


  if(gameState === "start"){
    push()
    textSize(45);
    fill("green");
    strokeWeight("10")
    textFont("forte") 
    text("Welcome to FISH HUNT",400,50);
    pop();
 
    push()
    textSize(25);
    fill("red");
    textFont("kristen itc");
    text("There is  a cat named Rio and he is very hungry.",100,100);
    text("After a long search he finds a pond in which there were many fishes.",100,140);
    text("He thinks that he’ll take the help of a catapult to eat the fishes ",100,180);
    text("But if he fails to eat the fish his one of his lives will be reduced!!! &" ,100,220);
    text("he will get less chances to satisfy his hunger" ,100,260);
    pop();

    playButton.visible = true;
    heart1.visible = false;
    heart2.visible = false;
    heart3.visible = false;

    if(mousePressedOver(playButton)){
      gameState = "play";
      
    }
      
  }

  if (gameState === "play"){
      background(bg2)
      playButton.visible = false;
      

      textSize(30);
      fill("black");
      text("Score " + score,width-250, 50);

      if(lives === 3){
        heart1.visible = true;
        heart2.visible = true;
        heart3.visible = true;
      }

      if(lives === 2){
        heart1.visible = true;
        heart2.visible = true;
        heart3.visible = false;
      }

      if(lives === 1){
        heart1.visible = true;
        heart2.visible = false;
        heart3.visible = false;
      }

      if(lives === 0){
        heart1.visible = false;
        heart2.visible = false;
        heart3.visible = false;
      }

      
      if(lives<=0){
        gameState=2;
      }

      ground.display();
      platform.display();


      cat.display();
      slingshot.display();


      fish1.display();
      Matter.Body.setVelocity(fish1.body,{x:1.9 , y:0})

      fish2.display();
      Matter.Body.setVelocity(fish2.body,{x:1.9 , y:0})

      fish3.display();
      Matter.Body.setVelocity(fish3.body,{x:1.9 , y:0})

      fish4.display();
      Matter.Body.setVelocity(fish4.body,{x:1.9 , y:0})

      if(fish1.body.position.x > 1200){
          Matter.Body.setPosition(fish1.body,{x:300,y:380})

      }

      if(fish2.body.position.x > 1200){
        Matter.Body.setPosition(fish2.body,{x:300,y:380})

    }

    if(fish3.body.position.x > 1200){
      Matter.Body.setPosition(fish3.body,{x:300,y:380})

  }

  if(fish4.body.position.x > 1200){
    Matter.Body.setPosition(fish4.body,{x:300,y:380})

}

  var collision = Matter.SAT.collides(cat.body,fish1.body);
  if(collision.collided){
    fish1.coll = true;
    fish1.remove();
    Matter.Body.setVelocity(cat.body,{x:0 , y:0})
    Matter.Body.setPosition(cat.body,{x:10,y:200});
    //fish1.getScore();
    score = score+100;
    lives = lives-1
  }

  var collision = Matter.SAT.collides(cat.body,fish2.body);
  if(collision.collided){
    fish2.coll = true;
    fish2.remove();
    Matter.Body.setVelocity(cat.body,{x:0 , y:0})
    Matter.Body.setPosition(cat.body,{x:10,y:200});
    //fish2.getScore();
    score = score+100;
    lives = lives-1
  }

  var collision = Matter.SAT.collides(cat.body,fish3.body);
  if(collision.collided){
    fish3.coll = true;
    fish3.remove();
    Matter.Body.setVelocity(cat.body,{x:0 , y:0})
    Matter.Body.setPosition(cat.body,{x:10,y:200});
    //fish3.getScore();
    score = score+100;
    lives = lives-1
  }

  var collision = Matter.SAT.collides(cat.body,fish4.body);
  if(collision.collided){
    fish4.coll = true;
    fish4.remove();
    Matter.Body.setVelocity(cat.body,{x:0 , y:0})
    Matter.Body.setPosition(cat.body,{x:10,y:200});
    //fish4.getScore();
    score = score+100;
    lives = lives-1
  }


  if(cat.body.position.x > 220 && cat.body.position.y >= 370 && 
    !fish1.coll && !fish2.coll && !fish3.coll && !fish4.coll){
      
    Matter.Body.setVelocity(cat.body,{x:0 , y:0})
    Matter.Body.setPosition(cat.body,{x:10,y:200});

       lives = lives-1
 
 }
  
  
  

      
  }

  if(gameState ===2){
    textSize(50);
    fill("black");
    text("GAME OVER " ,width/2-100, 250);
    textSize(30);
    text("Score " + score,width/2, 350);

  }


  drawSprites();
}

function mouseDragged(){
    if(gameState === "play"){
      Matter.Body.setPosition(cat.body,{x : mouseX, y : mouseY})
      dragged = true;
    }
}

function mouseReleased(){
  if(gameState === "play" && dragged === true){
    slingshot.fly();

   // lives--;
  }
  
  
  

  }

  function keyPressed(){
    if(keyCode === 32 && cat.body.speed<1){
        Matter.Body.setPosition(cat.body,{x:200,y:60})
       slingshot.attach(cat.body);

    }
    
}
