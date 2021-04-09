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
    this.imageSrcBlue = "./images/MrBlues/up.png"
    this.imageScrGreen = './images/McGreen/Mr-green-up.png'
    this.imageScrWhite = './images/MissWhite/Miss-White-up.png'
  }

  draw(playerName) {
    const image = new Image();
    switch (playerName) {
      case 'Mr. Flappy':   
        image.src = './images/bird1.png';
          break;
      case 'Mr. Green':
        image.src = this.imageScrGreen;
          break;
      case 'Mr. Blue':
        image.src = this.imageSrcBlue;
          break;
      case 'Miss White':
        image.src = this.imageScrWhite;
          break;
    }
    context.drawImage(image, this.x, this.y, this.width, this.height)
  }

  update() {
    this.hitBottom();
    this.hitTop();
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

   hitTop() {
     let stratosphere = 0 - 5*this.height;
     if (this.y < stratosphere) {
         this.y = 0;
     }
   }
}



//-----------------------------------SPRITES BRAIN STORM------------------------

//-----Mr.Blues------

// this.blueFlying = [
//   "./images/MrBlues/up.png",
//   "./images/MrBlues/middle.png",
//   "./images/MrBlues/down.png",
// ];
// this.currentBlueFlyingIndex = 0;


// drawBlueFlying() {
//   if (this.currentBlueFlyingIndex === 2) {
//     this.currentBlueFlyingIndex = 0;
//   } else {
//     this.currentBlueFlyingIndex += 1;
//   }
//   this.image.src = this.blueFlying[this.currentBlueFlyingIndex];
//   this.draw();
// }



//------Mc Green------

// this.greenFlying = [
//   "./images/McGreen/Mr-green-down.png",
//   "./images/McGreen/Mr-green-up.png",
// ];
// this.currentGreenFlyingIndex = 0;


// drawGreenFlying() {
//   if (this.currentGreenFlyingIndex === 1) {
//     this.currentGreenFlyingIndex = 0;
//   } else {
//     this.currentGreenFlyingIndex += 1;
//   }
//   this.image.src = this.greenFlying[this.currentGreenFlyingIndex];
//   this.draw();
// }


//---------Miss White-----------

// this.greenFlying = [
//   "./images/MissWhite/Miss-White-up.png",
//   "./images/MissWhite/Miss-White-down.png",
// ];
// this.currentGreenFlyingIndex = 0;


// drawGreenFlying() {
//   if (this.currentGreenFlyingIndex === 1) {
//     this.currentGreenFlyingIndex = 0;
//   } else {
//     this.currentGreenFlyingIndex += 1;
//   }
//   this.image.src = this.greenFlying[this.currentGreenFlyingIndex];
//   this.drawPlayer();
// }








