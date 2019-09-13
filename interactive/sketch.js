let kitty;
let sizeW = 175
let sizeH = 200
let bkColour = 255
let message = "hello world"


function preload() {
  kitty = loadImage("assets/kitty.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(bkColour);
  imageMode(CENTER);
  image(kitty, width / 2, height / 2, sizeW, sizeH);
  text(message, width / 2, 100,)
 
  }

function mouseClicked(){
  bkColour = "red"
  //text(message, width / 2, 100,);
  
}


  








    
  


