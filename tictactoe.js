
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
  // get the canvas
  var canvas = document.getElementById('display');
  // create canvas rendering context
  var ctx = canvas.getContext('2d');
  // get canvas dementions
  var width = canvas.width;
  var height = canvas.height;

  // start to draw out the lines
  ctx.beginPath();
  // leftmost vertical line
  ctx.moveTo(width/3,0);
  ctx.lineTo(width/3,height);
  // rightmost vertical line
  ctx.moveTo((width/3)*2,0);
  ctx.lineTo((width/3)*2,height);
  // top horizontal line
  ctx.moveTo(0,height/3);
  ctx.lineTo(width,height/3);
  // bottom horizontal line
  ctx.moveTo(0,(height/3)*2);
  ctx.lineTo(width,(height/3)*2);
  // draw
  ctx.stroke();
}

function draw(x,y){
  // find the row
  var row = findRow(y);
  // find the column
  var col = findCol(x);
  // are we drawing an X or O
  var x_o = "";
  if(xTurn){
    x_o = "X";
  }
  if(oTurn){
    x_o = "O";
  }

  // get the canvas ...
  var canvas = document.getElementById('display');
  // get the canvas rendering
  var ctx = canvas.getContext('2d');
  // start
  ctx.beginPath();
  // font stuff
  ctx.font = "70px Arial";

  // this is just going to get fucking ugly with 9 different if's to determine
  // where the fuck we are ... after we are also going to need to store
  // this information for comparing the winner ... UGH!
  if(col===1){
    if(row===1){
      ctx.fillText(x_o,56,110);
      return;
    }
    if(row===2){
      ctx.fillText(x_o,56,275);
      return;
    }
    if(row===3){
      ctx.fillText(x_o,56,430);
      return;
    }

  }

  if(col===2){
    if(row===1){
      ctx.fillText(x_o,225,110);
      return;
    }
    if(row===2){
      ctx.fillText(x_o,225,275);
      return;
    }
    if(row===3){
      ctx.fillText(x_o,225,430);
      return;
    }
  }

  if(col===3){
    if(row===1){
      ctx.fillText(x_o,385,110);
      return;
    }
    if(row===2){
      ctx.fillText(x_o,385,275);
      return;
    }
    if(row===3){
      ctx.fillText(x_o,385,430);
    }
  }
  console.log("In draw() x: " + x + " y: " + y);
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
