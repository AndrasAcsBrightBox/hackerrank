const LIVING_CELL = "*";
function countLivingNeighbors(rowNum, colNum, arr) {
  let count = 0;
  if (
    rowNum - 1 >= 0 &&
    colNum - 1 >= 0 &&
    arr[rowNum - 1][colNum - 1] == LIVING_CELL
  ) {
    count++;
  }
  if (rowNum - 1 >= 0 && arr[rowNum - 1][colNum] == LIVING_CELL) {
    count++;
  }
  if (
    rowNum - 1 >= 0 &&
    colNum + 1 < arr[rowNum - 1].length &&
    arr[rowNum - 1][colNum + 1] == LIVING_CELL
  ) {
    count++;
  }

  if (colNum - 1 >= 0 && arr[rowNum][colNum - 1] == LIVING_CELL) {
    count++;
  }
  if (
    colNum + 1 < arr[rowNum].length &&
    arr[rowNum][colNum + 1] == LIVING_CELL
  ) {
    count++;
  }

  if (
    rowNum + 1 < arr.length &&
    colNum - 1 >= 0 &&
    arr[rowNum + 1][colNum - 1] == LIVING_CELL
  ) {
    count++;
  }
  if (rowNum + 1 < arr.length && arr[rowNum + 1][colNum] == LIVING_CELL) {
    count++;
  }
  if (
    rowNum + 1 < arr.length &&
    colNum + 1 < arr[rowNum + 1].length &&
    arr[rowNum + 1][colNum + 1] == LIVING_CELL
  ) {
    count++;
  }

  return count;
}

const DEAD_CELL = ".";
function gameOfLife(arr, numOfGens) {
  if (numOfGens == 0) return;
  const LIFE_SPACE_SIZE = 8;
  if (arr.length < LIFE_SPACE_SIZE) {
    arr = createLifeSpace(LIFE_SPACE_SIZE, arr);
  }
  printLifeSpace(arr, numOfGens);
  sleep(1000);

  let nextGen = [];
  for (let i = 0; i < arr.length; i++) {
    nextGen[i] = [];
    for (let j = 0; j < arr[i].length; j++) {
      const nc = countLivingNeighbors(i, j, arr);

      //underpopulation
      if (nc < 2 && arr[i][j] == LIVING_CELL) nextGen[i][j] = DEAD_CELL;
      // live on
      else if (2 <= nc && nc <= 3 && arr[i][j] == LIVING_CELL)
        nextGen[i][j] = LIVING_CELL;
      // reproduction
      else if (nc == 3 && arr[i][j] == DEAD_CELL) nextGen[i][j] = LIVING_CELL;
      // overpopulation
      else if (nc > 3 && arr[i][j] == LIVING_CELL) nextGen[i][j] = DEAD_CELL;
      else nextGen[i][j] = DEAD_CELL;
    }
  }
  gameOfLife(nextGen, numOfGens - 1);
}

function printLifeSpace(arr, numOfGens) {
  let s = `Generation: ${numOfGens} \n`;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      s += ` ${arr[i][j]} `;
    }
    s += "\n";
  }
  console.log(s);
}

function createLifeSpace(LIFE_SPACE_SIZE, arr) {
  let lifeSpace = [];
  for (let i = 0; i < LIFE_SPACE_SIZE; i++) {
    lifeSpace[i] = [];
    for (let j = 0; j < LIFE_SPACE_SIZE; j++) {
      if (i < arr.length && j < arr[i].length && arr[i][j] == LIVING_CELL) {
        lifeSpace[i][j] = LIVING_CELL;
      } else lifeSpace[i][j] = DEAD_CELL;
    }
  }
  return lifeSpace;
}

function sleep(sleepDuration) {
  var now = new Date().getTime();
  while (new Date().getTime() < now + sleepDuration) {
    /* do nothing */
  }
}

// Block
// gameOfLife([["*", "*"], ["*", "*"]], 10);

// Blinker
// gameOfLife([[".", "*", "."], [".", "*", "."], [".", "*", "."]], 10);

// Glider
gameOfLife([[".", ".", "*"], ["*", ".", "*"], [".", "*", "*"]], 15);
