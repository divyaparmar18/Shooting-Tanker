const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector} = Matter;

var engine, world;
var tanker;
var angle = 0
var canonBall;
var shot;

function setup(){
  createCanvas(600,500);
  engine = Engine.create();
  world = engine.world;
  tanker = new Tanker(75,height-90,60,30)
  canonBall = new CanonBall(20,20);
  shot = new ShootBall(canonBall.body,{x:70, y:height-80});
}

function draw() {
   background(255)
   Matter.Engine.update(engine);
   canonBall.display();
   
   tanker.display();

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
