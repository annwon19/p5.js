function jumper() {
  this.x = 50;
  this.y = 50;
  this.gravity = 0.5; //this force of gravity
  this.lift = -10; //jump up, opposing force of grav
  this.velocity = 15; //velocity of player

this.show = function () {
    fill(color('red'));
    ellipse(this.x, this.y, 50, 50);
  };

this.up = function () {
    this.velocity += this.lift; //jumping function
  };

this.update = function () {
    this.velocity += this.gravity; //gravity applied when not jumping
    this.y += this.velocity;
    this.velocity *= 0.9; //air resistance
    if (this.y > h) { //jumper lifts the floor
      this.y = h;
      this.velocity = 0;
    }
    if (this.y < 0) { //jumper lifts the ceiling
      this.y = 0;
      this.velocity = 0;
    }
  };
  
this.kill=function(){
 hit = collideRectCircle(barrier.x, barrier.y, jumper.x, jumper.y,100);
       if (hit===true) {
       document.getElementById('loser').innerHTML= "Game Over";
       noLoop();
}
};
} //object ends

function keyPressed() {
  if (keyCode === 32) { //Space bar to jump up
    jumper.up();
    //sound.play();
  }
 }
 