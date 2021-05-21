const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,ground,pig,pig2,log,log2,log3,log4;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20);
    pig= new Pig(810,350);
    log = new Log(810,260,300,PI/2);
    box3 = new Box(700,200,70,70);
    box4 = new Box(920,200,70,70);
    pig2 = new Pig(810,200);
    log2 = new Log(810,115,300,PI/2);
    box5 = new Box(810,120,70,70);
    log3 = new Log(760,100,150,PI/7);
    log4 = new Log(870,100,150,PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   ground.display();
   pig.display();
   log.display();
   box3.display();
   box4.display();
   log2.display();
   pig2.display();
   box5.display();
   log3.display();
   log4.display();
}