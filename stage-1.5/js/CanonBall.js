class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8
    }
    this.width = 25;
    this.height = 25;
    this.body = Bodies.rectangle(x,y,this.width,this.height,options)

    this.ballImage = loadImage('assets/canonBall.png');
    World.add(world, this.body);
  };

  display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER)
    image(this.ballImage,0, 0, this.width, this.height);
    pop();
  };
};
