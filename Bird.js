class Bird {
  constructor(x, y) {
    this.x = x;
    this.y = y;
   this.width = 70;
   this.height = 70;
 this.draw()
  }

  draw() {
    const image = new Image();
    image.src = './images/bird.png';
    image.addEventListener('load', () => {
      context.drawImage(image, this.x, this.y, this.width, this.height)

    })
  }
}