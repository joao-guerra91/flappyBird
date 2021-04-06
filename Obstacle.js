class Obstacle {
  constructor(x, y, width, height, position) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.position = position;
  }

  draw() {
    const pipeImage = new Image();
    if(this.position === 'up') {
      pipeImage.src = './images/upper-pipe1.png';
    } else {
      pipeImage.src = './images/bottom-pipe1.png';
    }
    context.drawImage(pipeImage, this.x, this.y, this.width, this.height)
  }



}