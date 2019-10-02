
var xTurn = false;
var oTurn = false;

function load(){
  this.canvas = document.getElementById('display');
  this.context = this.canvas.getContext('2d');
  this.context.font = "bold 12px Arial";
  this.context.clearRect(0, 0, 500, 500);

  // Activate the listener
  const canvas = document.querySelector('canvas');
  canvas.addEventListener('mousedown', function(e) {
    var point = getCursorPosition(canvas, e);
    draw(point[0],point[1]);
  });

  drawBoard();

  // for now X always goes first
  xTurn = true;
}

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    //console.log("x: " + x + " y: " + y);
    var point = [x, y];
    return point;
}

function drawBoard(){
  var canvas = document.getElementById('display');
  var ctx = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;
  ctx.beginPath();
  ctx.moveTo(width/3,0);
  ctx.lineTo(width/3,height);
  ctx.stroke();
  ctx.moveTo((width/3)*2,0);
  ctx.lineTo((width/3)*2,height);
  ctx.stroke();
  ctx.moveTo(0,height/3);
  ctx.lineTo(width,height/3);
  ctx.stroke();
  ctx.moveTo(0,(height/3)*2);
  ctx.lineTo(width,(height/3)*2);
  ctx.stroke();
}

function draw(x,y){
  var row = findRow(y);
  var col = findCol(x);
  if(xTurn){
    drawX(col,row);
  }

  console.log("In draw() x: " + x + " y: " + y);
}

function drawX(col,row){
  var canvas = document.getElementById('display');
  var ctx = canvas.getContext('2d');
  ctx.beginPath();

  if(col===1 && row===1){
    ctx.moveTo(35,35);
    ctx.lineTo(125,125);
    ctx.stroke();
    ctx.moveTo(35,125);
    ctx.lineTo(125,35);
    ctx.stroke();
    return;
  }
}

function findRow(y){
  if(y<165){
    console.log("findRow(): 1");
    return 1;
  }
  if(y>164 && y<330){
    console.log("findRow(): 2");
    return 2;
  }
  if(y>329){
    console.log("findRow(): 3");
    return 3;
  }
}

function findCol(x){
  if(x < 165){
    console.log("findCol(): 1");
    return 1;
  }
  if(x>164 && x<330){
    console.log("findCol(): 2");
    return 2;
  }
  if(x>329){
    console.log("findCol(): 3");
    return 3;
  }
}
