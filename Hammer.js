class Hammer {
constructor(x,y,width,height){
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
}
display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;

    var pos =this.body.position;
  
    push();
    translate(pos.x, pos.y);
 
    rectMode(CENTER);
    strokeWeight(9);
    stroke("orange");
    rect(0, 0, this.width, this.height);
    pop();
  }




}