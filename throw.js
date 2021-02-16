class Throw{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB;
        this.throw = Constraint.create(options);
        this.smokeImage = loadImage("smoke.png");
        World.add(world, this.throw);
    }

    fly(){
        this.throw.bodyA=null;
    }

    Launch(bodyA){
        this.throw.bodyA=bodyA;
    }

    display(){
       if(this.body.velocity.x > 10 && this.body.position.x > 200)
       {
           var position = [this.body.poisition.x, this.body.position.y];
           this.trajectory.push(position);
       }

       for(var i=0; i<this.trajectory.length; i++)
       {
           Image(this.smokeImage, this.tragectory[i][0], this.trajectory[i][1]);
       }
    }
    
}