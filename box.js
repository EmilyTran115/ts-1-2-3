  
class Box{
    constructor(x,y,width,height){

        var options ={
            restitution: 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        this.visibility=255
    }
    display(){
        var pos = this.body.position;
        var angle=this.body.angle;
         push()
        if(this.body.speed < 3){
       
        translate(pos.x,pos.y)
        rotate(angle)
        fill("red")
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        
        }
        else {
World.remove(world,this.body)
this.visibility=this.visibility-0.1
tint(255,this.visibility)
        }
       pop()
    }
    score(){
        if (this.visibility < 0 && this.visibility > -1005){
          Score++;
        }
      }
}