
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,gg;   
 
function preload()
{

}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	gg = createImg("GROUNG_.png");
    gg.position(20,650,1200,100);
	gg.size(50,50);	
	
	ground =new Ground(600,650,1200,10);
    gright = new Ground(1100,605,10,80);
    gright2 = new Ground(950,605,10,80);
    

 var ball_options={
	 isStatic:false,
	 restitution:0.7,
	 friction:0,
	 density:1.0,
}
	//Create the Bodies Here.
	ball = Bodies.circle(100,100,20,ball_options);
	fill ("white");
	World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  text(mouseX+','+mouseY,mouseX,mouseY);
  ground.display();
  gright.display();
  gright2.display();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();

}



  function keyPressed(){
	  
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:60,y:-60})
	}
}

