
let parrots;
let filteredImage;

function preload() {
  parrots = loadImage("assets/parrot.jpg")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  filteredImage = greyscale(parrots);

  //imageMode(CENTER);
  image(filteredImage, 0, 0);
  
  


}



function greyscale(sourceImage){
  let img = createImage(sourceImage.width, sourceImage.height)
  
  img.loadPixels();
  sourceImage.loadPixels();

  for (let x =0; x < sourceImage.width; x++){
    for (let y = 0; y < sourceImage.height; y++){
      let p = sourceImage.get(x, y);

      //apply Filter
      let r = red(p);
      let g = green(p);
      let b = blue(p);

      let average = (r + g + b) / 3;

      if (dist(mouseX, mouseY, x, y) > 100){
      img.set(x, y, color(average, average , average));
    }
      else {
        img.set(x, y, color(r, g , b));
    }
  }
  }
  img.updatePixels();
  return img;

}