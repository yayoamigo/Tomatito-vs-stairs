const laddersArray = [];

class Ladder {
 constructor() {
  this.top = (Math.random() * canvas.height/3) + 40;
  this.bottom = (Math.random() * canvas.height/3) + 40;
  this.x = canvas.width;
  this.width = 20;
  this.color = 'black';
 }
 draw(){
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, 0, this.width, this.top);
  ctx.fillRect(this.x, canvas.height - this.bottom , this.width, this.bottom )
 }
 update(){
  this.x -= gameSpeed;
  this.draw();
 }
}

const handleLadders = () => {
 if (frame%150 === 0){
  laddersArray.unshift(new Ladder);
 }
 for (let i = 0; i < laddersArray.length; i++){
  laddersArray[i].update()
 }
 if (laddersArray.length > 20){
  laddersArray.pop(laddersArray[0])
 }
}