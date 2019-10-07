
menuState = "startMenu";
noEscape = "Options? What options? You are playing a Shrek dating sim. What did you think you would find in here.";


function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255)

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
