class Ball {
  constructor(x,y,radius) {
    var options ={
        restitution: 0.5
    }

    this.body = Bodies.circle(x,y,radius, options);
    World.add(world,this.body);

    this.radius = radius
    World.add(world,this.body);
  }

  display() {
    var pos = this.body.position
    var angle = this.body.angle
    push();
    translate(pos.x, pos.y)
    rotate(angle);
    // ellipseMode(RADIUS);
    rect(0, 0,10,10);
    pop()
  }
}
