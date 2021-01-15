class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5,
            length:20,
        }

        this.slingShot=Constraint.create(options);
        World.add(world,this.slingShot);
        this.pointB=pointB;
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        console.log(bodyA);
}
}