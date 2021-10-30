class Fish{
    constructor(x,y,fishPos){
        var options ={
            'restitution' : 0.8,
            'friction' : 1.0,
            'density' : 1.0
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        this.fishPos = fishPos;
        this.Visiblity = 255;
        this.image = loadImage("images/fish2.png");
        this.coll = false;
        World.add(world,this.body);
    }
    display(){
        //console.log(this.body.speed);
        if(! this.coll){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image,0,this.fishPos,this.width,this.height);
            pop();
        }
        // else{
        //     
        //     push();
        //     this.Visiblity = this.Visiblity - 5;
        //     tint(255,this.Visiblity);
        //     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        //     pop();
        // }

        
       
        
    }
    

      remove(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        //image(this.image,0,this.fishPos,this.width,this.height);
        
        World.remove(world, this.body);
        
        this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, 0,this.fishPos, 50, 50);
         pop();
      }
    
}