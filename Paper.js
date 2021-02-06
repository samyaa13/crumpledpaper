class Paper
{
    constructor(x,y,width,height){
        this.image = loadImage("sprites/paper.png");
        this.x = x;
        this.y = y;
        this.width = 100
        this.height = 100

        var options={
            isStatic : false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
    }

    display()
	{
			push()
			rectMode(CENTER);
			strokeWeight(4);
			fill("black");
			pop()
			
	}

    
}

