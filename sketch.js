let img_background, img_brush, img_rake; // all images
let bool_button1 = 0; // bool_button1ean toggle
let gui_img = [];
let pebble = [];
let pebbleu = [];
let tempX = [];
let tempY = [];
let tempcount = 0;
let randomScalar = [];
let tempID = [];
let colourBool = 0;
// declare all brush variables
let rakeX = 0,
  rakeY = 0,
  rake2X = 0,
  rake2Y = 0,
  rake3X = 0,
  rake3Y = 0,
  angle1, segLength;
//button spacing
let longEdge;

function preload() {
  //load all brush assets and background
  img_brush = loadImage('assets/brush.png');
  img_rake = loadImage('assets/rake1.png');
  img_rake2 = loadImage('assets/rake2.png');
  img_background = loadImage('assets/sand_01.jpg')
  //load all GUI assets
  for (let i = 1; i < 3; i++) {
    gui_img[i] = loadImage('assets/gui' + i + '.png');
  }
  //Load all pebble assets
  for (let i = 1; i < 8; i++) {
    pebble[i] = loadImage('assets/wpebble' + i + '.png');
  }
  //Load all pebble shadow assets
  for (let i = 1; i < 8; i++) {
    pebbleu[i] = loadImage('assets/wpebbleu' + i + '.png');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1); // effectively ignores retina displays
  img_background.loadPixels();
  image(img_background, 0, 0, width, height);
  colorMode(HSB, 360, 100, 100, 1);
  segLength = width / 15;

  findLongEdge();

  // set brush sizes relative to width, must be below findLongEdge
  img_brush.resize(longEdge / 30, longEdge / 30);
  img_rake.resize(longEdge / 30, longEdge / 30);
  img_rake2.resize(longEdge / 60, longEdge / 10);

  writeTextUI();
}

function findLongEdge(){
  if (width > height){
    longEdge = width;
  }

  else{
    longEdge = height;
  }

}

function draw() {
  blendMode(BLEND);
    // Always draw pebbles over the top of each layer
  for (let k = 0; k < tempcount; k++) {
    image(pebbleu[tempID[k]], tempX[k], tempY[k], randomScalar[k], randomScalar[k]);
  }
}


// need to optimize below into set styles
function rake0() {
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


function writeTextUI() {
  textSize(longEdge / 50);
  fill(0);
  noStroke();

  let vmax = longEdge / 100; // suspect we may have issue here with IOS in terms of rotation and measuring height, etc
  let textMargin = longEdge / 100; // consolidate into above - no point having 2

  button1A = createImg('assets/gui1.png');
  button1B = createImg('assets/gui2.png');
  button1C = createImg('assets/gui3.png');
  button3 = createButton('New drawing');

  button1A.position(textMargin, windowHeight - vmax * 8);
  button1B.position((vmax * 7) + textMargin, windowHeight - vmax * 8);
  button1C.position((vmax * 14) + textMargin, windowHeight - vmax * 8);

  button3.position(windowWidth - (10 * vmax) - (textMargin * 3), windowHeight - vmax * 4);

  col = color(0, 0, 0, 0.1);
  colSelect = color(0, 0, 0, 1);
  colH3 = color(355, 87, 74);

  button1A.style('background-color', colSelect)
  button1A.style('font-size', '1.5vmax');
  button1A.style('color', 'white');
  button1A.style('width', '6vmax');
  button1A.style('border-radius', '0.5vmax')
  button1A.style('border', '3px solid white')
  button1A.mousePressed(rake0);
  button1B.style('background-color', col)
  button1B.style('font-size', '1.5vmax');
  button1B.style('color', 'grey');
  button1B.style('width', '6vmax');
  button1B.style('border-radius', '0.5vmax')
  button1B.mousePressed(rake1);
  button1C.style('background-color', col)
  button1C.style('font-size', '1.5vmax');
  button1C.style('color', 'grey');
  button1C.style('width', '6vmax');
  button1C.style('border-radius', '0.5vmax')
  button1C.mousePressed(rake2);
  button3.style('background-color', colH3);
  button3.style('font-size', '2vmax');
  button3.style('color', 'white');
  button3.style('border-radius', '0.25vmax')
  button3.style('width', '18vmax')
  button3.mousePressed(reset);
}


function mouseDragged() {

  if (bool_button1 === 3) {
    blendMode(BLEND);

    loadPixels();
    for (let y = (mouseY - 20); y < (mouseY + 20); y++) {
      for (let x = (mouseX - 20); x < (mouseX + 20); x++) {
        let index = (x + y * width) * 4;
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

    dx = mouseX - rake3X;
    dy = mouseY - rake3Y;
    angle1 = atan2(dy, dx);
    rake3X = mouseX - (cos(angle1) * (segLength / 2));
    rake3Y = mouseY - (sin(angle1) * (segLength / 2));

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
  image(rake, 0, 0, 0, 0);
  pop();
}

function reset() {

  image(img_background, 0, 0, width, height);

  // basic random counter to determine how many pebbles will be present on the screen;
  tempcount = int(random(0, 3));

  // now a loop based on that random number, to place the pebbles on screen
  for (let k = 0; k < tempcount; k++) {
    randomScalar[k] = int(random(120, 180)); // scale
    tempID[k] = int(random(1, 7)); // which pebble iteration
    tempX[k] = int(random(0, width - randomScalar[k]));
    tempY[k] = int(random(0, height - randomScalar[k]));
    image(pebble[tempID[k]], tempX[k], tempY[k], randomScalar[k], randomScalar[k]);
  }
}

function windowResized() {

resizeCanvas(windowWidth, windowHeight);
setup();

}
