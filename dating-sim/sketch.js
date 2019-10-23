let whatScene;
let menuState = "startMenu";
let noEscape = "Options? What options? You are playing a game desinged by me. What did you think you would find in here.";
let normalShrek;
let angryShrek;
let willShieck;
let swampBack;
let websiteArray = ['https://www.ebay.ca/itm/SHREK-VHS-TAPE-CLAMSHELL-EDITION/372703462738?hash=item56c6db8552:g:2gQAAOSwAy9dHYRo', 'https://en.wikipedia.org/wiki/Insanity','https://www.joemamaspizza.com/','https://www.youtube.com/watch?v=iqKdEhx-dD4', 'https://blog.upperlinecode.com/top-10-tips-for-your-first-year-teaching-computer-science-7225d57c65e5'];
let myVideo;


function setup() {
  canvasWidth = windowWidth;
  canvasHeight = windowHeight;
  createCanvas(canvasWidth, canvasHeight)
  background(255)

  //myVideo = createVideo('assets/zavala.mp4');
 
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
    checkIfMenuButtonClicked();
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
  
  imageMode(CENTER)
  image(swampBack, windowWidth/2, windowHeight/2, windowWidth, windowHeight)

  textAlign(CENTER, TOP)
  fill("white")
  stroke("black")
  text("Welcome to Hell on Earth aka Shrek Dating Sim", width/2, 100)

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

  
}

function checkIfMenuButtonClicked(){
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

  imageMode(CENTER)
  image(swampBack, windowWidth/2, windowHeight/2, windowWidth, windowHeight)


  textAlign(CENTER);
  textSize(30);
  fill("white");
  stroke("black");
  text(noEscape, width/2, height/2 - 100);
  console.log("deaf");

  textAlign(CENTER);
  text("Like seriously what?", width/2, height/2)

  textAlign(CENTER);
  text("I can give you the option to leave if you want?", width/2, height/2 + 100)

  textAlign(CENTER);
  text("Try typing any number from 1 to 5 included.", width/2, height/2 + 200)

  
  keyTyped();

  
}

function showGame(){
  background("black");

  

  //myVideo.loop(0);
  //myVideo.size(500,500);

}

function keyTyped(){
  if (key === '1'){
    console.log("webas")
    window.open(websiteArray[0])
    key = !key;
    
  }
  else if (key === '2'){
    window.open(websiteArray[1])
    key = !key;
  }
  else if (key ==='3'){
    window.open(websiteArray[2])
    key = !key;
  }
  else if(key === '4'){
    window.open(websiteArray[3])
    key = !key;
  }
  else if(key === '5'){
    window.open(websiteArray[4])
    key = !key;
  }

  else if(menuState === 'options' && keyCode === 8){
    menuState = "startMenu";
    keyCode = !keyCode;
  }
}


// function myVideoLoad(){
//   myVideo.loop(0);
//   myVideo.volume(0);
//   console.log('chadio')

// }
