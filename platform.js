function platform(){
        this.x=w/2;
        this.y=h/2;
  
  this.show= function() {
          fill(color('blue'));
          rect(this.x, this.y, 100, 50);
      }
}
