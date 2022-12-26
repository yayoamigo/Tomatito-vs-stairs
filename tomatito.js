const tomatitoSprite = new Image();
tomatitoSprite.src = 'dog.png'


class Tomatito {
 constructor(){
  this.x = 150;
  this.y = 200;
  this.vy = 0;
  this.ogWidth = 573;
  this.ogHeight = 523;
  this.width = this.ogWidth/25
  this.height = this.ogHeight/25
  this.weight = 1;
  this.frameY = 5;

 }
 update(){
  let curve = Math.sin(angle) * 15;
  if (this.y > canvas.height - (this.height * 2) + curve){
      this.y = canvas.height - (this.height * 2) + curve;
      this.vy = 0;
  } else {
      this.vy += this.weight;
      this.vy *= 0.9
      this.y += this.vy;
  }
  if (this.y < 0+ this.height  ){
   this.y = 0 + this.height 
   this.vy = 0;
  }
  if (spacePressed && this.y > this.height  * 1.1) this.run();
 
 }
 draw(){
  ctx.fillStyle = 'red';
  ctx.drawImage(tomatitoSprite,  0, this.frameY * this.ogHeight, this.ogWidth, this.ogHeight, this.x - 30, this.y - 85, this.width * 4, this.height *4)
 }
 run(){
  this.vy -= 2.4;
  if(this.frameY >= 7) this.frameY = 6;
  else if (frame % 11 === 0) this.frameY++;
 }
}

const tomatito = new Tomatito();