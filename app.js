function setup() {
  createCanvas(400, 400);
  background(220);
}

function faccia() {
  fill(0);
  ellipse(width/2, height/2, 200, 200);

  fill(255);
  ellipse(width/2 - 40, height/2 - 30, 40, 40);
  ellipse(width/2 + 40, height/2 - 30, 40, 40);
  fill(0);
  ellipse(width/2 - 40, height/2 - 30, 20, 20);
  ellipse(width/2 + 40, height/2 - 30, 20, 20);

  fill(255, 0, 0);
  arc(width/2, height/2 + 30, 120, 80, 0, PI);
}