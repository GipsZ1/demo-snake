let grid = document.querySelector(".grid");
let scoresDisplay = document.querySelector(".scoresDisplay");
let popup = document.querySelector(".popup");
let playAgain = document.querySelector(".playAgain");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let up = document.querySelector(".up");
let down = document.querySelector(".down");
const snake = [2, 3, 4];

function createGrid(rows, cols) {
  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = i;
    grid.append(cell);
  }
}

createGrid(10, 10);

function createSnakeByArray(snakeIndices) {
  const snakeHeadIndex = snakeIndices.length - 1;

  snakeIndices.forEach((id, index) => {
    const cell = document.getElementById(id);

    if (index === snakeHeadIndex) {
      cell.classList.add("snake_head");
    } else {
      cell.classList.add("snake");
    }
  });
}
createSnakeByArray(snake);

function removeSnakeByArray(snakeIndices) {
  const snakeHeadIndex = snakeIndices.length - 1;

  snakeIndices.forEach((id, index) => {
    const cell = document.getElementById(id);

    if (index === snakeHeadIndex) {
      cell.classList.remove("snake_head");
    } else {
      cell.classList.remove("snake");
    }
  });
}

// setTimeout(removeSnakeByArray(snake), 2000);

function moveRight() {
  removeSnakeByArray(snake);
  createSnakeByArray([3, 4, 5]);
}
right.addEventListener("click", moveRight);
