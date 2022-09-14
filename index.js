let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let ctx2 = canvas.getContext('2d');
let ctx3 = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = 'magenta';
ctx.fillRect(50, 50, 300, 200);

ctx.strokeStyle = 'magenta';
ctx.lineWidth = 10;
ctx.strokeRect(500, 50, 300, 300);

ctx3.arc(window.innerWidth / 2, window.innerHeight / 2, 100, 0, Math.PI * 2);
ctx3.fill();