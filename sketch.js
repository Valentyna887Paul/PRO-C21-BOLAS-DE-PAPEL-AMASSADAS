
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.05});
}

}

function setup() {
	createCanvas(800, 700);
	ball = Bodies.circle(250,400,ball_options)
	World.add(world,ball);
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		dencity:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    groundObj = new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);
	RightSide = new ground(20,300,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  groundObj.display();
  drawSprites();
}



