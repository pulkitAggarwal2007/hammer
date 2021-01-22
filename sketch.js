
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var hammer,g,stone,rubber,iron;

function preload(){

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

hammer = new Hammer(400,697,70,20);
g = new Ground(400,697,800,5);
stone = new Stone(400,300);	
rubber = new Rubber(600,300);
iron = new Iron(600,400);
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);

hammer.display();
g.display();
stone.display();
rubber.display();
iron.display();
  drawSprites();
 
}



