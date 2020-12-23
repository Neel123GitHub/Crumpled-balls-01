class Paper{
    constructor(x,y){
      var options={
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body=Bodies.circle(x,y,60,options);
      this.diameter=60;
      World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("pink");
        stroke("white");
        strokeWeight(2);
        circle(0,0,this.diameter);
        pop();
    }
}