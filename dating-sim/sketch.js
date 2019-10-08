let whatScene;
let menuState = "startMenu";
let noEscape = "Options? What options? You are playing a Shrek dating sim. What did you think you would find in here.";
let normalShrek;
let angryShrek;
let willShieck;
let swampBack;

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255)

}

function preload(){
  normalShrek = loadImage("assets/standingShrek.png")
  swampBack = loadImage("assets/phatswamp.jpg")
}




function windowResized(){
  setup();

  
}

function draw() {
  

  if (menuState === "startMenu"){
    startMenu();
    console.log("dumbbitch")
  }

  else if (menuState === "game"){
    showGame();

  }

  else if (menuState === "options"){
    
    showOptions();
    

  }

}

function startMenu(){
  imageMode(CENTER)
  image(swampBack, height/2, width/2, 500, 400,)

  rectMode(CENTER);
  fill(0, 0, 255, 200);
  rect(width/2 - 200, height/2 , 300, 150)

  fill(0, 0, 255, 200);
  rect(width/2 + 200, height/2 , 300, 150)
}

function showOptions(){
  background("white")
  textAlign(CENTER);
  textSize(30);
  fill(0)
  text(noEscape, width/2, height/2);
  console.log("deaf");

  
}
