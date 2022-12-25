const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1100;
canvas.height = 1200;

let spacePressed = false;
let start = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gameSpeed = 2;
let audio_hit = new Audio()
audio_hit.src = 'qubodup-crash.ogg'
let backGround = new Image();
backGround.src = 'BG.png';
const BG = {
  x1: 0,
  x2: canvas.width,
  y: 0,
  width: canvas.width,
  height: canvas.height
}

const handleBG = () => {
  if(BG.x1 <= -BG.width + gameSpeed) BG.x1 = BG.width;
  else BG.x1 -= gameSpeed;
  if(BG.x2 <= -BG.width + gameSpeed) BG.x2 = BG.width;
  else (BG.x2 -= gameSpeed);
  ctx.drawImage(backGround, BG.x1, BG.y, BG.width, BG.height);
  ctx.drawImage(backGround, BG.x2, BG.y, BG.width, BG.height);
}
 
const handleCollisions = () => {
 for (let i = 0; i< laddersArray.length; i++){
  if (tomatito.x < laddersArray[i].x + laddersArray[i].width &&
   tomatito.x + tomatito.width > laddersArray[i].x && 
   ((tomatito.y < 0 + laddersArray[i].top  && tomatito.y + tomatito.height >0) ||
   (tomatito.y > canvas.height - laddersArray[i].bottom &&
    tomatito.y + tomatito.height < canvas.height))){
    audio_hit.play();
     ctx.font = "90px Anton";
      ctx.fillStyle = "purple";
      ctx.fillText(
        "Tomatito got scared!",
        80,
        canvas.height / 2 - 10
      );
     return true;
    }
 }
}


window.addEventListener('keydown', (e) => {
  if(e.code === 'Space')   spacePressed = true; start = true;
  setTimeout(() => {
   spacePressed = false;
 }, "100")
 })
 
 window.addEventListener('mousedown', (e) => {
   start = true;
   spacePressed = true;
   setTimeout(() => {
    spacePressed = false;
  }, "100")
 
 })


const animate = () =>{
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 handleBG();
 handleLadders();
 tomatito.update();
 tomatito.draw();
 ctx.fillStyle = 'fucsia';
 ctx.font = "90px Anton";
 ctx.strokeText(score, 500, 100);
 ctx.fillText(score, 500, 100);
 handleFarts();
 handleCollisions();
 if (handleCollisions())
  return;
 requestAnimationFrame(animate);
 angle+=0.11;
 hue++;
 frame++;
}

animate();


