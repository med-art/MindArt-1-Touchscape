//screen bHeight 2560 1440

var img_background, img_brush, img_rake; // all images
var sound1, sound2; // wind, trees, etc
var bool_button1 = 0; // bool_button1ean toggle
var bool_button2 = 4; // bool_button1ean toggle
var gui_img = [];
var pebble = [];
var pebbleu = [];
var tempX = [];
var tempY = [];
var tempX2 = 0;
var tempY2 = 0;
var tempcount = 0;
var randomScalar = [];
var tempID = [];

// declare all brush variables
var rakeX = 0, rakeY = 0, rake2X = 0, rake2Y = 0, rake3X = 0, rake3Y = 0, angle1, segLength;


//button spacing
//margin from right
var margin, buttonWidth, buttonSpacing;

let colourBool = 0;

function preload() {

// brush loads
  img_brush = loadImage('assets/brush.png');
  img_rake = loadImage('assets/rake1.png');
  img_rake2 = loadImage('assets/rake2.png');
  img_background = loadImage('assets/sand_01.jpg')


  for (var i = 1; i < 9; i++) {
    gui_img[i] = loadImage('assets/gui' + i + '.png');
  }

  for (var i = 1; i < 8; i++) {
    pebble[i] = loadImage('assets/wpebble' + i + '.png');
  }

  for (var i = 1; i < 8; i++) {
    pebbleu[i] = loadImage('assets/wpebbleu' + i + '.png');
  }

}

function setup() {
  // frameRate(1000);
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1); // effectively ignores retina displays
  img_background.loadPixels();
  //  tint(255, 50); // opacity control for future version
  image(img_background, 0, 0, width, height);
  //  image(gui_img[4], width - 300, 450, 150, 150);
  //  img_background.resize(width, height);
    colorMode(HSB, 360, 100, 100, 1);



  segLength = width / 15;



  img_brush.resize(width/30, width/20);

  img_rake.resize(width/30, width/20);



  img_rake2.resize(width/60, width/10);

  // set button margin and spacing relative to the windowWidth

margin = width / 11;
buttonWidth = width / 17;
buttonSpacing = width / 15;

writeTextUI();



}


function draw() {

  blendMode(BLEND);
  for (var k = 0; k < tempcount; k++) {
    image(pebbleu[tempID[k]], tempX[k], tempY[k], randomScalar[k], randomScalar[k]);
  }



  //pebble1
}

function rake0(){

  bool_button1 = 0;

  button1A.style('background-color', colSelect);
  button1A.style('color', 'grey');
  button1A.style('border', '3px solid white');

  button1B.style('background-color', col);
  button1B.style('color', 'white');
  button1B.style('border', '0px solid white');

  button1C.style('background-color', col);
  button1C.style('color', 'white');
  button1C.style('border', '0px solid white');
}

function rake1() {

    bool_button1 = 1;
    button1A.style('background-color', col);
    button1A.style('color', 'white');
    button1A.style('border', '0px solid white');
    button1B.style('background-color', colSelect);
    button1B.style('color', 'grey');
    button1B.style('border', '3px solid white');
    button1C.style('background-color', col);
    button1C.style('color', 'white');
    button1C.style('border', '0px solid white');
  }

function rake2() {
  bool_button1 = 2;
  button1A.style('background-color', col);
  button1A.style('color', 'white');
  button1A.style('border', '0px solid white')
  button1B.style('background-color', col);
  button1B.style('color', 'grey');
  button1B.style('border', '0px solid white')
  button1C.style('background-color', colSelect);
  button1C.style('color', 'white');
  button1C.style('border', '3px solid white')
}



  //button1 distance recorder










function reset() {

    image(img_background, 0, 0, width, height);

    // basic random counter to determine how many pebbles will be present on the screen;
    tempcount = int(random(0, 3));



    // now a loop based on that random number, to place the pebbles on screen
    for (var k = 0; k < tempcount; k++) {
      randomScalar[k] = int(random(120, 180)); // scale
      tempID[k] = int(random(1, 7)); // which pebble iteration
      tempX[k] = int(random(0, width - randomScalar[k]));
      tempY[k] = int(random(0, height - randomScalar[k]));


      image(pebble[tempID[k]], tempX[k], tempY[k], randomScalar[k], randomScalar[k]);

    }

  }



