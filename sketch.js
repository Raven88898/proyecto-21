const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundObj,leftSide,rightSide;
var world;
var radius = 40;

//VARIABLE PELOTA
var ball;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//AGREGAR PROPIEDADES A LA VARIABLE BALLS_OPTION, ESTATICO, RESTITUCION,FRICCION, DENSIDAD
var ball_options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2


}

	ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);

	//CREAR DOS CUERPOS PARA HACER UN BOTE DE BASURA, LADO DERECHO Y LADO IZQUIERDO
	groundObj=new ground(width/2,670,width,20);
	leftSide=new ground(1100,600,20,120);
	rightSide=new ground(1350,600,20,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ellipse(ball.position.x,ball.position.y,radius,radius);

  groundObj.display();
  leftSide.display();  
  rightSide.display();
  
}

//HACER QUE LA PELOTA BRINQUE
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});

}



}