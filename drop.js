class Drop{
    constructor(x, y, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body);
        Matter.Body.setAngle(this.body,angle);
      }
      display(){
        //var angle = this.body.angle;
        
        push();
        translate(this.body.position.x, this.body.position.y);
        angleMode(RADIANS);
        //rotate(angle);
        fill(24, 62, 110);
        ellipse(0, 0, 10, 10);
        pop();
      }
}