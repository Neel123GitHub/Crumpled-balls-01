
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,binWall1,binWall2,binWall3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(150,650);
	ground=new Ground(400,670,800,15);
	binWall1=new Bin(520,605,10,100);
	binWall2=new Bin(680,605,10,100);
	binWall3=new Bin(600,650,150,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  binWall1.display();
  binWall2.display();
  binWall3.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:365,y:-680});
  }
}



