const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,side1,side2

var brick
var bricks=[]
var bullet
var bullets=[]
var cannon
var cannonbrick
var cannonbricks=[]
var player
var bar
var redBar
var heliimg

var state=1
var guide=true
var besttime=localStorage.getItem('hs');
var bgimg


function preload(){
heliimg=loadImage('helicopter.png')
bgimg=loadImage('940534.png')
}
function setup() {
  createCanvas(800,500);
if(besttime=="undefined"||besttime==undefined||besttime==null||besttime==NaN){
  besttime=20
}
 
  engine = Engine.create();
  world = engine.world;

 

  bar=new Ground(250,50,400,20)
  bar.color="green"
  redBar=new Ground(250,50,400,20)
  redBar.color="red"

  ground=new Ground(400,495,800,10)
  side1=new Ground(5,250,10,500)
  side2=new Ground(795,250,10,500)

  cannonbrick=new Ground(300,470,50,50)
  cannonbricks.push(cannonbrick)
  cannonbrick=new Ground(325,445,30,30)
  cannonbricks.push(cannonbrick)
  cannonbrick=new Ground(350,420,30,30)
  cannonbricks.push(cannonbrick)
  cannonbrick=new Ground(375,395,30,30)
  cannonbricks.push(cannonbrick)
  
  player=new Player(650,-800,25,50)

  createBrick(550,50,50,25)
  createBrick(600,50,50,25)
  createBrick(650,50,50,25)
  createBrick(700,50,50,25)
  createBrick(750,50,50,25)
  createBrick(550,0,50,25)
  createBrick(600,0,50,25)
  createBrick(650,0,50,25)
  createBrick(700,0,50,25)
  createBrick(750,0,50,25)
  createBrick(550,-50,50,25)
  createBrick(600,-50,50,25)
  createBrick(650,-50,50,25)
  createBrick(700,-50,50,25)
  createBrick(750,-50,50,25)
  createBrick(550,-100,50,25)
  createBrick(600,-100,50,25)
  createBrick(650,-100,50,25)
  createBrick(700,-100,50,25)
  createBrick(750,-100,50,25)
  createBrick(550,-150,50,25)
  createBrick(600,-150,50,25)
  createBrick(650,-150,50,25)
  createBrick(700,-150,50,25)
  createBrick(750,-150,50,25)
  createBrick(550,-200,50,25)
  createBrick(600,-200,50,25)
  createBrick(650,-200,50,25)
  createBrick(700,-200,50,25)
  createBrick(750,-200,50,25)
  
  createBrick(550,-250,50,25)
  createBrick(600,-250,50,25)
  createBrick(650,-250,50,25)
  createBrick(700,-250,50,25)
  createBrick(750,-250,50,25)
  createBrick(550,-300,50,25)
  createBrick(600,-300,50,25)
  createBrick(650,-300,50,25)
  createBrick(700,-300,50,25)
  createBrick(750,-300,50,25)
  createBrick(550,-350,50,25)
  createBrick(600,-350,50,25)
  createBrick(650,-350,50,25)
  createBrick(700,-350,50,25)
  createBrick(750,-350,50,25)
  createBrick(550,-400,50,25)
  createBrick(600,-400,50,25)
  createBrick(650,-400,50,25)
  createBrick(700,-400,50,25)
  createBrick(750,-400,50,25)
  createBrick(550,-450,50,25)
  createBrick(600,-450,50,25)
  createBrick(650,-450,50,25)
  createBrick(700,-450,50,25)
  createBrick(750,-450,50,25)
  createBrick(550,-500,50,25)
  createBrick(600,-500,50,25)
  createBrick(650,-500,50,25)
  createBrick(700,-500,50,25)
  createBrick(750,-500,50,25)
  createBrick(550,-550,50,25)
  createBrick(600,-550,50,25)
  createBrick(650,-550,50,25)
  createBrick(700,-550,50,25)
  createBrick(750,-550,50,25)
  createBrick(550,-600,50,25)
  createBrick(600,-600,50,25)
  createBrick(650,-650,50,25)
  createBrick(700,-650,50,25)
  

  cannon = createImg('Cannon.png');
  cannon.position(250,350);
  cannon.size(150,150);

 

  heli = new Ground(120,420,200,150)
}


