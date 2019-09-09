// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let redamount = 0;
let redchangeamount = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  if (mouseIsPressed){
    if (mouseButton === LEFT)
      fill(redamount,0,265);
      noStroke();
      ellipse(mouseX, mouseY, 100, 100);

      redamount += redchangeamount;

      if (redamount >= 255) {
      redchangeamount *= -1;
      }
      if (redamount <= 0) {
      redchangeamount *= -1;
      }

      console.log(redamount);

    if (mouseButton === RIGHT){
      fill(0,0,0);
      noStroke()
      ellipse(mouseX, mouseY, 100, 100)
    }
    }


    
  

}
