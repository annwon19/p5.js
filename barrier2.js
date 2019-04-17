function platform(){
        this.x=w/2;
        this.y=h/2;
        this.gravity = 0.5; //this force of gravity
        this.lift = -10; //jump up, opposing force of grav
        this.velocity = 0; //velocity of player

  
  this.show= function() {
          fill(color('blue'));
          rect(this.x, this.y, 100, 50);
      };
      
  this.up=function(){
        this.velocity+=this.lift;  //jumping function
      };
      
      this.update=function(){
        this.velocity+=this.gravity; //gravity applied when not jumping
        this.x -= this.velocity;
        this.velocity*=0.95; //air resistance
        if (this.x < 0 - 50) {
            this.velocity = 0;
            this.y = Math.floor(Math.random()* h + 100);
            this.x = w + 50;
        }
      };
}