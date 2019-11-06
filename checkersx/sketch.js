let grid;
let rows = 10;
let cols = 10;
let turnState;
let gvar = true;


function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = createEmptyGrid(cols, rows);
}

function draw() {
  background(220);
  displayGrid(grid, rows, cols);
  checkerLayout();
}

function windowResized() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
}

function keyTyped() {
  if (key === "r") {
    grid = createBoard(cols, rows);
  }
  if (key === "c") {
    grid = createEmptyGrid();
  }
  
  if (key === "a") {
    makeMenuP1();
  }
  
  if (key === "b"){
    makeMenuP2();
  }
}

// function mousePressed() {
//   let cellSize = width/cols;

//   let xCoord = floor(mouseX / cellSize);
//   let yCoord = floor(mouseY / cellSize);
  
//   if (grid[yCoord][xCoord] === 1) {
//     grid[yCoord][xCoord] = 0;
//   }
//   else {
//     grid[yCoord][xCoord] = 1;
//   }
// }



function displayGrid(grid, rows, cols) {
  let white = true;
  
  let cellSize = width / cols;
  for (let y = 0; y < rows; y++) {
     white = !white;
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        if (white){
          fill(255);
        
        }
        else {
          fill(0);
        }
        white = !white;
      }
      // else {
        //   fill(0);
        // }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createBoard(cols, rows) {
  let boardGrid = [];
  for (let x = 0; x < cols; x++) {
    boardGrid.push([]);
    for (let y = 0; y < rows; y++) {
      if(gvar === true){
        console.log("push0")
        boardGrid[x].push(0);
        gvar = false 
      }
      else{
        console.log("push1")
        boardGrid[x].push(1);
        gvar = true
        
      }

    }
  }
  return boardGrid;
}

function createEmptyGrid() {
  let emptyGrid = [];
  for (let x = 0; x < cols; x++) {
    emptyGrid.push([]);
    for (let y = 0; y < rows; y++){
      emptyGrid[x].push(0);
    }
  }
  return emptyGrid;
}

function checkerLayout() {
  fill("red")
  ellipse(0, 0, 50)
}

function isDead() {


}

function checkerPicked(){

}

function whosTurn() {

}


function makeMenuP1(){
  console.log("owo");

}

function makeMenuP2(){
  console.log("menuuo")
}