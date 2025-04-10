var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var shapes = [];
var cicleStart = 0,
    cicleEnd = Math.PI * 2,
    rayon = 0.5,
    x = 0,
    y = 0,
    randomMoveX = 0,
    randomMoveY = 0,
    number = 2500,
    curShape = [],
    mouseX = canvas.width / 2,
    mouseY = canvas.height / 2,
    on = false;

canvas.addEventListener('click', mouseCoords);
mouseHandler();

function mouseCoords(mouseEvent) {
  mouseX = mouseEvent.pageX - canvas.scrollLeft;
  mouseY = mouseEvent.pageY - canvas.scrollTop;  
  mouseHandler();
}
function mouseHandler(mouseEvent) {
  shapes.length = 0 ;
  curShape.length = 0 ;  
  
  for(var i = 0; i < number; i++){
    x = mouseX;
    y = mouseY;              

    shapes.push({x : x, y : y, rayon : rayon, start : cicleStart, end : cicleEnd});
  }
  if (on === false) {
    on = true;
    draw();
  }  
}

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#70E3B4";

  for(var i = 0; i < number; i++){
    curShape = shapes[i];
    randomMoveX = Math.random() < 0.5 ? -1.5 : 1.5;
    randomMoveY = Math.random() < 0.5 ? -1.5 : 1.5;

    // conditions pour ne pas que les formes sortent du canvas
    if (curShape.x < rayon) {
      curShape.x = curShape.x + 1;
    } else if (curShape.x > canvas.width - rayon) {
      curShape.x = curShape.x - 1;
    } else {
      curShape.x = curShape.x + randomMoveX;
    }      
    if (curShape.y < rayon) {
      curShape.y = curShape.y + 1;
    } else if (curShape.y > canvas.height - rayon) {
      curShape.y = curShape.y - 1;
    } else {
      curShape.y = curShape.y + randomMoveY;
    }

    ctx.beginPath();
    ctx.arc(curShape.x, curShape.y, curShape.rayon, curShape.start, curShape.end);
    ctx.fill();
  }
  setTimeout(draw, 1);
}