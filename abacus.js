var NUM_OF_BEADS = 13;
var NUM_OF_ROWS = 10;
var objs = [];
var CANVAS_WIDTH = 60;
var CANVAS_HEIGHT = 60;
var PADDING_SIDES = 4;
var PADDING_TOP = 30;

function init(){
  var canvas;
  var rectangle = document.getElementById("rectangle");

  for(var i = 0; i < NUM_OF_ROWS; i++){
    objs.push([]);
    for(var j = 0; j < NUM_OF_BEADS; j++){
      canvas = document.createElement("canvas");
      canvas.width = CANVAS_WIDTH;
      canvas.height = CANVAS_HEIGHT;
      //canvas_rowNum_beadNum
      canvas.id = "canvas_"+i+"_"+j;
      objs[i].push({x:0, y:0, w:CANVAS_WIDTH, h:CANVAS_HEIGHT / 2});
      rectangle.appendChild(canvas);
    }
  }

  
  rectangle.addEventListener("touchmove", onTouchMove, false);

  function onTouchMove(e){
    e.preventDefault();
    if(e.target !== e.currentTarget){
      var touch = event.targetTouches[0];
      var canvas = e.target;
      var canvasIds = canvas.id.split("_");
      var rowNum = parseInt(canvasIds[1]);
      var beadNum = parseInt(canvasIds[2]);

      xObj = beadNum*(PADDING_SIDES+CANVAS_WIDTH);
      yObj = rowNum*(PADDING_TOP+CANVAS_HEIGHT);
      if(detectHit(xObj, yObj, touch.pageX, touch.pageY, xObj, yObj)) {
          // Assign new coordinates to our object
          if(yObj > touch.pageY){
            objs[rowNum][beadNum].y = 0;
          }
          else {
            objs[rowNum][beadNum].y = 30;
          }

          // Redraw the canvas
          draw();
        }
      }
      e.stopPropagation();
  }
  draw();
}

function draw() {
  var ctx, canvas;
  for(var i = 0; i < NUM_OF_ROWS; i++){
    for(var j = 0; j < NUM_OF_BEADS; j++){
      canvas = document.getElementById("canvas_"+i+"_"+j);
      ctx = canvas.getContext('2d');
      
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'black';

      // Draw our object in its new position
      ctx.fillRect(objs[i][j].x, objs[i][j].y, objs[i][j].w, objs[i][j].h);
    }
  }
  
}

// function init() {

//   // Initialize our object
//   obj = {x:50, y:50, w:50, h:50};
//   canvas = document.getElementById("bead");

//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   // Add eventlistener to canvas
//   canvas.addEventListener('touchmove', function() {
//     //Assume only one touch/only process one touch even if there's more
//     var touch = event.targetTouches[0];
    
//     // Is touch close enough to our object?
//     if(detectHit(obj.x, obj.y, touch.pageX, touch.pageY, obj.w, obj.h)) {
//       // Assign new coordinates to our object
//       // obj.x = touch.pageX;
//       if(obj.y < touch.pageY){
//         obj.y = Math.min(touch.pageY, 120);
//       } else {
//         obj.y = Math.max(touch.pageY, 50);
//       }

//       // Redraw the canvas
//       draw();
//     }
//     event.preventDefault();
//   }, false);

//   draw();
// }

function detectHit(x1,y1,x2,y2,w,h) {
  //Very simple detection here
  if(x2-x1>w) return false;
  if(y2-y1>h) return false;
  return true;
}

// function draw() {
//   canvas = document.getElementById("bead");
//   var ctx = canvas.getContext('2d');
//   // Clear the canvas
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   ctx.fillStyle = 'black';

//   // Draw our object in its new position
//   ctx.fillRect(obj.x, obj.y, obj.w, obj.h);
// }