function writeTextUI(){

  textSize(windowWidth/50);
  fill(0);
  noStroke();

  let vw = windowWidth/100; // suspect we may have issue here with IOS in terms of rotation and measuring height, etc
  let textMargin = windowWidth/100; // consolidate into above - no point having 2

  button1A = createImg('assets/gui1.png');
  button1B = createImg('assets/gui2.png');
  button1C = createImg('assets/gui3.png');
  button3 = createButton('New drawing');

  button1A.position(textMargin,windowHeight-vw*8);
  button1B.position((vw*7)+textMargin,windowHeight-vw*8);
  button1C.position((vw*14)+textMargin,windowHeight-vw*8);

  button3.position(windowWidth-(10*vw)-(textMargin*3),windowHeight-vw*4);

 col = color(0,0,0,0.1);
 colSelect = color(0,0,0,1);
colH3 = color(355,87,74);

 button1A.style('background-color', colSelect)
 button1A.style('font-size', '1.5vw');
 button1A.style('color', 'white');
 button1A.style('width', '6vw');
  button1A.style('border-radius', '0.5vw')
  button1A.style('border', '3px solid white')
 button1A.mousePressed(rake0);

 button1B.style('background-color', col)
 button1B.style('font-size', '1.5vw');
 button1B.style('color', 'grey');
 button1B.style('width', '6vw');
 button1B.style('border-radius', '0.5vw')
 button1B.mousePressed(rake1);

 button1C.style('background-color', col)
 button1C.style('font-size', '1.5vw');
 button1C.style('color', 'grey');
 button1C.style('width', '6vw');
 button1C.style('border-radius', '0.5vw')
 button1C.mousePressed(rake2);


 button3.style('background-color', colH3);
 button3.style('font-size', '2vw');
 button3.style('color', 'white');
 button3.style('border-radius', '0.25vw')
  button3.style('width', '18vw')
 button3.mousePressed(reset);



}






function mouseDragged() {

  if (bool_button1 === 3) {
    blendMode(BLEND);

    loadPixels();
    for (var y = (mouseY - 20); y < (mouseY + 20); y++) {
      for (var x = (mouseX - 20); x < (mouseX + 20); x++) {
        var index = (x + y * width) * 4;
        // Below, the reason for adding the existing pixels back on is to fake a 50%
        // opacity/alpha, which I suspect is not otherwise possible with a Pixel update
        // The opacity feels too strong, consder revising to give 2/3 weight to the old values
        pixels[index + 0] = (img_background.pixels[index + 0]);
        pixels[index + 1] = (img_background.pixels[index + 1]);
        pixels[index + 2] = (img_background.pixels[index + 2]);
        // pixels[index + 3] = 255; // uncessary to add alpha from old pixel valyue
      }
    }
    updatePixels();
  }

  if (bool_button1 === 0) {



    blendMode(OVERLAY);
    // this desperately needs to be smoothed out.

    dx = mouseX - rake3X;
    dy = mouseY - rake3Y;
    angle1 = atan2(dy, dx);
    rake3X = mouseX - (cos(angle1) * (segLength/2));
    rake3Y = mouseY - (sin(angle1) * (segLength/2));

    segment(rake3X, rake3Y, angle1, img_brush)



    // reference for brush offset at https://p5js.org/examples/interaction-follow-1.html
  }

  if (bool_button1 === 1) {

    blendMode(OVERLAY);

    dx = mouseX - rakeX;
    dy = mouseY - rakeY;
    angle1 = atan2(dy, dx);
    rakeX = mouseX - (cos(angle1) * segLength);
    rakeY = mouseY - (sin(angle1) * segLength);

    segment(rakeX, rakeY, angle1, img_rake)
  }

  if (bool_button1 === 2) {
    blendMode(OVERLAY);

    dx = mouseX - rake2X;
    dy = mouseY - rake2Y;
    angle1 = atan2(dy, dx);
    rake2X = mouseX - (cos(angle1) * segLength);
    rake2Y = mouseY - (sin(angle1) * segLength);

    segment(rake2X, rake2Y, angle1, img_rake2)
  }

  return false;
}

function segment(rakeX, rakeY, a, rake) {
  push();
  translate(rakeX, rakeY);
  rotate(a);
  image(rake, 0, -50, 0, 0);
  pop();
}


function windowResized() {

  setup();

}
