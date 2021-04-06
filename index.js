let currentGame;
let obstaclesFrequency = 0;
let animationId;
let currentCharacter;  
const birdCanvas = document.getElementById('canvas');
const context = birdCanvas.getContext('2d');
document.getElementById('game-board').style.display  = 'block';

document.getElementById('mr-flappy').onclick = () => {
  setDisplays();
  currentCharacter = 'Mr. Flappy';
  startGame();
}
document.getElementById('mr-green').onclick = () => {
  setDisplays();
  currentCharacter = 'Mr. Green';
  startGame();
}
document.getElementById('mr-blue').onclick = () => {
  setDisplays();
  currentCharacter = 'Mr. Blue';
  startGame();
}
document.getElementById('miss-white').onclick = () => {
  setDisplays();
  currentCharacter = 'Miss White';
  startGame();
}

function setDisplays() {
  document.getElementById('game-board').style.display  = 'block';
 document.getElementById('game-over').style.display  = 'none';
  document.getElementById('change-player').style.display  = 'none';
}

function startGame() {
  currentGame = new Game();
  currentBird = new Bird(180, 320);
  currentGame.bird = currentBird;
  currentGame.bird.draw(currentCharacter);
  currentGame.score = 0;
  document.getElementById('score').innerHTML = 0;

  cancelAnimationFrame(animationId);
  updateCanvas();
}

function detectCollision(obstacle) {
  return !((currentGame.bird.y + currentGame.bird.height < obstacle.y) ||
   (currentGame.bird.y > obstacle.y + obstacle.height) ||
   (currentGame.bird.x + currentGame.bird.width < obstacle.x) ||
   (currentGame.bird.x > obstacle.x + obstacle.width));
}

function updateCanvas() {
  context.clearRect(0, 0, birdCanvas.width, birdCanvas.height);
  currentGame.bird.update()
  currentGame.bird.draw(currentCharacter);
  obstaclesFrequency++;
  if (obstaclesFrequency % 300 === 1) {
    const randomObstacleX = 800;
    const randomObstacleY = 0;
    const randomObstacleWidth = 100;
    const randomObstacleHeight = Math.floor(Math.random() * (200 - 100 + 1) + 100);
    const randomGap = Math.floor(Math.random() * (400 - 200  + 1) + 200);
    
    const upperObstacle = new Obstacle(
      randomObstacleX,
      randomObstacleY,
      randomObstacleWidth,
      randomObstacleHeight,
      'up'
    );
    currentGame.obstacles.push(upperObstacle);


    const bottomObstacle = new Obstacle(
      randomObstacleX,
      randomObstacleHeight + randomGap,
      randomObstacleWidth,
      canvas.height - (randomObstacleHeight + randomGap),
      'down'
    );
    currentGame.obstacles.push(bottomObstacle);
  };
  currentGame.obstacles.forEach((obstacle, index) => {

    obstacle.x -= 1;
    obstacle.draw();

    if (detectCollision(obstacle)) {
      currentGame.gameOver = true;
      obstaclesFrequency = 0;
      // currentGame.score = 0;
      // document.getElementById('score').innerHTML = 0;
      currentGame.obstacles = [];
      document.getElementById('game-board').style.display = 'none';
      document.getElementById('game-over').style.display = 'block';
      document.getElementById('change-player').style.display  = 'block';

      cancelAnimationFrame(animationId);
      // alert('BOOOM!');


    }

    if (obstacle.x < 0) {
      currentGame.score++;
    
      document.getElementById('score').innerHTML = Math.floor(currentGame.score/2);
      currentGame.obstacles.splice(index, 1);
    }

  }); 

  if(!currentGame.gameOver) {
    animationId = requestAnimationFrame(updateCanvas);
  }

};

  document.onkeydown = (e) => {
    if(e.keyCode === 32) {
      console.log(currentGame.bird.userPull)
        currentGame.bird.userPull = 0.8;
    }
  };

  document.onkeyup = (e) => {
    if(e.keyCode === 32) {
        currentGame.bird.userPull = 0;
    }
  };














