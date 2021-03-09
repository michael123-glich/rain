const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //ground = new Floor(400,400,800,50);
  boxes = [];
}
function draw() {
  Engine.update(engine);
  background(20,20,20);  
  //ground.display();
  if(frameCount%1 === 0){
  boxes.push(new block(random(0,800),-50,random(1,2.5),random(2,3.5)));
  boxes.push(new block(random(0,800),-50,random(1,2.5),random(2,3.5)));
  boxes.push(new block(random(0,800),-50,random(1,2.5),random(2,3.5)));
  }
  for(var i = 0; i < boxes.length; i++){
    boxes[i].display();
    if(boxes[i].body.position.y > 650){
      boxes.splice(i,1);
      //console.log("works");
    }
  }
}
