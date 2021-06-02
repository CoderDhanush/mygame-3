//var PLAY = 1;
//var END = 0;
//var gameState = PLAY;3

var boss, bossImg;

var hero , heroImg1, heroImg2 ;

var solider,soliderImg


var backgroundImg

function preload(){

  bossImg =   loadImage("Boss.png");

  heroImg1=loadImage("hero1.gif")

  heroImg2=loadAnimation("hero1.gif", "hero2.gif","hero3.gif")
  
   armyImg= loadAnimation("solider.png","solider1.png","solider2.png")

  backgroundImg=loadImage("Background3.png")

  bulletImg=loadImage("Bullet.png")
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  boss = createSprite(1350,180,20,50);
  boss.addImage("bossy",bossImg);
  boss.scale=0.2

 hero = createSprite(100,250,50,50);
 hero.addImage("heroo",heroImg1);
 hero.scale=2

 //solider=createSprite(1350,420,20,50) 
 //solider.addAnimation("soliderr",soliderImg)
 //solider.scale=0.25

 bulletGroup = new Group();

 armyGroup1= new Group();
 armyGroup2 = new Group();

}

function draw() {
  
  background(backgroundImg);
 
  if(keyIsDown(UP_ARROW)){
   
    hero.addAnimation("heroo",heroImg2)
    hero.y=hero.y - 2
  }

  if(keyIsDown(DOWN_ARROW)){
    hero.addAnimation("heroo",heroImg2)
    hero.y=hero.y + 2
  }


  if(keyDown("space")){
    createBullet();
  }

var army_select =Math.round(random(1,2));;

if(World.frameCount % 100 == 0){
  if(army_select == 1){
    spawnArmy1();
  }
  else if(army_select == 2){
    spawnArmy2();
  }
}

  drawSprites();
}

function createBullet(){
  var bullet= createSprite(100,100,hero.x,hero.y);
  bullet.addImage(bulletImg);
  bullet.x = hero.x;
  bullet.y = hero.y;
  
  bullet.velocityX = 4;
  bullet.lifetime= 1000;
  bulletGroup.add(bullet);

}

function spawnArmy1(){
var army1 = createSprite(1500,Math.round(random(100,1500)),10,750)
army1.addAnimation("army1",armyImg);
army1.velocityX = -3;
army1.lifetime =800;
army1.scale=0.1;
armyGroup1.add(army1)


}

function spawnArmy2(){
  var army2 = createSprite(1500,Math.round(random(100,1500)),10,750)
  army2.addAnimation("army2",armyImg);
  army2.velocityX = -3;
  army2.lifetime =800;
  army2.scale=0.3;
  armyGroup2.add(army2)
  
    
  }