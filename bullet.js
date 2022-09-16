class Bullet
{
  constructor(x, y, w,h) 
  {
    let options = {
     isStatic:false,
     restitution: 0.5,
     frictionAir:0.01,
     density: 0.02
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.lifetime=150
    World.add(world, this.body);
  }

  show() {
    if(this.body!==null){
    let pos = this.body.position;
    push();
    rectMode(CENTER);
    noStroke();
    fill("gray");
    rect(pos.x,pos.y, this.w, this.h);
    pop();
    this.lifetime--
    if(this.lifetime==0){
      World.remove(world,this.body)
      this.body=null
    }
  }
  }

shoot() {
  var newAngle = random(300,360);
  newAngle = newAngle *(3.14/180)
  var velocity = p5.Vector.fromAngle(newAngle);
  velocity.mult(0.5);
  Matter.Body.setStatic(this.body, false);
  Matter.Body.setVelocity(this.body, {
    x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
}
}