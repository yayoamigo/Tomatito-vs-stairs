const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 900;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gameSpeed = 2;
 
const handleCollisions = () => {
 for (let i = 0; i< laddersArray.length; i++){
  if (tomatito.x < laddersArray[i].x + laddersArray[i].width &&
   tomatito.x + tomatito.width > laddersArray[i].x && 
   ((tomatito.y < 0 + laddersArray[i].top  && tomatito.y + tomatito.height >0) ||
   (tomatito.y > canvas.height - laddersArray[i].bottom &&
    tomatito.y + tomatito.height < canvas.height))){
     ctx.font = "40px sans-serif";
      ctx.fillStyle = "Red";
      ctx.fillText(
        "Game Over, Your Score is " + score,
        50,
        canvas.height / 2 - 10
      );
     return true;
    }
 }
}

function loss() {
 if (tomatito.vy > 0) {
   audio_hit.play()
 }
 tomatito.vy = 0
}

const animate = () =>{
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 handleLadders();
 tomatito.update();
 tomatito.draw();
 ctx.fillStyle = 'blue';
 ctx.font = "90px Georgia";
 ctx.strokeText(score, 450, 70);
 ctx.fillText(score, 450, 70);
 handleFarts();
 handleCollisions();
 if (handleCollisions()) return;
 requestAnimationFrame(animate);
 angle+=0.11;
 hue++;
 frame++;
}

animate();

window.addEventListener('keydown', (e) => {
 if(e.code === 'Space') spacePressed = true;
})

window.addEventListener('mousedown', (e) => {
  spacePressed = true;
  setTimeout(() => {
   spacePressed = false;
 }, "100")

})
window.addEventListener('keyup', (e) => {
 if(e.code === 'Space') spacePressed = false;
})

