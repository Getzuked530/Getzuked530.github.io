
menuState = "startMenu";
noEscape = "Options? What options? You are playing a Shrek dating sim. What did you think you would find in here.";


function setup() {
  createCanvas(windowWidth, windowHeight)

}

function windowResized(){
  setup();

  startMenu();
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

function showOptions(){
  textAlign(CENTER, TOP,);
  textSize(30)
  text("hello world")

  
}
