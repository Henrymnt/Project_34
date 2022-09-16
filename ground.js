class Ground
{
  constructor(x, y, w,h) 
  {
    let options = {
     isStatic:true,
     restitution: 0.5,
     frictionAir:0.01
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color="gray"
    World.add(world, this.body);
  }

  show() {
    if(this.body!==null){
    let pos = this.body.position;
    push();
    rectMode(CENTER);
    noStroke();
    fill(this.color);
    rect(pos.x,pos.y, this.w, this.h);
    pop();
    }
  }
}