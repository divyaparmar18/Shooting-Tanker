class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
      this.body = Bodies.rectangle(x,y,width,height,options)

      World.add(world, this.body);
      this.width = width;
      this.height = height;

    };
    display(){
      var pos = this.body.position;
      // var angle = this.body.angle;
      if(keyIsDown(LEFT_ARROW)){
        angle -=0.05
      }
      if(keyIsDown(RIGHT_ARROW)){
        angle +=0.05
      }

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rect(0,0,this.width,this.height);
      pop();
      arc(70, height-40, 90, 100, PI , TWO_PI);
      rect(20,height-40,100,20);
      rect(20,height-20,100,20);
    };
}
