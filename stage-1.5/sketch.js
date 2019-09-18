const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector} = Matter;

var engine, world;
var tanker;
var angle = 0
var canonBall;
var shot;
var ground;
var ball
function setup(){
  var canvas = createCanvas(600,500);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2, height-10, width, 30);
  ball = new Ball(200,100,20)

  tanker = new Tanker(75,height-110,60,30);
  canonBall = new CanonBall(20,20);
  shot = new ShootBall(canonBall.body,{x:70, y:height-120});
}

function draw() {
   background(255)
   Matter.Engine.update(engine);
   ground.display()
   ball.display()
   canonBall.display();
   
   tanker.display();
   //


}

// function keyPressed() {
//   console.log("Hello");
//   if (keyCode === 32) {
//     Matter.Body.setPosition(canonBall.body, {x: 50 , y: height-10})
//   }
// }

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    shot.shoot()
  }
}
