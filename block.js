class block extends gravitySystem{

  constructor(){
    super(random(50,100));
  }

  normal(){
      this.normalGravity();
      this.ground();
  }

  reverse(){
      this.reverseGravity();
      this.sky();
  }

  display(){
    fill(150,150);
    strokeWeight(1);
    stroke(0);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, this.size*2, this.size*2);
  }
}
