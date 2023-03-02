import "./style.css";

const cursor = document.getElementById("cursor");

document.addEventListener('mousemove', e => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";

});


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let coord = { x: 0, y: 0 };

document.addEventListener("mousemove", start);
window.addEventListener("resize", resize);

resize();

function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}
function reposition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}
function start(event) {
  document.addEventListener("mousemove", draw);
  reposition(event);
}
function stop() {
  document.removeEventListener("mousemove", draw);
}
function draw(event) {
  ctx.beginPath();
  ctx.lineWidth = 20;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#FFFF00";
  ctx.moveTo(coord.x, coord.y);
  reposition(event);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
}


document.addEventListener('mousemove', e => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
  
  
});

