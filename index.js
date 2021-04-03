let currentGame;
let obstaclesFrequency = 0;
const birdCanvas = document.getElementById('canvas');
const context = birdCanvas.getContext('2d');
document.getElementById('game-board').style.display  = 'block';
document.getElementById('start-button').onclick = () => {
  startGame();
}


function startGame() {
  currentGame = new Game();
  currentBird = new Bird(180, 320);
  currentGame.bird = currentBird;
  currentGame.bird.draw();
 updateCanvas();
}

function updateCanvas() {
  context.clearRect(0, 0, birdCanvas.Width, birdCanvas.height);
  currentGame.bird.draw();
  obstaclesFrequency++;
  if (obstaclesFrequency % 100 === 1) {
    const randomObstacleX = 420;
    const randomObstacleY = 0;
    const randomObstacleWidth = 80;
    const randomObstacleHeight = Math.floor(Math.random()*50) + 250;
    const newOsbtacle = new Obstacle(
      randomObstacleX,
      randomObstacleY,
      randomObstacleWidth,
      randomObstacleHeight,
    );
    currentGame.obstacles.push(newOsbtacle);
  }
  currentGame.obstacles.forEach((obstacle, index) => {
    obstacle.y += 1;
    obstacle.draw();
  });
 }















