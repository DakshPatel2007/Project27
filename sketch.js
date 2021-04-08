
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,600,50);
	bobObject1 = new Bob(250,500,70);
	bobObject2 = new Bob(320,500,70);
	bobObject3 = new Bob(390,500,70);
	bobObject4 = new Bob(460,500,70);
	bobObject5 = new Bob(530,500,70);
	rope1 = new Rope(bobObject1.body,roof.body,-140,0);
	rope2 = new Rope(bobObject2.body,roof.body,-70,0);
	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	rope4 = new Rope(bobObject4.body,roof.body,70,0);
	rope5 = new Rope(bobObject5.body,roof.body,140,0);
	
	Engine.run(engine);
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
 
}

function draw() {
  rectMode(CENTER);
  background("lightgrey");
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
  
  drawSprites();
 
}
