
menuState = "startMenu"

function setup() {
  createCanvas(windowWidth, windowHeight)

}

function draw() {
  background(255)

  if (menuState === "startMenu"){
    startMenu();
  }

  else if (menuState === "game"){
    showGame();

  }

  else if (menuState === "options"){
    showOptions();

  }

}

function startMenu(){
  rectMode(CENTER);
  fill(0, 0, 255, 200);
  rect(width/2 - 200, height/2 , 300, 150)

  fill(0, 0, 255, 200);
  rect(width/2 + 200, height/2 , 300, 150)
}
