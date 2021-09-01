var canvas;
var wide_half = (window.innerWidth / 2) - 87.5; // Half screen width minus half 175 (range values for shape; chosen to center shape)
var wide_quarter = (window.innerWidth / 4);

var wide = window.innerWidth;
var high = window.innerHeight;

var cookie = 1;

function setup() {
  canvas = createCanvas(wide, high);
  canvas.background(35, 1, 44);
  canvas.position(0, 0);
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

function cookie_test() {
  console.log("here is cookie:", cookie);
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
const shape_data = ["f"];



//var vertices = calc_coords(5, 8);
var vertices = 5;

//const shape_data = [vertices, reflect_5_0, reflect_5_1, reflect_5_2, reflect_5_3, reflect_5_4, reflect_5_5, reflect_5_6, reflect_5_7];
//const shape_data = [vertices, vertices];

var reflect_5_0;
var reflect_5_1;
var reflect_5_2;
var reflect_5_3;
var reflect_5_4;
var reflect_5_5;
var reflect_5_6;
var reflect_5_7;

var reflect_6_0;
var reflect_6_1;
var reflect_6_2;
var reflect_6_3;
var reflect_6_4;
var reflect_6_5;
var reflect_6_6;
var reflect_6_7;

var reflect_7_0;
var reflect_7_1;
var reflect_7_2;
var reflect_7_3;
var reflect_7_4;
var reflect_7_5;
var reflect_7_6;
var reflect_7_7;

var reflect_8_0;
var reflect_8_1;
var reflect_8_2;
var reflect_8_3;
var reflect_8_4;
var reflect_8_5;
var reflect_8_6;
var reflect_8_7;


function draw() {
  cookie = 2;
  noLoop();
  drawGrid();

  //window.globallyAvailableVariable = "shape_data";
  // Original Shape's Outline...
  // 175^2 + 175^2 = X, sqrt(X) = ~248
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
  endShape();

  //console.log("here is cookie:", cookie);


  //var vertices = calc_coords(5, 8);
  if (vertices == 5) {
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
    vertex(randX1 + wide_half, randY1);
    vertex(randX2 + wide_half, randY2);
    vertex(randX3 + wide_half, randY3);
    vertex(randX4 + wide_half, randY4);
    vertex(randX5 + wide_half, randY5);

    fill('orange');
    endShape();

    // (If a 3 vertice shape is randomly selected)
    // The shape is duplicated 8 times, plus rotation or reflection effects (randomly selected)...
    for (let num = 0; num < 8; num++) {
      if (num == 0) {

        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));

        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));

        reflect_5_0 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_5_0 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, X5_new];

        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);

        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);

        vertex(X1_new, Y1_new + 175); console.log(X1_new); console.log(Y1_new);
        vertex(X2_new, Y2_new + 175); console.log(X2_new); console.log(Y2_new);
        vertex(X3_new, Y3_new + 175); console.log(X3_new); console.log(Y3_new);
        vertex(X4_new, Y4_new + 175); console.log(X4_new); console.log(Y4_new);
        vertex(X5_new, Y5_new + 175); console.log(X5_new); console.log(Y5_new);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new);


      } else if (num == 1) { // Shape number 1


        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));

        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));


        reflect_5_1 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_5_1 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new];

        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);

        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);

        vertex(X1_new, Y1_new + 525); console.log(X1_new); console.log(Y1_new);
        vertex(X2_new, Y2_new + 525); console.log(X2_new); console.log(Y2_new);
        vertex(X3_new, Y3_new + 525); console.log(X3_new); console.log(Y3_new);
        vertex(X4_new, Y4_new + 525); console.log(X4_new); console.log(Y4_new);
        vertex(X5_new, Y5_new + 525); console.log(X5_new); console.log(Y5_new);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new);

      } else if (num == 2) { // Shape number 1

        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));

        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));

        reflect_5_2 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_5_2 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new];

        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X3_new: ", X4_new);

        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y3_new: ", Y4_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);

        vertex(X1_new + wide_quarter, Y1_new + 175); console.log(X1_new); console.log(Y1_new);
        vertex(X2_new + wide_quarter, Y2_new + 175); console.log(X2_new); console.log(Y2_new);
        vertex(X3_new + wide_quarter, Y3_new + 175); console.log(X3_new); console.log(Y3_new);
        vertex(X4_new + wide_quarter, Y4_new + 175); console.log(X3_new); console.log(Y4_new);
        vertex(X5_new + wide_quarter, Y5_new + 175); console.log(X3_new); console.log(Y5_new);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new);

      } else if (num == 3) {

        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));

        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));

        reflect_5_3 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_5_3 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new];

        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X3_new: ", X4_new);

        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y3_new: ", Y4_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);

        vertex((wide - 175) + X1_new, Y1_new + 175);
        vertex((wide - 175) + X2_new, Y2_new + 175);
        vertex((wide - 175) + X3_new, Y3_new + 175);
        vertex((wide - 175) + X4_new, Y4_new + 175);
        vertex((wide - 175) + X5_new, Y5_new + 175);

        endShape();
        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new);

      } else if (num == 4) {

        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));


        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));

        reflect_5_4 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_5_4 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new];

        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X3_new: ", X4_new);

        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y3_new: ", Y4_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);


        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);

        vertex(X1_new + wide_quarter, Y1_new + 525); console.log(X1_new); console.log(Y1_new);
        vertex(X2_new + wide_quarter, Y2_new + 525); console.log(X2_new); console.log(Y2_new);
        vertex(X3_new + wide_quarter, Y3_new + 525); console.log(X3_new); console.log(Y3_new);
        vertex(X4_new + wide_quarter, Y4_new + 525); console.log(X3_new); console.log(Y4_new);
        vertex(X5_new + wide_quarter, Y5_new + 525); console.log(X3_new); console.log(Y5_new);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new);

      } else if (num == 5) {

        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));

        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));

        reflect_5_5 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_5_5 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new];

        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X3_new: ", X4_new);

        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y3_new: ", Y4_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);

        vertex((wide - 175) + X1_new, Y1_new + 525);
        vertex((wide - 175) + X2_new, Y2_new + 525);
        vertex((wide - 175) + X3_new, Y3_new + 525);
        vertex((wide - 175) + X4_new, Y4_new + 525);
        vertex((wide - 175) + X5_new, Y5_new + 525);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new);

      } else if (num == 6) {
        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));

        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));

        reflect_5_6 = calc_coords(0, 1); // Opposite Reflect Values. 

        if (reflect_5_6 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }

        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new];


        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X3_new: ", X4_new);

        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y3_new: ", Y4_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);

        vertex((wide - wide_quarter) - X1_new, Y1_new + 175);
        vertex((wide - wide_quarter) - X2_new, Y2_new + 175);
        vertex((wide - wide_quarter) - X3_new, Y3_new + 175);
        vertex((wide - wide_quarter) - X4_new, Y4_new + 175);
        vertex((wide - wide_quarter) - X5_new, Y5_new + 175);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new);
      }

      else if (num == 7) {

        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));


        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));


        reflect_5_7 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_5_7 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new];

        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X3_new: ", X4_new);

        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y3_new: ", Y4_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);

        vertex((wide - wide_quarter) - X1_new, Y1_new + 525);
        vertex((wide - wide_quarter) - X2_new, Y2_new + 525);
        vertex((wide - wide_quarter) - X3_new, Y3_new + 525);
        vertex((wide - wide_quarter) - X4_new, Y4_new + 525);
        vertex((wide - wide_quarter) - X5_new, Y5_new + 525);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new);
      }
    }
    //hape_data.push("Hola");

    // Array to be returned (containing values for if shapes are rotated/flipped)...
    //const shape_data = [vertices, reflect_5_0, reflect_5_1, reflect_5_2, reflect_5_3, reflect_5_4, reflect_5_5, reflect_5_6, reflect_5_7];

    //eturn shape_data;

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
    vertex(randX1 + wide_half, randY1);
    vertex(randX2 + wide_half, randY2);
    vertex(randX3 + wide_half, randY3);
    vertex(randX4 + wide_half, randY4);
    vertex(randX5 + wide_half, randY5);
    vertex(randX6 + wide_half, randY6);


    fill('orange');
    endShape();

    // (If a 3 vertice shape is randomly selected)
    // The shape is duplicated 8 times, plus rotation or reflection effects (randomly selected)...
    for (let num = 0; num < 8; num++) {
      if (num == 0) {


        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));


        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));


        reflect_6_0 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_6_0 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new];


        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);


        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);

        vertex(X1_new, Y1_new + 175); console.log(X1_new); console.log(Y1_new);
        vertex(X2_new, Y2_new + 175); console.log(X2_new); console.log(Y2_new);
        vertex(X3_new, Y3_new + 175); console.log(X3_new); console.log(Y3_new);
        vertex(X4_new, Y4_new + 175); console.log(X4_new); console.log(Y4_new);
        vertex(X5_new, Y5_new + 175); console.log(X5_new); console.log(Y5_new);
        vertex(X6_new, Y6_new + 175); console.log(X6_new); console.log(Y6_new);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new);

      } else if (num == 1) { // Shape number 1


        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));


        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));


        reflect_6_1 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_6_1 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new];


        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);


        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);

        vertex(X1_new, Y1_new + 525); console.log(X1_new); console.log(Y1_new);
        vertex(X2_new, Y2_new + 525); console.log(X2_new); console.log(Y2_new);
        vertex(X3_new, Y3_new + 525); console.log(X3_new); console.log(Y3_new);
        vertex(X4_new, Y4_new + 525); console.log(X4_new); console.log(Y4_new);
        vertex(X5_new, Y5_new + 525); console.log(X5_new); console.log(Y5_new);
        vertex(X6_new, Y6_new + 525); console.log(X6_new); console.log(Y6_new);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new);

      } else if (num == 2) { // Shape number 1


        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));


        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));


        reflect_6_2 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_6_2 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new];


        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);


        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);

        vertex(X1_new + wide_quarter, Y1_new + 175); console.log(X1_new); console.log(Y1_new);
        vertex(X2_new + wide_quarter, Y2_new + 175); console.log(X2_new); console.log(Y2_new);
        vertex(X3_new + wide_quarter, Y3_new + 175); console.log(X3_new); console.log(Y3_new);
        vertex(X4_new + wide_quarter, Y4_new + 175); console.log(X4_new); console.log(Y4_new);
        vertex(X5_new + wide_quarter, Y5_new + 175); console.log(X5_new); console.log(Y5_new);
        vertex(X6_new + wide_quarter, Y6_new + 175); console.log(X6_new); console.log(Y6_new);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new);

      } else if (num == 3) {


        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));


        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));


        reflect_6_3 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_6_3 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new];


        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);


        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);



        vertex((wide - 175) + X1_new, Y1_new + 175);
        vertex((wide - 175) + X2_new, Y2_new + 175);
        vertex((wide - 175) + X3_new, Y3_new + 175);
        vertex((wide - 175) + X4_new, Y4_new + 175);
        vertex((wide - 175) + X5_new, Y5_new + 175);
        vertex((wide - 175) + X6_new, Y6_new + 175);

        endShape();
        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new);


      } else if (num == 4) {


        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));


        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));


        reflect_6_4 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_6_4 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new];


        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);


        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);

        vertex(X1_new + wide_quarter, Y1_new + 525); console.log(X1_new); console.log(Y1_new);
        vertex(X2_new + wide_quarter, Y2_new + 525); console.log(X2_new); console.log(Y2_new);
        vertex(X3_new + wide_quarter, Y3_new + 525); console.log(X3_new); console.log(Y3_new);
        vertex(X4_new + wide_quarter, Y4_new + 525); console.log(X4_new); console.log(Y4_new);
        vertex(X5_new + wide_quarter, Y5_new + 525); console.log(X5_new); console.log(Y5_new);
        vertex(X6_new + wide_quarter, Y6_new + 525); console.log(X6_new); console.log(Y6_new);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new);

      } else if (num == 5) {

        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));


        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));


        reflect_6_5 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_6_5 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new];


        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);


        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);

        vertex((wide - 175) + X1_new, Y1_new + 525);
        vertex((wide - 175) + X2_new, Y2_new + 525);
        vertex((wide - 175) + X3_new, Y3_new + 525);
        vertex((wide - 175) + X4_new, Y4_new + 525);
        vertex((wide - 175) + X5_new, Y5_new + 525);
        vertex((wide - 175) + X6_new, Y6_new + 525);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new);

      } else if (num == 6) {
        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));


        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));


        reflect_6_6 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_6_6 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new];


        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);


        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);

        vertex((wide - wide_quarter) - X1_new, Y1_new + 175);
        vertex((wide - wide_quarter) - X2_new, Y2_new + 175);
        vertex((wide - wide_quarter) - X3_new, Y3_new + 175);
        vertex((wide - wide_quarter) - X4_new, Y4_new + 175);
        vertex((wide - wide_quarter) - X5_new, Y5_new + 175);
        vertex((wide - wide_quarter) - X6_new, Y6_new + 175);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new);
      }

      else if (num == 7) {

        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));


        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));


        reflect_6_7 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_6_7 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new];


        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);


        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);

        vertex((wide - wide_quarter) - X1_new, Y1_new + 525);
        vertex((wide - wide_quarter) - X2_new, Y2_new + 525);
        vertex((wide - wide_quarter) - X3_new, Y3_new + 525);
        vertex((wide - wide_quarter) - X4_new, Y4_new + 525);
        vertex((wide - wide_quarter) - X5_new, Y5_new + 525);
        vertex((wide - wide_quarter) - X6_new, Y6_new + 525);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new);
      }
    }

    // Array to be returned (containing values for if shapes are rotated/flipped)...
    const shape_data = [vertices, reflect_6_0, reflect_6_1, reflect_6_2, reflect_6_3, reflect_6_4, reflect_6_5, reflect_6_6, reflect_6_7];

    return shape_data;

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
    vertex(randX1 + wide_half, randY1);
    vertex(randX2 + wide_half, randY2);
    vertex(randX3 + wide_half, randY3);
    vertex(randX4 + wide_half, randY4);
    vertex(randX5 + wide_half, randY5);
    vertex(randX6 + wide_half, randY6);
    vertex(randX7 + wide_half, randY7);


    fill('orange');
    endShape();

    // (If a 3 vertice shape is randomly selected)
    // The shape is duplicated 8 times, plus rotation or reflection effects (randomly selected)...
    for (let num = 0; num < 8; num++) {
      if (num == 0) {


        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));
        var X7_new = (randX7 * cos(degree)) - ((randY7) * sin(degree));

        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));
        var Y7_new = (randX7 * sin(degree)) + ((randY7) * cos(degree));


        reflect_7_0 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_7_0 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;
          X7_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new, X7_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new, Y7_new];


        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);
        console.log("X6_new: ", X7_new);


        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);
        console.log("Y6_new: ", Y7_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);
        X7_new = (X7_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);
        Y7_new = (Y7_new - vertice_add_Y);

        vertex(X1_new, Y1_new + 175); console.log(X1_new); console.log(Y1_new);
        vertex(X2_new, Y2_new + 175); console.log(X2_new); console.log(Y2_new);
        vertex(X3_new, Y3_new + 175); console.log(X3_new); console.log(Y3_new);
        vertex(X4_new, Y4_new + 175); console.log(X4_new); console.log(Y4_new);
        vertex(X5_new, Y5_new + 175); console.log(X5_new); console.log(Y5_new);
        vertex(X6_new, Y6_new + 175); console.log(X6_new); console.log(Y6_new);
        vertex(X7_new, Y7_new + 175); console.log(X7_new); console.log(Y6_new);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new, Y7_new);


      } else if (num == 1) { // Shape number 1


        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));
        var X7_new = (randX7 * cos(degree)) - ((randY7) * sin(degree));

        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));
        var Y7_new = (randX7 * sin(degree)) + ((randY7) * cos(degree));


        reflect_7_1 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_7_1 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;
          X7_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new, X7_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new, Y7_new];


        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);
        console.log("X6_new: ", X7_new);


        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);
        console.log("Y6_new: ", Y7_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);
        X7_new = (X7_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);
        Y7_new = (Y7_new - vertice_add_Y);

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new, Y7_new);


        vertex(X1_new, Y1_new + 525); console.log(X1_new); console.log(Y1_new);
        vertex(X2_new, Y2_new + 525); console.log(X2_new); console.log(Y2_new);
        vertex(X3_new, Y3_new + 525); console.log(X3_new); console.log(Y3_new);
        vertex(X4_new, Y4_new + 525); console.log(X4_new); console.log(Y4_new);
        vertex(X5_new, Y5_new + 525); console.log(X5_new); console.log(Y5_new);
        vertex(X6_new, Y6_new + 525); console.log(X6_new); console.log(Y6_new);
        vertex(X7_new, Y7_new + 525); console.log(X7_new); console.log(Y7_new);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new);

      } else if (num == 2) { // Shape number 1


        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));
        var X7_new = (randX7 * cos(degree)) - ((randY7) * sin(degree));

        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));
        var Y7_new = (randX7 * sin(degree)) + ((randY7) * cos(degree));


        reflect_7_2 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_7_2 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;
          X7_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new, X7_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new, Y7_new];


        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);
        console.log("X6_new: ", X7_new);


        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);
        console.log("Y6_new: ", Y7_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);
        X7_new = (X7_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);
        Y7_new = (Y7_new - vertice_add_Y);

        vertex(X1_new + wide_quarter, Y1_new + 175); console.log(X1_new); console.log(Y1_new);
        vertex(X2_new + wide_quarter, Y2_new + 175); console.log(X2_new); console.log(Y2_new);
        vertex(X3_new + wide_quarter, Y3_new + 175); console.log(X3_new); console.log(Y3_new);
        vertex(X4_new + wide_quarter, Y4_new + 175); console.log(X4_new); console.log(Y4_new);
        vertex(X5_new + wide_quarter, Y5_new + 175); console.log(X5_new); console.log(Y5_new);
        vertex(X6_new + wide_quarter, Y6_new + 175); console.log(X6_new); console.log(Y6_new);
        vertex(X7_new + wide_quarter, Y7_new + 175); console.log(X7_new); console.log(Y7_new);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new);

      } else if (num == 3) {


        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));
        var X7_new = (randX7 * cos(degree)) - ((randY7) * sin(degree));

        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));
        var Y7_new = (randX7 * sin(degree)) + ((randY7) * cos(degree));


        reflect_7_3 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_7_3 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;
          X7_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new, X7_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new, Y7_new];


        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);
        console.log("X6_new: ", X7_new);


        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);
        console.log("Y6_new: ", Y7_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);
        X7_new = (X7_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);
        Y7_new = (Y7_new - vertice_add_Y);

        vertex((wide - 175) + X1_new, Y1_new + 175);
        vertex((wide - 175) + X2_new, Y2_new + 175);
        vertex((wide - 175) + X3_new, Y3_new + 175);
        vertex((wide - 175) + X4_new, Y4_new + 175);
        vertex((wide - 175) + X5_new, Y5_new + 175);
        vertex((wide - 175) + X6_new, Y6_new + 175);
        vertex((wide - 175) + X7_new, Y7_new + 175);

        endShape();
        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new);


      } else if (num == 4) {


        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));
        var X7_new = (randX7 * cos(degree)) - ((randY7) * sin(degree));

        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));
        var Y7_new = (randX7 * sin(degree)) + ((randY7) * cos(degree));


        reflect_7_4 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_7_4 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;
          X7_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new, X7_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new, Y7_new];


        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);
        console.log("X6_new: ", X7_new);


        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);
        console.log("Y6_new: ", Y7_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);
        X7_new = (X7_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);
        Y7_new = (Y7_new - vertice_add_Y);

        vertex(X1_new + wide_quarter, Y1_new + 525); console.log(X1_new); console.log(Y1_new);
        vertex(X2_new + wide_quarter, Y2_new + 525); console.log(X2_new); console.log(Y2_new);
        vertex(X3_new + wide_quarter, Y3_new + 525); console.log(X3_new); console.log(Y3_new);
        vertex(X4_new + wide_quarter, Y4_new + 525); console.log(X4_new); console.log(Y4_new);
        vertex(X5_new + wide_quarter, Y5_new + 525); console.log(X5_new); console.log(Y5_new);
        vertex(X6_new + wide_quarter, Y6_new + 525); console.log(X6_new); console.log(Y6_new);
        vertex(X7_new + wide_quarter, Y7_new + 525); console.log(X7_new); console.log(Y7_new);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new);

      } else if (num == 5) {

        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));
        var X7_new = (randX7 * cos(degree)) - ((randY7) * sin(degree));

        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));
        var Y7_new = (randX7 * sin(degree)) + ((randY7) * cos(degree));


        reflect_7_5 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_7_5 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;
          X7_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new, X7_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new, Y7_new];


        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);
        console.log("X6_new: ", X7_new);


        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);
        console.log("Y6_new: ", Y7_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);
        X7_new = (X7_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);
        Y7_new = (Y7_new - vertice_add_Y);

        vertex((wide - 175) + X1_new, Y1_new + 525);
        vertex((wide - 175) + X2_new, Y2_new + 525);
        vertex((wide - 175) + X3_new, Y3_new + 525);
        vertex((wide - 175) + X4_new, Y4_new + 525);
        vertex((wide - 175) + X5_new, Y5_new + 525);
        vertex((wide - 175) + X6_new, Y6_new + 525);
        vertex((wide - 175) + X7_new, Y7_new + 525);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new);

      } else if (num == 6) {
        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));
        var X7_new = (randX7 * cos(degree)) - ((randY7) * sin(degree));

        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));
        var Y7_new = (randX7 * sin(degree)) + ((randY7) * cos(degree));


        reflect_7_6 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_7_6 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;
          X7_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new, X7_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new, Y7_new];


        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);
        console.log("X6_new: ", X7_new);


        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);
        console.log("Y6_new: ", Y7_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);
        X7_new = (X7_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);
        Y7_new = (Y7_new - vertice_add_Y);

        vertex((wide - wide_quarter) - X1_new, Y1_new + 175);
        vertex((wide - wide_quarter) - X2_new, Y2_new + 175);
        vertex((wide - wide_quarter) - X3_new, Y3_new + 175);
        vertex((wide - wide_quarter) - X4_new, Y4_new + 175);
        vertex((wide - wide_quarter) - X5_new, Y5_new + 175);
        vertex((wide - wide_quarter) - X6_new, Y6_new + 175);
        vertex((wide - wide_quarter) - X7_new, Y7_new + 175);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new);
      } else if (num == 7) {
        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));
        var X7_new = (randX7 * cos(degree)) - ((randY7) * sin(degree));

        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));
        var Y7_new = (randX7 * sin(degree)) + ((randY7) * cos(degree));


        reflect_7_7 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_7_7 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;
          X7_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new, X7_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new, Y7_new];


        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);
        console.log("X6_new: ", X7_new);


        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);
        console.log("Y6_new: ", Y7_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);
        X7_new = (X7_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);
        Y7_new = (Y7_new - vertice_add_Y);

        vertex((wide - wide_quarter) - X1_new, Y1_new + 525);
        vertex((wide - wide_quarter) - X2_new, Y2_new + 525);
        vertex((wide - wide_quarter) - X3_new, Y3_new + 525);
        vertex((wide - wide_quarter) - X4_new, Y4_new + 525);
        vertex((wide - wide_quarter) - X5_new, Y5_new + 525);
        vertex((wide - wide_quarter) - X6_new, Y6_new + 525);
        vertex((wide - wide_quarter) - X7_new, Y7_new + 525);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new);
      }
    }
    shape_data.push("Hola");


    // Array to be returned (containing values for if shapes are rotated/flipped)...
    const shape_data = [vertices, reflect_7_0, reflect_7_1, reflect_7_2, reflect_7_3, reflect_7_4, reflect_7_5, reflect_7_6, reflect_7_7];

    return shape_data;

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

    // (If a 3 vertice shape is randomly selected)
    // The shape is duplicated 8 times, plus rotation or reflection effects (randomly selected)...
    for (let num = 0; num < 8; num++) {
      if (num == 0) {


        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));
        var X7_new = (randX7 * cos(degree)) - ((randY7) * sin(degree));
        var X8_new = (randX8 * cos(degree)) - ((randY8) * sin(degree));

        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));
        var Y7_new = (randX7 * sin(degree)) + ((randY7) * cos(degree));
        var Y8_new = (randX8 * sin(degree)) + ((randY8) * cos(degree));


        reflect_8_0 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_8_0 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;
          X7_new *= -1;
          X8_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new, X7_new, X8_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new, Y7_new, Y8_new];


        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);
        console.log("X7_new: ", X7_new);
        console.log("X8_new: ", X8_new);


        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);
        console.log("Y7_new: ", Y7_new);
        console.log("Y8_new: ", Y8_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);
        X7_new = (X7_new - vertice_add_X);
        X8_new = (X8_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);
        Y7_new = (Y7_new - vertice_add_Y);
        Y8_new = (Y8_new - vertice_add_Y);

        vertex(X1_new, Y1_new + 175); console.log(X1_new); console.log(Y1_new);
        vertex(X2_new, Y2_new + 175); console.log(X2_new); console.log(Y2_new);
        vertex(X3_new, Y3_new + 175); console.log(X3_new); console.log(Y3_new);
        vertex(X4_new, Y4_new + 175); console.log(X4_new); console.log(Y4_new);
        vertex(X5_new, Y5_new + 175); console.log(X5_new); console.log(Y5_new);
        vertex(X6_new, Y6_new + 175); console.log(X6_new); console.log(Y6_new);
        vertex(X7_new, Y7_new + 175); console.log(X7_new); console.log(Y7_new);
        vertex(X8_new, Y8_new + 175); console.log(X8_new); console.log(Y8_new);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new, Y7_new, Y8_new);


      } else if (num == 1) { // Shape number 1


        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));
        var X7_new = (randX7 * cos(degree)) - ((randY7) * sin(degree));
        var X8_new = (randX8 * cos(degree)) - ((randY8) * sin(degree));

        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));
        var Y7_new = (randX7 * sin(degree)) + ((randY7) * cos(degree));
        var Y8_new = (randX8 * sin(degree)) + ((randY8) * cos(degree));


        reflect_8_1 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_8_1 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;
          X7_new *= -1;
          X8_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new, X7_new, X8_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new, Y7_new, Y8_new];


        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);
        console.log("X7_new: ", X7_new);
        console.log("X8_new: ", X8_new);


        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);
        console.log("Y7_new: ", Y7_new);
        console.log("Y8_new: ", Y8_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);
        X7_new = (X7_new - vertice_add_X);
        X8_new = (X8_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);
        Y7_new = (Y7_new - vertice_add_Y);
        Y8_new = (Y8_new - vertice_add_Y);

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new, Y7_new, Y8_new);


        vertex(X1_new, Y1_new + 525); console.log(X1_new); console.log(Y1_new);
        vertex(X2_new, Y2_new + 525); console.log(X2_new); console.log(Y2_new);
        vertex(X3_new, Y3_new + 525); console.log(X3_new); console.log(Y3_new);
        vertex(X4_new, Y4_new + 525); console.log(X4_new); console.log(Y4_new);
        vertex(X5_new, Y5_new + 525); console.log(X5_new); console.log(Y5_new);
        vertex(X6_new, Y6_new + 525); console.log(X6_new); console.log(Y6_new);
        vertex(X7_new, Y7_new + 525); console.log(X7_new); console.log(Y7_new);
        vertex(X8_new, Y8_new + 525); console.log(X8_new); console.log(Y8_new);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new, Y7_new, Y8_new);

      } else if (num == 2) { // Shape number 1


        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));
        var X7_new = (randX7 * cos(degree)) - ((randY7) * sin(degree));
        var X8_new = (randX8 * cos(degree)) - ((randY8) * sin(degree));

        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));
        var Y7_new = (randX7 * sin(degree)) + ((randY7) * cos(degree));
        var Y8_new = (randX8 * sin(degree)) + ((randY8) * cos(degree));


        reflect_8_2 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_8_2 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;
          X7_new *= -1;
          X8_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new, X7_new, X8_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new, Y7_new, Y8_new];


        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);
        console.log("X6_new: ", X7_new);
        console.log("X6_new: ", X8_new);


        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);
        console.log("Y6_new: ", Y7_new);
        console.log("Y6_new: ", Y8_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);
        X7_new = (X7_new - vertice_add_X);
        X8_new = (X8_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);
        Y7_new = (Y7_new - vertice_add_Y);
        Y8_new = (Y8_new - vertice_add_Y);

        vertex(X1_new + wide_quarter, Y1_new + 175); console.log(X1_new); console.log(Y1_new);
        vertex(X2_new + wide_quarter, Y2_new + 175); console.log(X2_new); console.log(Y2_new);
        vertex(X3_new + wide_quarter, Y3_new + 175); console.log(X3_new); console.log(Y3_new);
        vertex(X4_new + wide_quarter, Y4_new + 175); console.log(X4_new); console.log(Y4_new);
        vertex(X5_new + wide_quarter, Y5_new + 175); console.log(X5_new); console.log(Y5_new);
        vertex(X6_new + wide_quarter, Y6_new + 175); console.log(X6_new); console.log(Y6_new);
        vertex(X7_new + wide_quarter, Y7_new + 175); console.log(X7_new); console.log(Y7_new);
        vertex(X8_new + wide_quarter, Y8_new + 175); console.log(X8_new); console.log(Y7_new);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new, Y7_new, Y8_new);

      } else if (num == 3) {



        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));
        var X7_new = (randX7 * cos(degree)) - ((randY7) * sin(degree));
        var X8_new = (randX8 * cos(degree)) - ((randY8) * sin(degree));

        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));
        var Y7_new = (randX7 * sin(degree)) + ((randY7) * cos(degree));
        var Y8_new = (randX8 * sin(degree)) + ((randY8) * cos(degree));


        reflect_8_3 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_8_3 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;
          X7_new *= -1;
          X8_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new, X7_new, X8_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new, Y7_new, Y8_new];


        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);
        console.log("X6_new: ", X7_new);
        console.log("X6_new: ", X8_new);


        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);
        console.log("Y6_new: ", Y7_new);
        console.log("Y6_new: ", Y8_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);
        X7_new = (X7_new - vertice_add_X);
        X8_new = (X8_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);
        Y7_new = (Y7_new - vertice_add_Y);
        Y8_new = (Y8_new - vertice_add_Y);

        vertex((wide - 175) + X1_new, Y1_new + 175);
        vertex((wide - 175) + X2_new, Y2_new + 175);
        vertex((wide - 175) + X3_new, Y3_new + 175);
        vertex((wide - 175) + X4_new, Y4_new + 175);
        vertex((wide - 175) + X5_new, Y5_new + 175);
        vertex((wide - 175) + X6_new, Y6_new + 175);
        vertex((wide - 175) + X7_new, Y7_new + 175);
        vertex((wide - 175) + X8_new, Y8_new + 175);

        endShape();
        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new);

      } else if (num == 4) {

        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));
        var X7_new = (randX7 * cos(degree)) - ((randY7) * sin(degree));
        var X8_new = (randX8 * cos(degree)) - ((randY8) * sin(degree));

        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));
        var Y7_new = (randX7 * sin(degree)) + ((randY7) * cos(degree));
        var Y8_new = (randX8 * sin(degree)) + ((randY8) * cos(degree));


        reflect_8_4 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_8_4 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;
          X7_new *= -1;
          X8_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new, X7_new, X8_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new, Y7_new, Y8_new];


        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);
        console.log("X6_new: ", X7_new);
        console.log("X6_new: ", X8_new);

        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);
        console.log("Y6_new: ", Y7_new);
        console.log("Y6_new: ", Y8_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);
        X7_new = (X7_new - vertice_add_X);
        X8_new = (X8_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);
        Y7_new = (Y7_new - vertice_add_Y);
        Y8_new = (Y8_new - vertice_add_Y);

        vertex(X1_new + wide_quarter, Y1_new + 525); console.log(X1_new); console.log(Y1_new);
        vertex(X2_new + wide_quarter, Y2_new + 525); console.log(X2_new); console.log(Y2_new);
        vertex(X3_new + wide_quarter, Y3_new + 525); console.log(X3_new); console.log(Y3_new);
        vertex(X4_new + wide_quarter, Y4_new + 525); console.log(X4_new); console.log(Y4_new);
        vertex(X5_new + wide_quarter, Y5_new + 525); console.log(X5_new); console.log(Y5_new);
        vertex(X6_new + wide_quarter, Y6_new + 525); console.log(X6_new); console.log(Y6_new);
        vertex(X7_new + wide_quarter, Y7_new + 525); console.log(X7_new); console.log(Y7_new);
        vertex(X8_new + wide_quarter, Y8_new + 525); console.log(X8_new); console.log(Y8_new);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new);

      } else if (num == 5) {

        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));
        var X7_new = (randX7 * cos(degree)) - ((randY7) * sin(degree));
        var X8_new = (randX8 * cos(degree)) - ((randY8) * sin(degree));

        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));
        var Y7_new = (randX7 * sin(degree)) + ((randY7) * cos(degree));
        var Y8_new = (randX8 * sin(degree)) + ((randY8) * cos(degree));

        reflect_8_5 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_8_5 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;
          X7_new *= -1;
          X8_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new, X7_new, X8_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new, Y7_new, Y8_new];

        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);
        console.log("X6_new: ", X7_new);
        console.log("X6_new: ", X8_new);

        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);
        console.log("Y6_new: ", Y7_new);
        console.log("Y6_new: ", Y8_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);
        X7_new = (X7_new - vertice_add_X);
        X8_new = (X8_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);
        Y7_new = (Y7_new - vertice_add_Y);
        Y8_new = (Y8_new - vertice_add_Y);

        vertex((wide - 175) + X1_new, Y1_new + 525);
        vertex((wide - 175) + X2_new, Y2_new + 525);
        vertex((wide - 175) + X3_new, Y3_new + 525);
        vertex((wide - 175) + X4_new, Y4_new + 525);
        vertex((wide - 175) + X5_new, Y5_new + 525);
        vertex((wide - 175) + X6_new, Y6_new + 525);
        vertex((wide - 175) + X7_new, Y7_new + 525);
        vertex((wide - 175) + X8_new, Y8_new + 525);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new);

      } else if (num == 6) {

        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));
        var X7_new = (randX7 * cos(degree)) - ((randY7) * sin(degree));
        var X8_new = (randX8 * cos(degree)) - ((randY8) * sin(degree));

        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));
        var Y7_new = (randX7 * sin(degree)) + ((randY7) * cos(degree));
        var Y8_new = (randX8 * sin(degree)) + ((randY8) * cos(degree));

        reflect_8_6 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_8_6 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;
          X7_new *= -1;
          X8_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new, X7_new, X8_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new, Y7_new, Y8_new];


        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);
        console.log("X6_new: ", X7_new);
        console.log("X6_new: ", X8_new);

        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);
        console.log("Y6_new: ", Y7_new);
        console.log("Y6_new: ", Y8_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);
        X7_new = (X7_new - vertice_add_X);
        X8_new = (X8_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);
        Y7_new = (Y7_new - vertice_add_Y);
        Y8_new = (Y8_new - vertice_add_Y);

        vertex((wide - wide_quarter) - X1_new, Y1_new + 175);
        vertex((wide - wide_quarter) - X2_new, Y2_new + 175);
        vertex((wide - wide_quarter) - X3_new, Y3_new + 175);
        vertex((wide - wide_quarter) - X4_new, Y4_new + 175);
        vertex((wide - wide_quarter) - X5_new, Y5_new + 175);
        vertex((wide - wide_quarter) - X6_new, Y6_new + 175);
        vertex((wide - wide_quarter) - X7_new, Y7_new + 175);
        vertex((wide - wide_quarter) - X8_new, Y8_new + 175);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new);
      } else if (num == 7) {

        let test = calc_coords(1, 359);
        console.log("test is:", test);
        //for (let test = 0; test < 361; test++) {
        beginShape();
        var degree = radians(test);
        var X1_new = (randX1 * cos(degree)) - ((randY1) * sin(degree));
        var X2_new = (randX2 * cos(degree)) - ((randY2) * sin(degree));
        var X3_new = (randX3 * cos(degree)) - ((randY3) * sin(degree));
        var X4_new = (randX4 * cos(degree)) - ((randY4) * sin(degree));
        var X5_new = (randX5 * cos(degree)) - ((randY5) * sin(degree));
        var X6_new = (randX6 * cos(degree)) - ((randY6) * sin(degree));
        var X7_new = (randX7 * cos(degree)) - ((randY7) * sin(degree));
        var X8_new = (randX8 * cos(degree)) - ((randY8) * sin(degree));

        var Y1_new = (randX1 * sin(degree)) + ((randY1) * cos(degree));
        var Y2_new = (randX2 * sin(degree)) + ((randY2) * cos(degree));
        var Y3_new = (randX3 * sin(degree)) + ((randY3) * cos(degree));
        var Y4_new = (randX4 * sin(degree)) + ((randY4) * cos(degree));
        var Y5_new = (randX5 * sin(degree)) + ((randY5) * cos(degree));
        var Y6_new = (randX6 * sin(degree)) + ((randY6) * cos(degree));
        var Y7_new = (randX7 * sin(degree)) + ((randY7) * cos(degree));
        var Y8_new = (randX8 * sin(degree)) + ((randY8) * cos(degree));

        reflect_8_7 = calc_coords(0, 1); // Random variable used to determine if shape will be reflected or not

        if (reflect_8_7 == 1) { // Reflect shape if reflect value == 1
          X1_new *= -1;
          X2_new *= -1;
          X3_new *= -1;
          X4_new *= -1;
          X5_new *= -1;
          X6_new *= -1;
          X7_new *= -1;
          X8_new *= -1;

        } else { // Do not reflect shape if reflect value == 0
          // 
        }
        //console.log("reflect is: ", reflect);

        const arr_new_X = [X1_new, X2_new, X3_new, X4_new, X5_new, X6_new, X7_new, X8_new];
        const arr_new_Y = [Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new, Y7_new, Y8_new];

        console.log("X1_new: ", X1_new);
        console.log("X2_new: ", X2_new);
        console.log("X3_new: ", X3_new);
        console.log("X4_new: ", X4_new);
        console.log("X5_new: ", X5_new);
        console.log("X6_new: ", X6_new);
        console.log("X6_new: ", X7_new);
        console.log("X6_new: ", X8_new);

        console.log("Y1_new: ", Y1_new);
        console.log("Y2_new: ", Y2_new);
        console.log("Y3_new: ", Y3_new);
        console.log("Y4_new: ", Y4_new);
        console.log("Y5_new: ", Y5_new);
        console.log("Y6_new: ", Y6_new);
        console.log("Y6_new: ", Y7_new);
        console.log("Y6_new: ", Y8_new);

        const min_X = Math.min(...arr_new_X);
        const min_Y = Math.min(...arr_new_Y);

        var vertice_add_X; // Number to add to vertices to match origin's x value. 
        var vertice_add_Y; // Number to add to vertices to match origin's y value. 

        // added line:
        vertice_add_X = min_X;
        vertice_add_Y = min_Y;

        console.log("vertice_add_X: ", vertice_add_X);
        console.log("vertice_add_Y: ", vertice_add_Y);

        X1_new = (X1_new - vertice_add_X);
        X2_new = (X2_new - vertice_add_X);
        X3_new = (X3_new - vertice_add_X);
        X4_new = (X4_new - vertice_add_X);
        X5_new = (X5_new - vertice_add_X);
        X6_new = (X6_new - vertice_add_X);
        X7_new = (X7_new - vertice_add_X);
        X8_new = (X8_new - vertice_add_X);

        Y1_new = (Y1_new - vertice_add_Y);
        Y2_new = (Y2_new - vertice_add_Y);
        Y3_new = (Y3_new - vertice_add_Y);
        Y4_new = (Y4_new - vertice_add_Y);
        Y5_new = (Y5_new - vertice_add_Y);
        Y6_new = (Y6_new - vertice_add_Y);
        Y7_new = (Y7_new - vertice_add_Y);
        Y8_new = (Y8_new - vertice_add_Y);

        vertex((wide - wide_quarter) - X1_new, Y1_new + 525);
        vertex((wide - wide_quarter) - X2_new, Y2_new + 525);
        vertex((wide - wide_quarter) - X3_new, Y3_new + 525);
        vertex((wide - wide_quarter) - X4_new, Y4_new + 525);
        vertex((wide - wide_quarter) - X5_new, Y5_new + 525);
        vertex((wide - wide_quarter) - X6_new, Y6_new + 525);
        vertex((wide - wide_quarter) - X7_new, Y7_new + 525);
        vertex((wide - wide_quarter) - X8_new, Y8_new + 525);

        // Makes vertices at origin, then pushes Y values to center of box. 
        endShape();

        console.log("Y values: ", Y1_new, Y2_new, Y3_new, Y4_new, Y5_new, Y6_new);
      }
    }
    //shape_data.push("Hola");

    // Array to be returned (containing values for if shapes are rotated/flipped)...
    //const shape_data = [vertices, reflect_8_0, reflect_8_1, reflect_8_2, reflect_8_3, reflect_8_4, reflect_8_5, reflect_8_6, reflect_8_7];


    //return shape_data;

  }
  // Lights Boxes Green or Red
  // Also, tracks Player Score
  KeepScore();
  MouseCoords();

}

