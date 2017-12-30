// let snake=undefined;
// let food=undefined;
let game = {};
// let numberOfRows=60;
// let numberOfCols=120;

let animator=undefined;

const animateSnake=function() {
  let oldHead=game.snake.getHead();
  let oldTail=game.snake.move();
  let head=game.snake.getHead();
  let food = game.food;
  paintBody(oldHead);
  unpaintSnake(oldTail);
  paintHead(head);
  if(head.isSameCoordAs(food)) {
    game.snake.grow();
    createFood(numberOfRows,numberOfCols);
    drawFood(food);
    console.log(game.score);
  }
}

const changeSnakeDirection=function(event) {
  switch (event.code) {
    case "KeyA":
      game.snake.turnLeft();
      break;
    case "KeyD":
      game.snake.turnRight();
      break;
    case "KeyC":
      game.snake.grow();
      break;
    default:
  }
}

const addKeyListener=function() {
  let grid=document.getElementById("keys");
  grid.onkeyup=changeSnakeDirection;
  grid.focus();
}

const startGame=function() {
  let numberoOfRows = 60;
  let numberOfCOls = 120;
  game = new Game(snake,food,numberOfRows,numberOfCOls);
  game.createSnake();
  game.createFood(numberOfRows,numberOfCols);
  drawGrids(numberOfRows,numberOfCols);
  drawSnake(snake);
  drawFood(food);
  addKeyListener();
  animator=setInterval(animateSnake,140);
}

window.onload=startGame;
