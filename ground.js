class Ground{

constructor(x,y,w,h){
this.w = w
this.h = h
    var options={
        isStatic:true
    }

this.body = Bodies.rectangle(x,y,w,h,options)
World.add(world,this.body);
}

display(){
var pos = this.position
push()
rectMode(CENTER)
fill("blue")
noStroke()
rect(pos.x,pos.y,this.w,this.h)
pop()
}
}