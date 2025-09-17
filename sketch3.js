let stars = [];
let rotating = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  stroke(255, 170, 255);
  
  
  // Stars with random sizes and speed??
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size1: random(4, 10),
      size2: random(10, 20),
      angle: random(360),      // Random star angles
      speed: random(0.1, 0.8),    // Random star speed
    });
  }
}


//Draw stars 

function draw() {
  background(20, 0, 35);
  fill(random(180, 255), random(0), random(250, 255));

  for (let star of stars) {
    push();
    translate(star.x, star.y);
    if (rotating) {
      star.angle += star.speed; 
    }
    rotate(star.angle);
    drawStar(0, mouseY, star.size1, star.size2, 4);
    drawStar(mouseX, 0, star.size1, star.size2, 5);
    ellipse(mouseX, mouseY, 5, 5);
    ellipse(mouseY, mouseX, 1, 1);
    pop();
  }
}

// When mouse is clicked it stops rotation !


function mouseClicked() {
  rotating = !rotating;
}

function drawStar(x, y, radius1, radius2, npoints) {
  let angle = 360 / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < 360; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}