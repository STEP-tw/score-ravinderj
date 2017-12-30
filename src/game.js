const Game = function(snake,food,noOfRows,noOfCOls){
  this.score = 0;
  this.snake = snake;
  this.food = food;
  let numberOfRows=noOfRows;
  let numberOfCols=noOfCOls;
}

Game.prototype.increaseScore = function(){
  this.score += 10;
}

Game.prototype.createFood = function(){
  let numberOfRows = this.numberOfRows;
  let numberOfCols = this.numberOfCols;
  this.food = generateRandomPosition(numberOfCols,numberOfRows);
  return this.food;
}

Game.prototype.createSnake = function(){
    let tail=new Position(12,10,"east");
    let body=[];
    body.push(tail);
    body.push(tail.next());
    let head=tail.next().next();
    let snake = new Snake(head,body);
    return this.snake = snake;
}
