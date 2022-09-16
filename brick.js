class Brick
{
  constructor(x, y, w,h) 
  {
    let options = {
     isStatic:false,
     restitution: 0.5,
     frictionAir:0.01,
     density: 0.02,
     inertia:500000000
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color=Math.round(random(1,2))
    World.add(world, this.body);
  }

  show() {
    if(this.body!==null){
    let pos = this.body.position;
    push();
    rectMode(CENTER);
    noStroke();
    if(this.color==1){
    fill("maroon");
    }
    if(this.color==2){
      fill("red")
    }
    rect(pos.x,pos.y, this.w, this.h);
    pop();
  }
  }
  destroy(){
    World.remove(world,this.body)
    this.body=null
  }
}
