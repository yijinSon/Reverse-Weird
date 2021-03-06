class gravitySystem {
  constructor(s) {
    this.groundCheck = false;
    this.skyCheck = true;

    this.pos = createVector(random(width), 0);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, random(0.03, 0.05));
    this.size = s;
  }

  normalGravity() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  reverseGravity() {
    this.vel.sub(this.acc);
    this.pos.add(this.vel);
  }

  ground() {
    if (this.pos.y > height - this.size/2 && this.groundCheck == false) {
      this.vel.y = 0;
      this.acc.y = 0;
      // this.groundCheck = true;
      // this.skyCheck = false;
    }
  }

  sky() {
    if (this.pos.y < this.size/2 && this.skyCheck == false) {
      this.vel.y = 0;
      this.acc.y = 0;
      // this.skyCheck = true;
      // this.groundCheck = false;
    }
  }
}
