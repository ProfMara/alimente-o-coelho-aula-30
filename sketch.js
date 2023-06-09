//namespacing
//criar uma variável de nome menor para referir a algo de nome maior
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


//variaveis
var engine;
var world;
var solo, bola;
var parado;
var mexendo;
var b1;
var conexao;
var botaoImg, fundoImg, coelhoImg, corda;


function setup() {
    createCanvas(500, 700);
    //cria o motor
    engine = Engine.create();
    world = engine.world;


    var parado = {isStatic:true};
    //cria corpo retangular
    solo = Bodies.rectangle(400,690,800,20, parado);  
    //adiciona no mundo
    World.add(world, solo);

    //criar um objeto da classe Bola
    bola = new Bola(100);



    rectMode(CENTER);
    ellipseMode(RADIUS);
    imageMode(CENTER);
}


function draw() {
    background("cyan");    
    //atualiza o motor
    Engine.update(engine);

    //pinta o solo
    fill("green")
    //desenha o retângulo no corpo
    rect (solo.position.x, solo.position.y, 800,20);

    //facilita a sua vida
   
    bola.show();
   

   
}