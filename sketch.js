
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world,ball,ground1,ground2,ground3;

function preload()
{

}


function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;
	
var ball_options={
	isStatic:false,
	restitution : 0.3,
	frictionAir : 0.0,
	
}




	//Create the Bodies Here.
ball=Bodies.circle(260,100,30,ball_options)
World.add(world,ball)
console.log(ball);
console.log(ball.position.x)
ground1=new ground(width/2,670,width+200,20)
ground2=new ground(1100,600,20,120)
ground3=new ground(1350,600,20,120)




	
  
}


function draw() {
	
	background(51);
	rectMode(CENTER);
	ellipse(ball.position.x,ball.position.y,30);
   // rect(ground.position.x,ground.position.y,1000,800);
  ground1.display()
  ground2.display()
  ground3.display()
  Engine.update(engine);
  drawSprites();
 
}


function keyPressed() 
{ if (keyCode === UP_ARROW) 	{ 
	Matter.Body.applyForce(ball,ball.position,{x:0.85,y:-0.85}); } }

