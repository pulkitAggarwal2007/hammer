class Rubber {
    constructor() {
      var options = {
          'restitution':0.6,
          'friction':0.5,
          'density':1.0
      }
      this.body = Bodies.circle(40, 40, 40, options);
      this.width = 40;
      this.height = 40;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(0);
      stroke("black");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };