const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var log1,log2,log3,papper;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    pig1=new Pig(810,350);
    pig2=new Pig(810,220);
    log1=new Log(810,260,300,PI/2);
    log2=new Log(810,180,300,PI/2);
    log3=new Log(760,120,150,PI/2);
    papper=new Bird(100,100)

}

function draw(){
    background(0);
    Engine.update(engine);
    log1.display();
    pig2.display();
    log2.display();
    log3.display();
    papper.display();
    ground.display();
};

function keyPressed();

if(keyCode === UP_ARROW){

Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});

};
