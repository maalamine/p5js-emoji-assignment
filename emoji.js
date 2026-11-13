
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);

  // Face
  fill(255, 220, 50);
  stroke(0);
  strokeWeight(3);
  circle(200, 200, 250);

  // Heart eyes
  fill(255, 0, 0);
  textSize(100);
  textAlign(CENTER, CENTER);

  // Left heart
  text("♥", 140, 165);

  // Right heart
  text("♥", 260, 165);

  // Smile
  noFill();
  stroke(0);
  strokeWeight(4);
  arc(200, 220, 90, 70, 0, PI);
}
