let grid;
let rows = 15;
let cols = 15;
let turnState;
let gvar = true;


function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = createBoard(cols, rows);
}

function draw() {
  background(220);
  displayGrid(grid, rows, cols);
  
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
  
}

function mousePressed() {
  let cellSize = width/cols;

  let xCoord = floor(mouseX / cellSize);
  let yCoord = floor(mouseY / cellSize);
  
  if (grid[yCoord][xCoord] === 1) {
    grid[yCoord][xCoord] = 0;
  }
  else {
    grid[yCoord][xCoord] = 1;
  }
}



function displayGrid(grid, rows, cols) {
  let cellSize = width / cols;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill(255);
      }
      else {
        fill(0);
      }
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
  
}

function isDead() {


}

function checkerPicked(){

}

function whosTurn() {

}

