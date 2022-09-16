class Player{
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
        World.add(world, this.body);
      }
    
      show() {
        let pos = this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        fill("yellow")
        rect(pos.x,pos.y, this.w, this.h);
        pop();
      }
    }


