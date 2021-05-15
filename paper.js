class Paper {

constructor(x,y,r){
    var options={
        restitution :'0.3',
        density : '1.2 '
    }
    this.x=x
    this.y=y
    this.r=r
    this.image=loadImage("paper.png")
this.body=Bodies.circle(x,y,r,options)
World.add(world, this.body);
}
display()
{
			
    var paperPos=this.body.position;		

    push()
    translate(paperPos.x, paperPos.y);
imageMode(CENTER)
    //strokeWeight(4);
    fill(128,128,128)
    image(this.image,0,this.r,this.r);
    pop()
    
}

}



