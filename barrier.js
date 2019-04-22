function barrier(){
  this.x=0;
  this.y=50;
  this.gravity=0.5; //this force of gravity
  this.lift=10;    //jump up, opposing force of grav
  this.velocity=0;
  
this.show= function() {
    //image(laser, this.x, this.y,50,100);
    fill(color('white'));
    rect(this.x, this.y, 50, 100);
    //math.floor(math.random());f
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
  
this.kill=function(){
  hit=collideRectCircle(this.x,this.y, barrier.x, barrier.y, jumper.x, jumper.y, 20);
  if (hit===true) {
          noLoop();
          document.getElementById('loser').innerHTML= "Game Over, You Lose.";
}
};
}
