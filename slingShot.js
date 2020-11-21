class slingShot{

constructor(BodyA,PointB){
    var options={
        bodyA:BodyA,
        pointB:PointB,
        length:15,
        stiffness:0.04
        }

    this.sling=Constraint.create(options)
World.add(MyWorld,this.sling);
}

fly(){

this.sling.bodyA=null;
}

display(){
    if(this.sling.bodyA!=null){
    strokeWeight(3)
    line(this.sling.bodyA.position.x,this.sling.bodyA.position.y, this.sling.pointB.x,this.sling.pointB.y); 
    }
}

}