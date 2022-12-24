const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gameSpeed = 2;
 


const animate = () =>{
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 tomatito.update();
 tomatito.draw();
 handleFarts();
 requestAnimationFrame(animate);
 angle+=0.11;
 hue++;
}

animate();

window.addEventListener('keydown', (e) => {
 if(e.code === 'Space') spacePressed = true;
})

window.addEventListener('keyup', (e) => {
 if(e.code === 'Space') spacePressed = false;
})