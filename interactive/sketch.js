let kitty;
let sizeW = 175;
let sizeH = 200;
let bkColour = 255;
let message = "Click Kitty to Pet Him :)";
let kittyHurt;

function preload() {
  kitty = loadImage("assets/kitty.png");

  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(bkColour);
  imageMode(CENTER);
  image(kitty, width / 2, height / 2, sizeW, sizeH);

  textSize(32);
  textAlign(CENTER, TOP);
  text(message, width / 2,  100,);
 
  }

function mouseClicked(){
  bkColour = "red"

  kittyHurt = loadImage("assets/DeadCat.jpg");
  kitty = kittyHurt;

  message = "YOU KICKED THE KITTY YOU PRICK"
 
  
}


  








    
  


