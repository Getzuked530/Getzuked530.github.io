let kitty;
let sizeW = 175;
let sizeH = 200;
let bkColour = 255;
let bgMessage = "Click Kitty to Pet Him :)";
let kittyHurt;
let hurtMessage = ["OOOOW", "HOW COULD YOU", "YOU BASTARD YOU HURT HIM", "YOU LIKE HITTING KITTIES HUH","YOU MONSTER","WHY ARE YOU SO MEAN HURTING THIS POOR BOY" ];
let hmLast;
let hmNew;
let soundList = ["a","b","c","d","e"];

function preload() {
  kitty = loadImage("assets/kitty.png");
  kittyHurt = loadImage("assets/DeadCat.jpg");

  
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
  text(bgMessage, width / 2,  100,);
 
  }

function mouseClicked(){
  
  bkColour = "red"

  
  kitty = kittyHurt;

  
  bgMessage = random(hurtMessage);
  hmNew = bgMessage; 


  while (hmLast === hmNew ){
    hmNew = random(hurtMessage);
    bgMessage = hmNew;


    console.log("dupe");
  }

  hmLast = hmNew;
  console.log(hmLast);

 // hmLast = bgMessage;
 // console.log(hmLast);

}

