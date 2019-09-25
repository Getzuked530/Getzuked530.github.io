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
let see = false;
let aeh = false;
let tea = false;
let x;
let y;
let sadMessage = ["Oh you... you killed him. :("]
function preload() {
  kitty = loadImage("assets/kitty.png");
  kittyHurt = loadImage("assets/DeadCat.jpg");

  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2
  y = height/2



}

function draw() {
  background(bkColour);
  imageMode(CENTER);
  image(kitty, x, y, sizeW, sizeH);

  textSize(32);
  textAlign(CENTER, TOP);
  text(bgMessage, width / 2,  100,);
 
  textSize(10);
  textAlign(BOTTOM, LEFT)
  text("try typing 'cat'", 100, 50 )

  heDead()

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



function windowResized(){
  setup();
}
 

function keyTyped(){
  if (key === "c"){
    see = true;
    console.log(see);
  }
  else if (key === "a"){
    aeh = true;
    console.log(aeh);
  }

  else if (key === "t"){
    tea = true;
    console.log(tea);
  }

}

function heDead(){
  if (see === true && aeh === true && tea === true){
    y -= 2
    bgMessage = sadMessage
    if ( y <= -100){
      see = false;
      aeh = false;
      tea = false;
      location.reload();
    }



    console.log("Paradise");
  }
}

