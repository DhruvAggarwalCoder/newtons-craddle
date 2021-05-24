
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof,rope1,rope2,rope3,rope4,rope5,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,bobDiameter;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(350,100,300,30);
	

	bobObject1 = new Bob(250,300);
	bobObject2 = new Bob(300,300);
	bobObject3 = new Bob(350 , 300);
	bobObject4 = new Bob(400 , 300);
	bobObject5 = new Bob(450,300);

	Engine.run(engine);
  
	rope1 = new Rope(bobObject1.body,roof.body,10,0);
	rope2 = new Rope(bobObject2.body,roof.body,20,0);
	rope3 = new Rope(bobObject3.body,roof.body,30,0);
	rope4 = new Rope(bobObject4.body,roof.body,40,0);
	rope5 = new Rope(bobObject5.body,roof.body,40,0);
	World.add(world , rope1,rope2,rope3,rope4,rope5);
}

function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
 

}