var correct_choice = 0;
var incorrect_choice = 0;

var total_possible_score = 0; // Total possible score increases by 8 for each shape.
//var player_score = 0;

var mouseX;
var mouseY;

var pressable_button_v5_0 = 0;
var pressable_button_v5_1 = 0;
var pressable_button_v5_2 = 0;
var pressable_button_v5_3 = 0;
var pressable_button_v5_4 = 0;
var pressable_button_v5_5 = 0;
var pressable_button_v5_6 = 0;
var pressable_button_v5_7 = 0;

var pressable_button_v6_0 = 0;
var pressable_button_v6_1 = 0;
var pressable_button_v6_2 = 0;
var pressable_button_v6_3 = 0;
var pressable_button_v6_4 = 0;
var pressable_button_v6_5 = 0;
var pressable_button_v6_6 = 0;
var pressable_button_v6_7 = 0;

var pressable_button_v7_0 = 0;
var pressable_button_v7_1 = 0;
var pressable_button_v7_2 = 0;
var pressable_button_v7_3 = 0;
var pressable_button_v7_4 = 0;
var pressable_button_v7_5 = 0;
var pressable_button_v7_6 = 0;
var pressable_button_v7_7 = 0;

var pressable_button_v8_0 = 0;
var pressable_button_v8_1 = 0;
var pressable_button_v8_2 = 0;
var pressable_button_v8_3 = 0;
var pressable_button_v8_4 = 0;
var pressable_button_v8_5 = 0;
var pressable_button_v8_6 = 0;
var pressable_button_v8_7 = 0;

