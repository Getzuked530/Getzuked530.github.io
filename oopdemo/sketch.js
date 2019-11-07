// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let george;
let jenna;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  george = new Walker();
  jenna = new Walker();
}

function draw() {
  george.move();
  jenna.move();

  george.display();
  jenna.display();
}

class Walker {
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.fillColor = color(random(255),random(255),random(255))
    this.stepSize = 6;
    this.radius = 3;
  }


  display() {
    fill(this.fillColor);
    noStroke();
    circle(this.x,this.y,this.radius * 2);
  }

  move() {
    let choice = random(100);

    //up
    if (choice < 25){
      this.y -= this.stepSize;
    }

    else if (choice < 50){
      this.y += this.stepSize;
    }

    else if (choice < 75){
      this.x -= this.stepSize;
    }

    else{
      this.x += this.stepSize;
    }
  }
}