function draw() 
{


  background(51);
  image(bgimg,0,0,width*2,height*2);
  Engine.update(engine);
  if(bar!==null){
  textAlign(CENTER)
  textSize(20)
  fill("black")
  text("TIME: "+Math.round(bar.w/20)+" seconds",250,25)
  }

  

  if(keyCode==87){
    heli.body.position.y-=3
    if(guide==true){
    guide=false
    }
  }
  if(keyCode==65){
    heli.body.position.x-=3
    if(guide==true){
      guide=false
      }
  }
  if(keyCode==83){
    heli.body.position.y+=3
    if(guide==true){
      guide=false
      }
  }
  if(keyCode==68){
    heli.body.position.x+=3
    if(guide==true){
      guide=false
      }
  }

  if(collide(heli.body,player.body)==true){
    state=2
  }
  if(state==2){
    player.body.position.x=heli.body.position.x
    player.body.position.y=heli.body.position.y+50
  }

  if(heli.body.position.y>425){
    heli.body.position.y-=3
  }
  if(heli.body.position.x<100){
    heli.body.position.x+=3
  }
  if(heli.body.position.x>700){
    heli.body.position.x-=3
  }

  if(state==2&&heli.body.position.y>420&&heli.body.position.x<500){
    state=3
  }
  if(state==3){
    guide=NaN
    fill("red")
    textSize(20)
    rectMode(CENTER)
   text("VICTORY",400,100)
  
   var time=((400-bar.w)/(400/20))
   time*=1000
   time=Math.round(time)
   time/=1000
 
   if(besttime>time){
   
    besttime=time
    var num=besttime.toString()
    localStorage.setItem('hs',num)
   }
   text("Your time: "+time+" seconds",400,125)
   text("Highscore: "+localStorage.getItem('hs')+" seconds",400,150)
   text("Refresh the page to get a higher score",400,175)
  }
  if(guide==true){
    fill("red")
    textSize(20)
    text("Use WASD to move. Deliver the construction worker (the yellow rectangle) ",400,100)
    text(" out of the demolition site using the helicopter, and land him safely out of the ",400,125)
    text("demolition site.",400,150)
  }
  if(state==-1){
    text("Defeat: refresh the page to try again",400,125)
  }





  for(i=0;i<bricks.length;i++){
    if(bricks[i]!==null){
    bricks[i].show();
    }
  }
  // for(i=0;i<cannonbricks.length;i++){
  //   cannonbricks[i].show();
  // }
  // ground.show()
  // side1.show();
  // side2.show()
  player.show()
  redBar.show()
  bar.show()

imageMode(CENTER)
    image(heliimg,heli.body.position.x,heli.body.position.y,200,150);

   for(i=0;i<bullets.length;i++){
    bullets[i].show();
  }

  if(frameCount%3==0&&guide==false){
  shoot(cannon.x+140,cannon.y,12,12)
  }


  if(bar.body!==null){
    if(guide==false){
      var n=(400/20)/60
   
  bar.w-=n
   bar.body.position.x-=n/2
  if(bar.w<0){
    bar.body=null
    state=-1
  }
}
}
}



function createBrick(x,y,w,h){
  brick=new Brick(x,y,w,h)
  bricks.push(brick)
}

function shoot(x,y,w,h){
  bullet=new Bullet(x,y,w,h)
  bullets.push(bullet)
  bullet.shoot();

}
function collide(body,sprite)
{
  if(body!=null)
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
               return true;
            }
            else{
              return false
            }
          }
          function changeHS(n){
            localStorage.setItem('hs',n)
          }
          // const myFunction = () => { alert("doing something!"); }; changeHS();
          

 