var round_player_score = 0;
var total_player_score = 0;

var num_true = 0; var num_false = 0;
var total_true = 0;
var total_false = 0;

var first_round = 0;

function MouseCoords(event) {

  // Finds mouse coordinates on click:
  mouseX = event.clientX;
  mouseY = event.clientY;
  
  if (vertices == 5) {
    //if (first_round < 1) {
      round_player_score = 8; // Player's score during round; adds eight possible for each shape (in round), then adds/subtracts according to points aquired.
   // }
   // first_round++; // No longer reset score to 8. 

    // Note: Must initialize reflect value before draw()
    // Vetices == 5, First Shape

    if ((mouseX >= 0) && (mouseX <= 175) && (mouseY >= 175) && (mouseY <= 350) && (reflect_5_0 == 0) && (pressable_button_v5_0 == 0)) {
      beginShape();
      vertex(0, 175);
      vertex(0, 350);
      vertex(175, 350);
      vertex(175, 175);
      vertex(0, 175);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      correct_choice += 1;
      pressable_button_v5_0 = 1;

    } else if ((mouseX >= 0) && (mouseX <= 175) && (mouseY >= 175) && (mouseY <= 350) && (reflect_5_0 == 1) && (pressable_button_v5_0 == 0)) {
      console.log("YES, PROBLEM HAPPENING.");
      beginShape();
      vertex(0, 175);
      vertex(0, 350);
      vertex(175, 350);
      vertex(175, 175);
      vertex(0, 175);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      incorrect_choice -= 1;
      pressable_button_v5_0 = 1;

    }

    // Second Shape


    if ((mouseX >= 0) && (mouseX <= 175) && (mouseY >= 525) && (mouseY <= 700) && (reflect_5_1 == 0) && (pressable_button_v5_1 == 0)) {
      // Shape #2
      beginShape();
      vertex(0, 525);
      vertex(0, 700);
      vertex(175, 700);
      vertex(175, 525);
      vertex(0, 525);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      correct_choice += 1;
      pressable_button_v5_1 = 1;
      
    } else if ((mouseX >= 0) && (mouseX <= 175) && (mouseY >= 525) && (mouseY <= 700) && (reflect_5_1 == 1) && (pressable_button_v5_1 == 0)) {
      console.log("YES, PROBLEM HAPPENING.");
      beginShape();
      vertex(0, 525);
      vertex(0, 700);
      vertex(175, 700);
      vertex(175, 525);
      vertex(0, 525);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      incorrect_choice -= 1;
      pressable_button_v5_1 = 1;

    }

    // Third Shape

    if ((mouseX >= wide_quarter) && (mouseX <= 175 + wide_quarter) && (mouseY >= 175) && (mouseY <= 350) && (reflect_5_2 == 0) && (pressable_button_v5_2 == 0)) {
      beginShape();
      vertex(0 + wide_quarter, 175);
      vertex(0 + wide_quarter, 350);
      vertex(175 + wide_quarter, 350);
      vertex(175 + wide_quarter, 175);
      vertex(0 + wide_quarter, 175);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      correct_choice += 1;
      pressable_button_v5_2 = 1;

    } else if ((mouseX >= wide_quarter) && (mouseX <= 175 + wide_quarter) && (mouseY >= 175) && (mouseY <= 350) && (reflect_5_2 == 1) && (pressable_button_v5_2 == 0)) {
      console.log("YES, PROBLEM HAPPENING.");
      beginShape();
      vertex(0 + wide_quarter, 175);
      vertex(0 + wide_quarter, 350);
      vertex(175 + wide_quarter, 350);
      vertex(175 + wide_quarter, 175);
      vertex(0 + wide_quarter, 175);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      incorrect_choice -= 1;
      pressable_button_v5_2 = 1;

    }

    // Fourth Shape


    if ((mouseX >= wide_quarter) && (mouseX <= 175 + wide_quarter) && (mouseY >= 525) && (mouseY <= 700) && (reflect_5_4 == 0) && (pressable_button_v5_3 == 0)) {
      beginShape();
      vertex(0 + wide_quarter, 525);
      vertex(0 + wide_quarter, 700);
      vertex(175 + wide_quarter, 700);
      vertex(175 + wide_quarter, 525);
      vertex(0 + wide_quarter, 525);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      correct_choice += 1;
      pressable_button_v5_3 = 1;

    } else if ((mouseX >= wide_quarter) && (mouseX <= 175 + wide_quarter) && (mouseY >= 525) && (mouseY <= 700) && (reflect_5_4 == 1) && (pressable_button_v5_3 == 0)) {
      beginShape();
      vertex(0 + wide_quarter, 525);
      vertex(0 + wide_quarter, 700);
      vertex(175 + wide_quarter, 700);
      vertex(175 + wide_quarter, 525);
      vertex(0 + wide_quarter, 525);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      incorrect_choice -= 1;
      pressable_button_v5_3 = 1;

    }

    // Fifth Shape 

    if ((mouseX >= wide - wide_quarter - 175) && (mouseX <= wide - wide_quarter) && (mouseY >= 175) && (mouseY <= 350) && (reflect_5_6 == 1) && (pressable_button_v5_4 == 0)) {
      beginShape();
      vertex(wide - wide_quarter, 175);
      vertex(wide - wide_quarter, 350);
      vertex(wide - wide_quarter - 175, 350);
      vertex(wide - wide_quarter - 175, 175);
      vertex(wide - wide_quarter, 175);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      correct_choice += 1;
      pressable_button_v5_4 = 1;

    } else if ((mouseX >= wide - wide_quarter - 175) && (mouseX <= wide - wide_quarter) && (mouseY >= 175) && (mouseY <= 350) && (reflect_5_6 == 0) && (pressable_button_v5_4 == 0)) {

      beginShape();
      vertex(wide - wide_quarter, 175);
      vertex(wide - wide_quarter, 350);
      vertex(wide - wide_quarter - 175, 350);
      vertex(wide - wide_quarter - 175, 175);
      vertex(wide - wide_quarter, 175);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      incorrect_choice -= 1;
      pressable_button_v5_4 = 1;

    }

    // Sixth Shape

    if ((mouseX >= wide - wide_quarter - 175) && (mouseX <= wide - wide_quarter) && (mouseY >= 525) && (mouseY <= 700) && (reflect_5_7 == 1) && (pressable_button_v5_5 == 0)) {
      beginShape();
      vertex(wide - wide_quarter, 525);
      vertex(wide - wide_quarter, 700);
      vertex(wide - wide_quarter - 175, 700);
      vertex(wide - wide_quarter - 175, 525);
      vertex(wide - wide_quarter, 525);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      correct_choice += 1;
      pressable_button_v5_5 = 1;

    } else if ((mouseX >= wide - wide_quarter - 175) && (mouseX <= wide - wide_quarter) && (mouseY >= 525) && (mouseY <= 700) && (reflect_5_7 == 0) && (pressable_button_v5_5 == 0)) {

      beginShape();
      vertex(wide - wide_quarter, 525);
      vertex(wide - wide_quarter, 700);
      vertex(wide - wide_quarter - 175, 700);
      vertex(wide - wide_quarter - 175, 525);
      vertex(wide - wide_quarter, 525);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      incorrect_choice -= 1;
      pressable_button_v5_5 = 1;

    }

    // Seventh Shape –– reflect_5_3


    if ((mouseX >= (wide - 175)) && (mouseX <= 175 + (wide - 175)) && (mouseY >= 175) && (mouseY <= 350) && (reflect_5_3 == 0) && (pressable_button_v5_6 == 0)) {
      beginShape();
      vertex(0 + (wide - 175), 175);
      vertex(0 + (wide - 175), 350);
      vertex(175 + (wide - 175), 350);
      vertex(175 + (wide - 175), 175);
      vertex(0 + (wide - 175), 175);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      correct_choice += 1;
      pressable_button_v5_6 = 1;

    } else if ((mouseX >= (wide - 175)) && (mouseX <= 175 + (wide - 175)) && (mouseY >= 175) && (mouseY <= 350) && (reflect_5_3 == 1) && (pressable_button_v5_6 == 0)) {
      // –– This one
      beginShape();
      vertex(0 + (wide - 175), 175);
      vertex(0 + (wide - 175), 350);
      vertex(175 + (wide - 175), 350);
      vertex(175 + (wide - 175), 175);
      vertex(0 + (wide - 175), 175);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      incorrect_choice -= 1;
      pressable_button_v5_6 = 1;

    }

    // Eighth Shape –– reflect_5_5

    if ((mouseX >= 0 + (wide - 175)) && (mouseX <= 175 + (wide - 175)) && (mouseY >= 525) && (mouseY <= 700) && (reflect_5_5 == 0) && (pressable_button_v5_7 == 0)) {
      beginShape();
      vertex(0 + (wide - 175), 525);
      vertex(0 + (wide - 175), 700);
      vertex(175 + (wide - 175), 700);
      vertex(175 + (wide - 175), 525);
      vertex(0 + (wide - 175), 525);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      correct_choice += 1;
      pressable_button_v5_7 = 1;

    } else if ((mouseX >= 0 + (wide - 175)) && (mouseX <= 175 + (wide - 175)) && (mouseY >= 525) && (mouseY <= 700) && (reflect_5_5 == 1) && (pressable_button_v5_7 == 0)) {
      beginShape();
      vertex(0 + (wide - 175), 525);
      vertex(0 + (wide - 175), 700);
      vertex(175 + (wide - 175), 700);
      vertex(175 + (wide - 175), 525);
      vertex(0 + (wide - 175), 525);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      incorrect_choice -= 1;
      pressable_button_v5_7 = 1;

    }
    /*

    console.log("correct_choice", correct_choice);
    console.log("incorrect_choice", incorrect_choice);
    // Adds/Subtracts from player score. 
    player_score += (correct_choice + incorrect_choice);

    console.log("HERE IS FINAL TALLY:", player_score);

    */

  } else if (vertices == 6) {
    total_possible_score += 8; // Adds eight to total (possible) score, no matter which shape generated.

    // Vetices == 6, First Shape

    if ((mouseX >= 0) && (mouseX <= 175) && (mouseY >= 175) && (mouseY <= 350) && (reflect_6_0 == 0) && (pressable_button_v6_0 == 0)) {
      beginShape();
      vertex(0, 175);
      vertex(0, 350);
      vertex(175, 350);
      vertex(175, 175);
      vertex(0, 175);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v6_0 = 1;

    } else if ((mouseX >= 0) && (mouseX <= 175) && (mouseY >= 175) && (mouseY <= 350) && (reflect_6_0 == 1) && (pressable_button_v6_0 == 0)) {
      console.log("YES, PROBLEM HAPPENING.");
      beginShape();
      vertex(0, 175);
      vertex(0, 350);
      vertex(175, 350);
      vertex(175, 175);
      vertex(0, 175);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v6_0 = 1;

    }

    // Second Shape 

    if ((mouseX >= 0) && (mouseX <= 175) && (mouseY >= 525) && (mouseY <= 700) && (reflect_6_1 == 0) && (pressable_button_v6_1 == 0)) {
      // Shape #2
      beginShape();
      vertex(0, 525);
      vertex(0, 700);
      vertex(175, 700);
      vertex(175, 525);
      vertex(0, 525);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v6_1 = 1;

    } else if ((mouseX >= 0) && (mouseX <= 175) && (mouseY >= 525) && (mouseY <= 700) && (reflect_6_1 == 1) && (pressable_button_v6_1 == 0)) {
      console.log("YES, PROBLEM HAPPENING.");
      beginShape();
      vertex(0, 525);
      vertex(0, 700);
      vertex(175, 700);
      vertex(175, 525);
      vertex(0, 525);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v6_1 = 1;

    }

    // Third Shape

    if ((mouseX >= wide_quarter) && (mouseX <= 175 + wide_quarter) && (mouseY >= 175) && (mouseY <= 350) && (reflect_6_2 == 0) && (pressable_button_v6_2 == 0)) {
      beginShape();
      vertex(0 + wide_quarter, 175);
      vertex(0 + wide_quarter, 350);
      vertex(175 + wide_quarter, 350);
      vertex(175 + wide_quarter, 175);
      vertex(0 + wide_quarter, 175);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v6_2 = 1;

    } else if ((mouseX >= wide_quarter) && (mouseX <= 175 + wide_quarter) && (mouseY >= 175) && (mouseY <= 350) && (reflect_6_2 == 1) && (pressable_button_v6_2 == 0)) {
      console.log("YES, PROBLEM HAPPENING.");
      beginShape();
      vertex(0 + wide_quarter, 175);
      vertex(0 + wide_quarter, 350);
      vertex(175 + wide_quarter, 350);
      vertex(175 + wide_quarter, 175);
      vertex(0 + wide_quarter, 175);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v6_2 = 1;

    }

    // Fourth Shape

    if ((mouseX >= wide_quarter) && (mouseX <= 175 + wide_quarter) && (mouseY >= 525) && (mouseY <= 700) && (reflect_6_4 == 0) && (pressable_button_v6_3 == 0)) {
      beginShape();
      vertex(0 + wide_quarter, 525);
      vertex(0 + wide_quarter, 700);
      vertex(175 + wide_quarter, 700);
      vertex(175 + wide_quarter, 525);
      vertex(0 + wide_quarter, 525);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v6_3 = 1;

    } else if ((mouseX >= wide_quarter) && (mouseX <= 175 + wide_quarter) && (mouseY >= 525) && (mouseY <= 700) && (reflect_6_4 == 1) && (pressable_button_v6_3 == 0)) {
      beginShape();
      vertex(0 + wide_quarter, 525);
      vertex(0 + wide_quarter, 700);
      vertex(175 + wide_quarter, 700);
      vertex(175 + wide_quarter, 525);
      vertex(0 + wide_quarter, 525);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v6_3 = 1;

    }


    // Fifth Shape ––– ERROR.

    if ((mouseX >= wide - wide_quarter - 175) && (mouseX <= wide - wide_quarter) && (mouseY >= 175) && (mouseY <= 350) && (reflect_6_6 == 1) && (pressable_button_v6_4 == 0)) {
      beginShape();
      vertex(wide - wide_quarter, 175);
      vertex(wide - wide_quarter, 350);
      vertex(wide - wide_quarter - 175, 350);
      vertex(wide - wide_quarter - 175, 175);
      vertex(wide - wide_quarter, 175);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v6_4 = 1;

    } else if ((mouseX >= wide - wide_quarter - 175) && (mouseX <= wide - wide_quarter) && (mouseY >= 175) && (mouseY <= 350) && (reflect_6_6 == 0) && (pressable_button_v6_4 == 0)) {

      beginShape();
      vertex(wide - wide_quarter, 175);
      vertex(wide - wide_quarter, 350);
      vertex(wide - wide_quarter - 175, 350);
      vertex(wide - wide_quarter - 175, 175);
      vertex(wide - wide_quarter, 175);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v6_4 = 1;

    }

    // Sixth Shape

    if ((mouseX >= wide - wide_quarter - 175) && (mouseX <= wide - wide_quarter) && (mouseY >= 525) && (mouseY <= 700) && (reflect_6_7 == 1) && (pressable_button_v6_5 == 0)) {
      beginShape();
      vertex(wide - wide_quarter, 525);
      vertex(wide - wide_quarter, 700);
      vertex(wide - wide_quarter - 175, 700);
      vertex(wide - wide_quarter - 175, 525);
      vertex(wide - wide_quarter, 525);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v6_5 = 1;

    } else if ((mouseX >= wide - wide_quarter - 175) && (mouseX <= wide - wide_quarter) && (mouseY >= 525) && (mouseY <= 700) && (reflect_6_7 == 0) && (pressable_button_v6_5 == 0)) {

      beginShape();
      vertex(wide - wide_quarter, 525);
      vertex(wide - wide_quarter, 700);
      vertex(wide - wide_quarter - 175, 700);
      vertex(wide - wide_quarter - 175, 525);
      vertex(wide - wide_quarter, 525);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v6_5 = 1;

    }

    // Seventh Shape –– reflect_5_3

    if ((mouseX >= (wide - 175)) && (mouseX <= 175 + (wide - 175)) && (mouseY >= 175) && (mouseY <= 350) && (reflect_6_3 == 0) && (pressable_button_v6_6 == 0)) {
      beginShape();
      vertex(0 + (wide - 175), 175);
      vertex(0 + (wide - 175), 350);
      vertex(175 + (wide - 175), 350);
      vertex(175 + (wide - 175), 175);
      vertex(0 + (wide - 175), 175);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v6_6 = 1;

    } else if ((mouseX >= (wide - 175)) && (mouseX <= 175 + (wide - 175)) && (mouseY >= 175) && (mouseY <= 350) && (reflect_6_3 == 1) && (pressable_button_v6_6 == 0)) {
      // –– This one
      beginShape();
      vertex(0 + (wide - 175), 175);
      vertex(0 + (wide - 175), 350);
      vertex(175 + (wide - 175), 350);
      vertex(175 + (wide - 175), 175);
      vertex(0 + (wide - 175), 175);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v6_6 = 1;

    }

    // Eighth Shape –– reflect_5_5

    if ((mouseX >= 0 + (wide - 175)) && (mouseX <= 175 + (wide - 175)) && (mouseY >= 525) && (mouseY <= 700) && (reflect_6_5 == 0) && (pressable_button_v6_7 == 0)) {
      beginShape();
      vertex(0 + (wide - 175), 525);
      vertex(0 + (wide - 175), 700);
      vertex(175 + (wide - 175), 700);
      vertex(175 + (wide - 175), 525);
      vertex(0 + (wide - 175), 525);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v6_7 = 1;

    } else if ((mouseX >= 0 + (wide - 175)) && (mouseX <= 175 + (wide - 175)) && (mouseY >= 525) && (mouseY <= 700) && (reflect_6_5 == 1) && (pressable_button_v6_7 == 0)) {
      beginShape();
      vertex(0 + (wide - 175), 525);
      vertex(0 + (wide - 175), 700);
      vertex(175 + (wide - 175), 700);
      vertex(175 + (wide - 175), 525);
      vertex(0 + (wide - 175), 525);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v6_7 = 1;

    }

  } else if (vertices == 7) {
    total_possible_score += 8; // Adds eight to total (possible) score, no matter which shape generated.

    // Vetices == 7, First Shape

    if ((mouseX >= 0) && (mouseX <= 175) && (mouseY >= 175) && (mouseY <= 350) && (reflect_7_0 == 0) && (pressable_button_v7_0 == 0)) {
      beginShape();
      vertex(0, 175);
      vertex(0, 350);
      vertex(175, 350);
      vertex(175, 175);
      vertex(0, 175);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v7_0 = 1;

    } else if ((mouseX >= 0) && (mouseX <= 175) && (mouseY >= 175) && (mouseY <= 350) && (reflect_7_0 == 1) && (pressable_button_v7_0 == 0)) {
      console.log("YES, PROBLEM HAPPENING.");
      beginShape();
      vertex(0, 175);
      vertex(0, 350);
      vertex(175, 350);
      vertex(175, 175);
      vertex(0, 175);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v7_0 = 1;

    }

    // Second Shape 

    if ((mouseX >= 0) && (mouseX <= 175) && (mouseY >= 525) && (mouseY <= 700) && (reflect_7_1 == 0) && (pressable_button_v7_1 == 0)) {
      // Shape #2
      beginShape();
      vertex(0, 525);
      vertex(0, 700);
      vertex(175, 700);
      vertex(175, 525);
      vertex(0, 525);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v7_1 = 1;

    } else if ((mouseX >= 0) && (mouseX <= 175) && (mouseY >= 525) && (mouseY <= 700) && (reflect_7_1 == 1) && (pressable_button_v7_1 == 0)) {
      console.log("YES, PROBLEM HAPPENING.");
      beginShape();
      vertex(0, 525);
      vertex(0, 700);
      vertex(175, 700);
      vertex(175, 525);
      vertex(0, 525);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v7_1 = 1;

    }

    // Third Shape

    if ((mouseX >= wide_quarter) && (mouseX <= 175 + wide_quarter) && (mouseY >= 175) && (mouseY <= 350) && (reflect_7_2 == 0) && (pressable_button_v7_2 == 0)) {
      beginShape();
      vertex(0 + wide_quarter, 175);
      vertex(0 + wide_quarter, 350);
      vertex(175 + wide_quarter, 350);
      vertex(175 + wide_quarter, 175);
      vertex(0 + wide_quarter, 175);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v7_2 = 1;

    } else if ((mouseX >= wide_quarter) && (mouseX <= 175 + wide_quarter) && (mouseY >= 175) && (mouseY <= 350) && (reflect_7_2 == 1) && (pressable_button_v7_2 == 0)) {
      console.log("YES, PROBLEM HAPPENING.");
      beginShape();
      vertex(0 + wide_quarter, 175);
      vertex(0 + wide_quarter, 350);
      vertex(175 + wide_quarter, 350);
      vertex(175 + wide_quarter, 175);
      vertex(0 + wide_quarter, 175);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v7_2 = 1;

    }

    // Fourth Shape

    if ((mouseX >= wide_quarter) && (mouseX <= 175 + wide_quarter) && (mouseY >= 525) && (mouseY <= 700) && (reflect_7_4 == 0) && (pressable_button_v7_3 == 0)) {
      beginShape();
      vertex(0 + wide_quarter, 525);
      vertex(0 + wide_quarter, 700);
      vertex(175 + wide_quarter, 700);
      vertex(175 + wide_quarter, 525);
      vertex(0 + wide_quarter, 525);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v7_3 = 1;

    } else if ((mouseX >= wide_quarter) && (mouseX <= 175 + wide_quarter) && (mouseY >= 525) && (mouseY <= 700) && (reflect_7_4 == 1) && (pressable_button_v7_3 == 0)) {
      beginShape();
      vertex(0 + wide_quarter, 525);
      vertex(0 + wide_quarter, 700);
      vertex(175 + wide_quarter, 700);
      vertex(175 + wide_quarter, 525);
      vertex(0 + wide_quarter, 525);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v7_3 = 1;

    }


    // Fifth Shape ––– ERROR.

    if ((mouseX >= wide - wide_quarter - 175) && (mouseX <= wide - wide_quarter) && (mouseY >= 175) && (mouseY <= 350) && (reflect_7_6 == 1) && (pressable_button_v7_4 == 0)) {
      beginShape();
      vertex(wide - wide_quarter, 175);
      vertex(wide - wide_quarter, 350);
      vertex(wide - wide_quarter - 175, 350);
      vertex(wide - wide_quarter - 175, 175);
      vertex(wide - wide_quarter, 175);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v7_4 = 1;

    } else if ((mouseX >= wide - wide_quarter - 175) && (mouseX <= wide - wide_quarter) && (mouseY >= 175) && (mouseY <= 350) && (reflect_7_6 == 0) && (pressable_button_v7_4 == 0)) {

      beginShape();
      vertex(wide - wide_quarter, 175);
      vertex(wide - wide_quarter, 350);
      vertex(wide - wide_quarter - 175, 350);
      vertex(wide - wide_quarter - 175, 175);
      vertex(wide - wide_quarter, 175);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v7_4 = 1;

    }

    // Sixth Shape

    if ((mouseX >= wide - wide_quarter - 175) && (mouseX <= wide - wide_quarter) && (mouseY >= 525) && (mouseY <= 700) && (reflect_7_7 == 1) && (pressable_button_v7_5 == 0)) {
      beginShape();
      vertex(wide - wide_quarter, 525);
      vertex(wide - wide_quarter, 700);
      vertex(wide - wide_quarter - 175, 700);
      vertex(wide - wide_quarter - 175, 525);
      vertex(wide - wide_quarter, 525);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v7_5 = 1;

    } else if ((mouseX >= wide - wide_quarter - 175) && (mouseX <= wide - wide_quarter) && (mouseY >= 525) && (mouseY <= 700) && (reflect_7_7 == 0) && (pressable_button_v7_5 == 0)) {

      beginShape();
      vertex(wide - wide_quarter, 525);
      vertex(wide - wide_quarter, 700);
      vertex(wide - wide_quarter - 175, 700);
      vertex(wide - wide_quarter - 175, 525);
      vertex(wide - wide_quarter, 525);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v7_5 = 1;

    }

    // Seventh Shape –– reflect_5_3

    if ((mouseX >= (wide - 175)) && (mouseX <= 175 + (wide - 175)) && (mouseY >= 175) && (mouseY <= 350) && (reflect_7_3 == 0) && (pressable_button_v7_6 == 0)) {
      beginShape();
      vertex(0 + (wide - 175), 175);
      vertex(0 + (wide - 175), 350);
      vertex(175 + (wide - 175), 350);
      vertex(175 + (wide - 175), 175);
      vertex(0 + (wide - 175), 175);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v7_6 = 1;

    } else if ((mouseX >= (wide - 175)) && (mouseX <= 175 + (wide - 175)) && (mouseY >= 175) && (mouseY <= 350) && (reflect_7_3 == 1) && (pressable_button_v7_6 == 0)) {
      // –– This one
      beginShape();
      vertex(0 + (wide - 175), 175);
      vertex(0 + (wide - 175), 350);
      vertex(175 + (wide - 175), 350);
      vertex(175 + (wide - 175), 175);
      vertex(0 + (wide - 175), 175);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v7_6 = 1;

    }

    // Eighth Shape –– reflect_5_5

    if ((mouseX >= 0 + (wide - 175)) && (mouseX <= 175 + (wide - 175)) && (mouseY >= 525) && (mouseY <= 700) && (reflect_7_5 == 0) && (pressable_button_v7_7 == 0)) {
      beginShape();
      vertex(0 + (wide - 175), 525);
      vertex(0 + (wide - 175), 700);
      vertex(175 + (wide - 175), 700);
      vertex(175 + (wide - 175), 525);
      vertex(0 + (wide - 175), 525);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v7_7 = 1;

    } else if ((mouseX >= 0 + (wide - 175)) && (mouseX <= 175 + (wide - 175)) && (mouseY >= 525) && (mouseY <= 700) && (reflect_7_5 == 1) && (pressable_button_v7_7 == 0)) {
      beginShape();
      vertex(0 + (wide - 175), 525);
      vertex(0 + (wide - 175), 700);
      vertex(175 + (wide - 175), 700);
      vertex(175 + (wide - 175), 525);
      vertex(0 + (wide - 175), 525);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v7_7 = 1;

    }

  } else if (vertices == 8) {
    total_possible_score += 8; // Adds eight to total (possible) score, no matter which shape generated.

    // Vetices == 8, First Shape

    if ((mouseX >= 0) && (mouseX <= 175) && (mouseY >= 175) && (mouseY <= 350) && (reflect_8_0 == 0) && (pressable_button_v8_0 == 0)) {
      beginShape();
      vertex(0, 175);
      vertex(0, 350);
      vertex(175, 350);
      vertex(175, 175);
      vertex(0, 175);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v8_0 = 1;

    } else if ((mouseX >= 0) && (mouseX <= 175) && (mouseY >= 175) && (mouseY <= 350) && (reflect_8_0 == 1) && (pressable_button_v8_0 == 0)) {
      console.log("YES, PROBLEM HAPPENING.");
      beginShape();
      vertex(0, 175);
      vertex(0, 350);
      vertex(175, 350);
      vertex(175, 175);
      vertex(0, 175);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v8_0 = 1;

    }

    // Second Shape 

    if ((mouseX >= 0) && (mouseX <= 175) && (mouseY >= 525) && (mouseY <= 700) && (reflect_8_1 == 0) && (pressable_button_v8_1 == 0)) {
      // Shape #2
      beginShape();
      vertex(0, 525);
      vertex(0, 700);
      vertex(175, 700);
      vertex(175, 525);
      vertex(0, 525);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v8_1 = 1;

    } else if ((mouseX >= 0) && (mouseX <= 175) && (mouseY >= 525) && (mouseY <= 700) && (reflect_8_1 == 1) && (pressable_button_v8_1 == 0)) {
      console.log("YES, PROBLEM HAPPENING.");
      beginShape();
      vertex(0, 525);
      vertex(0, 700);
      vertex(175, 700);
      vertex(175, 525);
      vertex(0, 525);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v8_1 = 1;

    }

    // Third Shape

    if ((mouseX >= wide_quarter) && (mouseX <= 175 + wide_quarter) && (mouseY >= 175) && (mouseY <= 350) && (reflect_8_2 == 0) && (pressable_button_v8_2 == 0)) {
      beginShape();
      vertex(0 + wide_quarter, 175);
      vertex(0 + wide_quarter, 350);
      vertex(175 + wide_quarter, 350);
      vertex(175 + wide_quarter, 175);
      vertex(0 + wide_quarter, 175);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v8_2 = 1;

    } else if ((mouseX >= wide_quarter) && (mouseX <= 175 + wide_quarter) && (mouseY >= 175) && (mouseY <= 350) && (reflect_8_2 == 1) && (pressable_button_v8_2 == 0)) {
      console.log("YES, PROBLEM HAPPENING.");
      beginShape();
      vertex(0 + wide_quarter, 175);
      vertex(0 + wide_quarter, 350);
      vertex(175 + wide_quarter, 350);
      vertex(175 + wide_quarter, 175);
      vertex(0 + wide_quarter, 175);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v8_2 = 1;

    }

    // Fourth Shape

    if ((mouseX >= wide_quarter) && (mouseX <= 175 + wide_quarter) && (mouseY >= 525) && (mouseY <= 700) && (reflect_8_4 == 0) && (pressable_button_v8_3 == 0)) {
      beginShape();
      vertex(0 + wide_quarter, 525);
      vertex(0 + wide_quarter, 700);
      vertex(175 + wide_quarter, 700);
      vertex(175 + wide_quarter, 525);
      vertex(0 + wide_quarter, 525);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v8_3 = 1;

    } else if ((mouseX >= wide_quarter) && (mouseX <= 175 + wide_quarter) && (mouseY >= 525) && (mouseY <= 700) && (reflect_8_4 == 1) && (pressable_button_v8_3 == 0)) {
      beginShape();
      vertex(0 + wide_quarter, 525);
      vertex(0 + wide_quarter, 700);
      vertex(175 + wide_quarter, 700);
      vertex(175 + wide_quarter, 525);
      vertex(0 + wide_quarter, 525);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v8_3 = 1;

    }

    // Fifth Shape ––– ERROR.

    if ((mouseX >= wide - wide_quarter - 175) && (mouseX <= wide - wide_quarter) && (mouseY >= 175) && (mouseY <= 350) && (reflect_8_6 == 1) && (pressable_button_v8_4 == 0)) {
      beginShape();
      vertex(wide - wide_quarter, 175);
      vertex(wide - wide_quarter, 350);
      vertex(wide - wide_quarter - 175, 350);
      vertex(wide - wide_quarter - 175, 175);
      vertex(wide - wide_quarter, 175);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v8_4 = 1;

    } else if ((mouseX >= wide - wide_quarter - 175) && (mouseX <= wide - wide_quarter) && (mouseY >= 175) && (mouseY <= 350) && (reflect_8_6 == 0) && (pressable_button_v8_4 == 0)) {

      beginShape();
      vertex(wide - wide_quarter, 175);
      vertex(wide - wide_quarter, 350);
      vertex(wide - wide_quarter - 175, 350);
      vertex(wide - wide_quarter - 175, 175);
      vertex(wide - wide_quarter, 175);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v8_4 = 1;

    }

    // Sixth Shape

    if ((mouseX >= wide - wide_quarter - 175) && (mouseX <= wide - wide_quarter) && (mouseY >= 525) && (mouseY <= 700) && (reflect_8_7 == 1) && (pressable_button_v8_5 == 0)) {
      beginShape();
      vertex(wide - wide_quarter, 525);
      vertex(wide - wide_quarter, 700);
      vertex(wide - wide_quarter - 175, 700);
      vertex(wide - wide_quarter - 175, 525);
      vertex(wide - wide_quarter, 525);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v8_5 = 1;

    } else if ((mouseX >= wide - wide_quarter - 175) && (mouseX <= wide - wide_quarter) && (mouseY >= 525) && (mouseY <= 700) && (reflect_8_7 == 0) && (pressable_button_v8_5 == 0)) {

      beginShape();
      vertex(wide - wide_quarter, 525);
      vertex(wide - wide_quarter, 700);
      vertex(wide - wide_quarter - 175, 700);
      vertex(wide - wide_quarter - 175, 525);
      vertex(wide - wide_quarter, 525);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v8_5 = 1;

    }

    // Seventh Shape –– reflect_5_3

    if ((mouseX >= (wide - 175)) && (mouseX <= 175 + (wide - 175)) && (mouseY >= 175) && (mouseY <= 350) && (reflect_8_3 == 0) && (pressable_button_v8_6 == 0)) {
      beginShape();
      vertex(0 + (wide - 175), 175);
      vertex(0 + (wide - 175), 350);
      vertex(175 + (wide - 175), 350);
      vertex(175 + (wide - 175), 175);
      vertex(0 + (wide - 175), 175);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v8_6 = 1;

    } else if ((mouseX >= (wide - 175)) && (mouseX <= 175 + (wide - 175)) && (mouseY >= 175) && (mouseY <= 350) && (reflect_8_3 == 1) && (pressable_button_v8_6 == 0)) {
      // –– This one
      beginShape();
      vertex(0 + (wide - 175), 175);
      vertex(0 + (wide - 175), 350);
      vertex(175 + (wide - 175), 350);
      vertex(175 + (wide - 175), 175);
      vertex(0 + (wide - 175), 175);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v8_6 = 1;

    }

    // Eighth Shape –– reflect_5_5

    if ((mouseX >= 0 + (wide - 175)) && (mouseX <= 175 + (wide - 175)) && (mouseY >= 525) && (mouseY <= 700) && (reflect_8_5 == 0) && (pressable_button_v8_7 == 0)) {
      beginShape();
      vertex(0 + (wide - 175), 525);
      vertex(0 + (wide - 175), 700);
      vertex(175 + (wide - 175), 700);
      vertex(175 + (wide - 175), 525);
      vertex(0 + (wide - 175), 525);
      fill(0, 255, 0, 150); // Correct – Not reflected.
      endShape();
      pressable_button_v8_7 = 1;

    } else if ((mouseX >= 0 + (wide - 175)) && (mouseX <= 175 + (wide - 175)) && (mouseY >= 525) && (mouseY <= 700) && (reflect_8_5 == 1) && (pressable_button_v8_7 == 0)) {
      beginShape();
      vertex(0 + (wide - 175), 525);
      vertex(0 + (wide - 175), 700);
      vertex(175 + (wide - 175), 700);
      vertex(175 + (wide - 175), 525);
      vertex(0 + (wide - 175), 525);
      fill(255, 0, 0, 150); // Incorrect – Reflected.
      endShape();
      pressable_button_v8_7 = 1;

    }
  }
  KeepScore();

}

