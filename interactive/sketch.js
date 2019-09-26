

let kitty;
let sizeW = 175;
let sizeH = 200;
let bkColour = 255;
let bgMessage = "Click Kitty to Pet Him :)";
let kittyHurt;
let hurtMessage = ["WHAT KIND OF HORRIBLE PERSON HITS A CAT", "HOW COULD YOU", "YOU BASTARD YOU HURT HIM", "YOU LIKE HITTING KITTIES HUH","YOU MONSTER","WHY ARE YOU SO MEAN HURTING THIS POOR BOY" ];
let hmLast;
let hmNew;
let see = false;
let aeh = false;
let tea = false;
let x;
let y;
let sadMessage = ["Oh you... you killed him. :("]
let meme;
let wolvesPlay = true;


function preload() {
  //Loading images for normal and hurt cat
  kitty = loadImage("assets/kitty.png");
  kittyHurt = loadImage("assets/DeadCat.jpg");

  soundFormats("wav")
  //Loads sound for secret event
  meme = loadSound("assets/WooAhh.wav")

  
}

//Creating canvas and placment of image
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2
  y = height/2

}

function draw() {

  //Dictating background color and current image
  background(bkColour);
  imageMode(CENTER);
  image(kitty, x, y, sizeW, sizeH);

  //Text for insult message
  textSize(40);
  textAlign(CENTER, TOP);
  text(bgMessage, width / 2,  100,);
 
  //Hint message at top left
  textSize(14);
  textAlign(BOTTOM, LEFT)
  text("try typing 'cat'", 100, 50 )

  //Activates the stupid hidden meme when reqiuerments met
  heDeadMovement()

}

function mouseClicked(){
  
  bkColour = "red"

  kitty = kittyHurt;

  
  bgMessage = random(hurtMessage);
  hmNew = bgMessage; 

  // Checks for duplicates and replaces them with new message until different
  while (hmLast === hmNew ){
    hmNew = random(hurtMessage);
    bgMessage = hmNew;


    console.log("dupe");
  }

  //essential debugging for dupe checking
  hmLast = hmNew;
  console.log(hmLast);

 // hmLast = bgMessage;
 // console.log(hmLast);

}



function windowResized(){
  setup();
}
 

function keyTyped(){

  //saving variables
  if (key === "c" || key === "C"){
    see = true;
    console.log(see);
  }
  else if (key === "a" || key === "A"){
    aeh = true;
    console.log(aeh);
  }

  else if (key === "t" || key === "T"){
    tea = true;
    console.log(tea);
  }

  //Sound Test
 // else if (key === "w"){
  //  meme.play()
 // }

}

function heDeadMovement(){
  //Checks if each variable is true 
  if (see === true && aeh === true && tea === true){

    // Plays sound only once while in draw loop by turning itself false after it runs once
    if (wolvesPlay === true){
      meme.play()
      wolvesPlay = false;
    }

    //Moves current cat upwards
    y -= 1


    bgMessage = sadMessage

    //Once image leaves frame for long enough scene resets
    if ( y <= -150){
      see = false;
      aeh = false;
      tea = false;
      location.reload();
    }



    
  }
}

