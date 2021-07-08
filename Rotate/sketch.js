var canvas;
var wide_half = (window.innerWidth / 2) - 87.5; // Half screen width minus half 175 (range values for shape; chosen to center shape)
var wide_quarter = (window.innerWidth / 4); 

var wide = window.innerWidth;
var high = window.innerHeight;

function setup() {
  canvas = createCanvas(wide, high);
  canvas.position(0, 100);
}


/*
var randX1 = random(300, 600); // rand only works within p5.js functions
var randY1 = random(300, 600);
var randX2 = random(300, 600);
var randY2 = random(300, 600);
var randX3 = random(300, 600);
var randY3 = random(300, 600);
var randX4 = random(300, 600);
var randY4 = random(300, 600);*/

function calc_coords(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function num_coords() {
  var coords = calc_vertices(0, 175);
  return coords;
}

// Random X coordinates...

function X1() {
  var randX1 = num_coords();
  return randX1;
} 
function X2() {
  var randX2 = num_coords();
  return randX2;
} 
function X3() {
  var randX3 = num_coords();
  return randX3;
}
function X4() {
  var randX4 = num_coords();
  return randX4;
}
function X5() {
  var randX5 = num_coords();
  return randX5;
}
function X6() {
  var randX6 = num_coords();
  return randX6;
}
function X7() {
  var randX7 = num_coords();
  return randX7;
}
function X8() {
  var randX8 = num_coords();
  return randX8;
}

// Random Y coordinates...

function Y1() {
  var randY1 = num_coords();
  return randY1;
}
function Y2() {
  var randY2 = num_coords();
  return randY2;
}
function Y3() {
  var randY3 = num_coords();
  return randY3;
}
function Y4() {
  var randY4 = num_coords();
  return randY4;
}
function Y5() {
  var randY5 = num_coords();
  return randY5;
}
function Y6() {
  var randY6 = num_coords();
  return randY6;
}
function Y7() {
  var randY7 = num_coords();
  return randY7;
}
function Y8() {
  var randY8 = num_coords();
  return randY8;
}

function calc_vertices(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function num_vertices() {
  var vertices = calc_vertices(3, 8);
  return vertices;
}

// Instructions for drawn shapes...

function drawGrid() {
  stroke(200);
  fill(120);
  for (var x = -width; x < width; x += 40) {
    line(x, -height, x, height);
    text(x, x + 1, 12);
  }
  for (var y = -height; y < height; y += 40) {
    line(-width, y, width, y);
    text(y, 1, y + 12);
  }
}


function draw() {
  noLoop();
  drawGrid();

  // Original Shape's Outline...
  beginShape();
  //background(5);
  vertex(wide_half, 0);
  vertex(wide_half, 175);
  vertex(wide_half + 175, 175);
  vertex(wide_half + 175, 0);
  vertex(wide_half, 0);
  fill('black');
  //vertex(randX4, randY4);
  endShape();

  // Eight Comparison Shape Outlines...

  // Shape #1
  beginShape();
  //background(5);
  vertex(0, 175);
  vertex(0, 350);
  vertex(175, 350);
  vertex(175, 175);
  vertex(0, 175);
  fill('black');
  //vertex(randX4, randY4);
  endShape();
  
  // Shape #2
  beginShape();
  //background(5);
  vertex(0, 525);
  vertex(0, 700);
  vertex(175, 700);
  vertex(175, 525);
  vertex(0, 525);
  fill('black');
  //vertex(randX4, randY4);
  endShape();

  // Shape #3
  beginShape();
  //background(5);
  vertex(0 + wide_quarter, 175);
  vertex(0 + wide_quarter, 350);
  vertex(175 + wide_quarter, 350);
  vertex(175 + wide_quarter, 175);
  vertex(0 + wide_quarter, 175);


  fill('black');
  //vertex(randX4, randY4);
  endShape();

  // Shape #4
  beginShape();
  //background(5);
  vertex(0 + wide_quarter, 525);
  vertex(0 + wide_quarter, 700);
  vertex(175 + wide_quarter, 700);
  vertex(175 + wide_quarter, 525);
  vertex(0 + wide_quarter, 525);
  fill('black');
  //vertex(randX4, randY4);
  endShape();

  // Shape #5
  beginShape();
  //background(5);
  vertex(wide - wide_quarter, 175);
  vertex(wide - wide_quarter, 350);
  vertex(wide - wide_quarter - 175, 350);
  vertex(wide - wide_quarter - 175, 175);
  vertex(wide - wide_quarter, 175);
  fill('black');
  //vertex(randX4, randY4);
  endShape();

  // Shape #6
  beginShape();
  //background(5);
  vertex(wide - wide_quarter, 525);
  vertex(wide - wide_quarter, 700);
  vertex(wide - wide_quarter - 175, 700);
  vertex(wide - wide_quarter - 175, 525);
  vertex(wide - wide_quarter, 525);
  fill('black');
  //vertex(randX4, randY4);
  endShape();

  // Shape #7
  beginShape();
  //background(5);
  vertex(0 + (wide - 175), 175);
  vertex(0 + (wide - 175), 350);
  vertex(175 + (wide - 175), 350);
  vertex(175 + (wide - 175), 175);
  vertex(0 + (wide - 175), 175);
  fill('black');
  //vertex(randX4, randY4);
  endShape();

  // Shape #8
  beginShape();
  //background(5);
  vertex(0 + (wide - 175), 525);
  vertex(0 + (wide - 175), 700);
  vertex(175 + (wide - 175), 700);
  vertex(175 + (wide - 175), 525);
  vertex(0 + (wide - 175), 525);
  fill('black');
  //vertex(randX4, randY4);
  endShape();;

  //var vertices = num_vertices();
  var vertices = 3;
  if (vertices == 3) {
    var randX1 = X1();
    var randY1 = Y1();
    var randX2 = X2();
    var randY2 = Y2();
    var randX3 = X3();
    var randY3 = Y3();
    /*
    var randX4 = random(300, 600);
    var randY4 = random(300, 600);*/
    beginShape();
    //background(5);
    vertex(randX1 + wide_half, randY1);
    vertex(randX2 + wide_half, randY2);
    vertex(randX3 + wide_half, randY3);
    //vertex(randX4, randY4);
    fill('orange');
    endShape();
    
    // The shape duplicated 8 times, plus rotation or reflection effects...
    for (let num = 0; num < 8; num++) {
      if (num == 0) {
        beginShape();
        vertex(randX1, randY1 + 175);
        vertex(randX2, randY2 + 175);
        vertex(randX3, randY3 + 175);
        endShape();
      } else if (num == 1) {
        /*
        beginShape();
        vertex(randX1, randY1 + 525);
        vertex(randX2, randY2 + 525);
        vertex(randX3, randY3 + 525);
        endShape();
        */
        //x * sin(degree) + y * cos(degree)
        
      
        let test = calc_coords(1, 359);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1 + 525) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2 + 525) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3 + 525) * sin(degree));

        var Y1_new = (randX1 * sin(degree)) + ((randY1 + 525) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2 + 525) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3 + 525) * cos(degree));


        const arr_new = [X1_new, X2_new, X3_new];
        
        var X1_abs = abs(0 - X1_new); // Takes absolute value of distance from zero.
        var X2_abs = abs(0 - X2_new);
        var X3_abs = abs(0 - X3_new);
        console.log("X1_new: ", X1_new, " X1_abs: ", X1_abs);
        console.log("X1_new: ", X2_new, " X1_abs: ", X2_abs);
        console.log("X1_new: ", X3_new, " X1_abs: ", X3_abs);
        
        const arr_abs = [X1_abs, X2_abs, X3_abs];
        const min = Math.min(...arr_abs);

        var vertice_add; // Number to add to vertices to match origin's x value. 
        for (let i = 0; i < arr_new.length; i++) {
          if ((arr_abs[i]) == min) {
            if (arr_new[i] < 0) {
              vertice_add = min * -1;
            } else if (arr_new[i] > 0) {
              vertice_add = min * 1;
            } else if (arr_new[i] == 0) {
              vertice_add = min * 0;
            } break; // Exit for loop. 
          }
        }

        console.log("vertice_add: ", vertice_add);

        X1_new = abs(X1_new - vertice_add);
        X2_new = abs(X2_new - vertice_add);
        X3_new = abs(X3_new - vertice_add);

        vertex(X1_new, Y1_new); console.log(X1_new); 
        vertex(X2_new, Y2_new); console.log(X2_new);
        vertex(X3_new, Y3_new); console.log(X3_new);
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new);
/*


        vertex((randX1 * cos(degree)) - ((randY1 + 525) * sin(degree)), (randX1 * sin(degree)) + ((randY1 + 525) * cos(degree)));
        vertex((randX2 * cos(degree)) - ((randY2 + 525) * sin(degree)), (randX2 * sin(degree)) + ((randY2 + 525) * cos(degree)));
        vertex((randX3 * cos(degree)) - ((randY3 + 525) * sin(degree)), (randX3 * sin(degree)) + ((randY3 + 525) * cos(degree)));
        endShape();
*/
        //}

      } else if (num == 2) {
        beginShape();
        vertex(randX1 + wide_quarter, randY1 + 175);
        vertex(randX2 + wide_quarter, randY2 + 175);
        vertex(randX3 + wide_quarter, randY3 + 175);
        endShape();
      } else if (num == 3) {
        beginShape();
        vertex(randX1 + wide_quarter, randY1 + 525);
        vertex(randX2 + wide_quarter, randY2 + 525);
        vertex(randX3 + wide_quarter, randY3 + 525);
        endShape();
      } else if (num == 4) {
        beginShape();
        vertex(randX1, randY1 + 175);
        vertex(randX2, randY2 + 175);
        vertex(randX3, randY3 + 175);
        endShape();
      } else if (num == 5) {
        beginShape();
        vertex(randX1, randY1 + 175);
        vertex(randX2, randY2 + 175);
        vertex(randX3, randY3 + 175);
        endShape();
      } else if (num == 6) {
        beginShape();
        vertex(randX1, randY1 + 175);
        vertex(randX2, randY2 + 175);
        vertex(randX3, randY3 + 175);
        endShape();
      } else if (num == 7) {
        beginShape();
        vertex(randX1, randY1 + 175);
        vertex(randX2, randY2 + 175);
        vertex(randX3, randY3 + 175);
        endShape();
      }
    }


  } else if (vertices == 4) {
      var randX1 = X1();
      var randY1 = Y1();
      var randX2 = X2();
      var randY2 = Y2();
      var randX3 = X3();
      var randY3 = Y3();
      var randX4 = X4();
      var randY4 = Y4();
      beginShape();
      //background(5);
      vertex(randX1 + wide_half, randY1);
      vertex(randX2 + wide_half, randY2);
      vertex(randX3 + wide_half, randY3);
      vertex(randX4 + wide_half, randY4);
      fill('orange');

      endShape();
  } else if (vertices == 5) {
      var randX1 = X1();
      var randY1 = Y1();
      var randX2 = X2();
      var randY2 = Y2();
      var randX3 = X3();
      var randY3 = Y3();
      var randX4 = X4();
      var randY4 = Y4();
      var randX5 = X5();
      var randY5 = Y5();
      beginShape();
     //background(5);
      vertex(randX1 + wide_half, randY1);
      vertex(randX2 + wide_half, randY2);
      vertex(randX2 + wide_half, randY2);
      vertex(randX3 + wide_half, randY3);
      vertex(randX4 + wide_half, randY4);
      vertex(randX5 + wide_half, randY5);
      fill('orange');

      endShape();
  } else if (vertices == 6) {
      var randX1 = X1();
      var randY1 = Y1();
      var randX2 = X2();
      var randY2 = Y2();
      var randX3 = X3();
      var randY3 = Y3();
      var randX4 = X4();
      var randY4 = Y4();
      var randX5 = X5();
      var randY5 = Y5();
      var randX6 = X6();
      var randY6 = Y6();
      beginShape();
      //background(5);
      vertex(randX1 + wide_half, randY1);
      vertex(randX2 + wide_half, randY2);
      vertex(randX3 + wide_half, randY3);
      vertex(randX4 + wide_half, randY4);
      vertex(randX5 + wide_half, randY5);
      vertex(randX6 + wide_half, randY6);
      fill('orange');

      endShape();
  } else if (vertices == 7) {
      var randX1 = X1();
      var randY1 = Y1();
      var randX2 = X2();
      var randY2 = Y2();
      var randX3 = X3();
      var randY3 = Y3();
      var randX4 = X4();
      var randY4 = Y4();
      var randX5 = X5();
      var randY5 = Y5();
      var randX6 = X6();
      var randY6 = Y6();
      var randX7 = X7();
      var randY7 = Y7();
      beginShape();
      //background(5);
      vertex(randX1 + wide_half, randY1);
      vertex(randX2 + wide_half, randY2);
      vertex(randX3 + wide_half, randY3);
      vertex(randX4 + wide_half, randY4);
      vertex(randX5 + wide_half, randY5);
      vertex(randX6 + wide_half, randY6);
      vertex(randX7 + wide_half, randY7);
      fill('orange');

      endShape();
  } else if (vertices == 8) {
      var randX1 = X1();
      var randY1 = Y1();
      var randX2 = X2();
      var randY2 = Y2();
      var randX3 = X3();
      var randY3 = Y3();
      var randX4 = X4();
      var randY4 = Y4();
      var randX5 = X5();
      var randY5 = Y5();
      var randX6 = X6();
      var randY6 = Y6();
      var randX7 = X7();
      var randY7 = Y7();
      var randX8 = X8();
      var randY8 = Y8();
      beginShape();
      //background(5);
      vertex(randX1 + wide_half, randY1);
      vertex(randX2 + wide_half, randY2);
      vertex(randX3 + wide_half, randY3);
      vertex(randX4 + wide_half, randY4);
      vertex(randX5 + wide_half, randY5);
      vertex(randX6 + wide_half, randY6);
      vertex(randX7 + wide_half, randY7);
      vertex(randX8 + wide_half, randY8);
      fill('orange');

      endShape();
  }
}

function draw_original() {
  draw();
}


var new_wide = window.innerWidth / 2;




