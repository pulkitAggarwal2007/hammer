class Iron {
    constructor(x, y) {
      var options = {
          'restitution':0.6,
          'friction':0.5,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 90, 90, options);
      this.width = 90;
      this.height = 90;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(0);
      stroke("white");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };