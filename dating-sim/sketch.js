let whatScene;
let menuState = "startMenu";
let noEscape = "Options? What options? You are playing a Shrek dating sim. What did you think you would find in here.";
let normalShrek;
let angryShrek;
let willShieck;
let swampBack;
let websiteArray;

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
    checkIfButtonClicked();
    console.log("dumbbitch")
  }

  else if (menuState === "startGame"){
    showGame(); 

  }

  else if (menuState === "options"){
    
    showOptions();
    

  }


 

}

function startMenu(){
  

  //show start button
  rectMode(CENTER);
  fill(0, 255, 0, 125)
  rect(width/2, height/2 - 100, 400, 150);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(0);
  text("Start Game", width/2, height/2 - 100);

  


  //Show Options button
  fill(0, 255, 0, 125);
  rect(width/2, height/2 + 100, 400, 150);
  fill(0);
  text("Options", width/2, height/2 + 100);

  textAlign(CENTER, TOP)
  text("Welcome to Hell on Earth", width/2, 100)
}

function checkIfButtonClicked(){
  if (mouseIsPressed){
    // check start button
    if (mouseX > width/2 - 200 && mouseX < width/2 + 200 &&
        mouseY > height/2 - 100 - 75 && mouseY < height/2 - 100 +75){
          menuState = "startGame";
          console.log("hecker")
        }

     // check options button
     if (mouseX > width/2 - 200 && mouseX < width/2 + 200 &&
      mouseY > height/2 + 100 - 75 && mouseY < height/2 + 100 + 75){
        menuState = "options";
  }
}
}

function showOptions(){
  background("white")
  textAlign(CENTER);
  textSize(30);
  fill(0)
  text(noEscape, width/2, height/2 - 100);
  console.log("deaf");

  textAlign(CENTER);
  text("Like seriously what?", width/2, height/2)

  textAlign(CENTER);
  text("I can give you the option to leave if you want?", width/2, height/2 + 100)

  if (keyIsPressed){
    window.open('https://www.cbi.ca/services/mental-health');
    keyIsPressed = false;
  }

  
}

function showGame(){
  background("black")
}