document.addEventListener("click", MouseCoords);

var total_correct; // Tally them via for loop.
var total_incorrect; // Tally them, then multiply -1

function KeepScore() {

  console.log("VERTICES:", vertices);

    // For correct value, -1 point if NOT selected.
    // When correct value chosen, then the "-1" is undone –– points stay constant.
  /*
   
    if (reflect_5_6 == 1) {
      correct_choice -= 1;
    }
  */

  if (vertices == 5) {
    const arr_reflect_5 = [reflect_5_0, reflect_5_1, reflect_5_2, reflect_5_3, reflect_5_4, reflect_5_5];
    const arr_reflect_5_continued = [reflect_5_6, reflect_5_7];

    for (var i = 0; i < 6; i++) {
      if (arr_reflect_5[i] == 0) {
        num_true++;
      } else {
        num_false++;
      }
    } for (var i = 0; i < 2; i++) { // Since reflect #6 and #7 are not same number (1 means true, 0 false)
      if (arr_reflect_5_continued[i] == 1) {
        num_true++;
      } else {
        num_false++;
      }
    } if ((total_true + total_false) < 8) {
      total_true = num_true;
      total_false = num_false;
    }

  } else if (vertices == 6) {
    const arr_reflect_6 = [reflect_6_0, reflect_6_1, reflect_6_2, reflect_6_3, reflect_6_4, reflect_6_5];
    const arr_reflect_6_continued = [reflect_6_6, reflect_6_7];

    for (var i = 0; i < 6; i++) {
      if (arr_reflect_6[i] == 0) {
        num_true++;
      } else {
        num_false++;
      }
    } for (var i = 0; i < 2; i++) { // Since reflect #6 and #7 are not same number (1 means true, 0 false)
      if (arr_reflect_6_continued[i] == 1) {
        num_true++;
      } else {
        num_false++;
      }
    } if ((total_true + total_false) < 8) {
      total_true = num_true;
      total_false = num_false;
    }
    //console.log("total_correct", total_true);
    //console.log("total_false", total_false);
  } else if (vertices == 7) {
    const arr_reflect_7 = [reflect_7_0, reflect_7_1, reflect_7_2, reflect_7_3, reflect_7_4, reflect_7_5];
    const arr_reflect_7_continued = [reflect_7_6, reflect_7_7];

    for (var i = 0; i < 6; i++) {
      if (arr_reflect_7[i] == 0) {
        num_true++;
      } else {
        num_false++;
      }
    } for (var i = 0; i < 2; i++) { // Since reflect #6 and #7 are not same number (1 means true, 0 false)
      if (arr_reflect_7_continued[i] == 1) {
        num_true++;
      } else {
        num_false++;
      }
    } if ((total_true + total_false) < 8) {
      total_true = num_true;
      total_false = num_false;
    }
    //console.log("total_correct", total_true);
    //console.log("total_false", total_false);
  } else if (vertices == 8) {
    const arr_reflect_8 = [reflect_8_0, reflect_8_1, reflect_8_2, reflect_8_3, reflect_8_4, reflect_8_5];
    const arr_reflect_8_continued = [reflect_8_6, reflect_8_7];

    for (var i = 0; i < 6; i++) {
      if (arr_reflect_8[i] == 0) {
        num_true++;
      } else {
        num_false++;
      }
    } for (var i = 0; i < 2; i++) { // Since reflect #6 and #7 are not same number (1 means true, 0 false)
      if (arr_reflect_8_continued[i] == 1) {
        num_true++;
      } else {
        num_false++;
      }
    } if ((total_true + total_false) < 8) {
      total_true = num_true;
      total_false = num_false;
    }

    //console.log("total_correct", total_true);
    //console.log("total_false", total_false);
  }

  console.log("total_correct", total_true);
  console.log("total_false", total_false);
  
  // Current Player Score:
  round_player_score = (8 - total_true) + correct_choice + incorrect_choice;
  console.log("round_player_score", round_player_score);


  /*
  console.log("total_correct", total_true);
  console.log("total_false", total_false);

  // MOST IMPORTANT: Color ONLY Clickable ONCE.

  // If incorrect chosen, Subtract 1 from total
  // If correct chosen, variable is turned to 1 (true)
  // If correct NOT chosen (variable is not 1 – it is 0 by default), subtract 1 point

  // If correct is chosen, the point is kept. Each round begins with 8 points. 





  /*
  if (vertices == 3) {
    console.log("vertices", vertices);
  } else {
    console.log("vertices_2", vertices);
  }

  if (vertices == 4) {
    console.log("vertices", vertices);
  } else {
    console.log("vertices_2", vertices);
  } */
}




cookie_test();

/*

var button = createButton("Next");
button.mousePressed(nextSketch);

function nextSketch() {

}

*/



/*
function draw_original() {
  draw();
}
*/

var new_wide = window.innerWidth / 2;






