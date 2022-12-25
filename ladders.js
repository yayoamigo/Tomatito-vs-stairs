const laddersArray = [];
let bark = new Audio()
bark.src = 'dogbark.wav'

class Ladder {
 constructor() {
  // let random = 300 * Math.random() - 150
  let randomTop = (Math.random() * canvas.height/3);
  if(randomTop < 200){
   randomTop += 230
  }
  let randomBottom = (Math.random() * canvas.height/3);
  if(randomBottom < 200 && randomTop < 400){
   randomBottom += 200
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
  ctx.fillRect(this.x, 0 , this.width, this.top);
  ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
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