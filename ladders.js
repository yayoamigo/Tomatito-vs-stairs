const laddersArray = [];
let bark = new Audio()
bark.src = 'dogbark.wav'
const lad = new Image()
lad.src = 'lad.png'

class Ladder {
 constructor() {
  // let random = 300 * Math.random() - 150
  let randomTop = (Math.random() * canvas.height/3);
  if(randomTop < 300){
   randomTop += 430
  }
  let randomBottom = (Math.random() * canvas.height/3);
  if(randomBottom < 300 && randomTop < 500){
   randomBottom += 350
  }
  this.top =  randomTop
  this.bottom = randomBottom
  this.x = canvas.width;
  this.width = 40;
  this.color = 'black';
  this.random = 400 + (Math.random() * 300) ;
  this.counted = false;
 
 }
 draw(){
  ctx.fillStyle = this.color;
  // ctx.fillRect(this.x, 0 , this.width, this.top);
  ctx.drawImage(lad,0,0,500,600,this.x - 5, -30 , this.width + 10, this.top + 70)
  // ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
  ctx.drawImage(lad,0,0,500,600,this.x -5, canvas.height - this.bottom - 20, this.width + 10, this.bottom + 60)
 }
 update(){
  this.x -= gameSpeed;
  if (!this.counted && this.x < tomatito.x) {
   score++;
   this.counted = true;
   bark.play()

 }
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