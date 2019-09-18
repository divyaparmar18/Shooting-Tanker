const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector} = Matter;

var engine, world;
var tanker;
var angle = 0

function setup(){
  createCanvas(600,500);
  engine = Engine.create();
  world = engine.world;
  tanker = new Tanker(75,height-90,100,20)
}

function draw() {
   background(255)
   Matter.Engine.update(engine);
   tanker.display();
}
