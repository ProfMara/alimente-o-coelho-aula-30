class Corda{
    constructor(pontoA, corpoB){
        this.sling = Constraint.create({
            pointA:pontoA, bodyB:corpoB
        })
        this.pontoA = pontoA;
        World.add(world, this.sling);
    }
    show(){
        var pos = bola.body.position;
        //desenhar linha
        line (this.pontoA.x,this.pontoA.y, pos.x, pos.y);
        
    }
    
}