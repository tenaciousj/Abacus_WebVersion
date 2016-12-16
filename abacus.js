var num_of_beads = 13;
var objs = [];
var CANVAS_WIDTH = 73;
var CANVAS_HEIGHT = 100;

function init(){
  var canvas, obj;
  var rectangle = document.getElementById("rectangle");
  for(var i = 0; i < num_of_beads; i++){
    obj = {x:20, y:40, w:60, h:30};
    objs.push(obj);
    canvas = document.createElement("canvas");
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    canvas.id = "canvas"+i;
    rectangle.appendChild(canvas);
  }
  draw();
}

function draw() {
  var ctx;
  for(var i = 0; i < num_of_beads; i++){
    // debugger;
    canvas = document.getElementById("canvas"+i);
    ctx = canvas.getContext('2d');
    
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'black';

    // Draw our object in its new position
    ctx.fillRect(objs[i].x, objs[i].y, objs[i].w, objs[i].h);
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
