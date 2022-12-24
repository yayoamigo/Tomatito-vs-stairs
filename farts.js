const fartsArray = [];

class Fart {
 constructor(){
  this.x = tomatito.x;
  this.y = tomatito.y;
  this.size = Math.random() * 7 + 3;
  this.speedY = (Math.random() *1) - 0.5;
  this.color = 'hsla(' + hue +', 100%, 50%, 0.8 )';
 }
 update(){
  this.x -= gameSpeed;
  this.y += this.speedY;
 }
 draw(){
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fill();
 }
}

const handleFarts = () => {
 fartsArray.unshift(new Fart);
 for (i = 0; i < fartsArray.length; i++){
  fartsArray[i].update();
  fartsArray[i].draw();
 }
 if(fartsArray.length > 200){
  for(let i = 0; i < 20; i++){
   fartsArray.pop(fartsArray[i])
  }
 }
}