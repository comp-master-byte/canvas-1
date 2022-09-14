let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let grad = ctx.createLinearGradient(0, 0, 500, 0);
grad.addColorStop('0', 'magenta');
grad.addColorStop('.50', 'blue');
grad.addColorStop('1', 'red');

ctx.fillStyle = grad;

ctx.font = '40px Georgia';
ctx.fillText('Hello world!', 50, 70)

// ctx.scale(3,3);
// ctx.lineWidth = 5;

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(25, 100);
// ctx.lineTo(75, 100);
// ctx.closePath();
// ctx.stroke();