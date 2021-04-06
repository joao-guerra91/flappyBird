class Bird {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 70;
    this.height = 50;
    this.gravity = 0.25;
    this.vx = 0;
    this.vy = 0.1;
    this.userPull = 0;
  }

  draw(playerName) {
    const image = new Image();
    switch (playerName) {
      case 'Mr. Flappy':   
        image.src = './images/bird1.png';
          break;
      case 'Mr. Green':
        image.src = './images/Mr-green.png';
          break;
      case 'Mr. Blue':
        image.src = './images/Mr-blue.png';
          break;
      case 'Miss White':
        image.src = './images/Miss-White.png';
          break;
    }
    context.drawImage(image, this.x, this.y, this.width, this.height)
  }

  update() {
    this.hitBottom();
    this.vy = this.vy + (this.gravity - this.userPull);
    this.y += this.vy;
  }

  hitBottom() {
    let rockBottom = canvas.height - 2.3*this.height;
    if (this.y > rockBottom) {
        this.y = rockBottom;
        this.vy = 0;
    }

  }
}




