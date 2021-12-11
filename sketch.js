var snowy = [];

function setup() {
  createCanvas(300, 500);
  for (let i=0 ; i<100 ; i++){
    snowy[i] = new Snow();
  }
}

function draw() {
    background(0);
  for (let i=0 ; i<snowy.length ; i++){
    snowy[i].update();
    snowy[i].display();
    snowy[i].ground();
  }

}
