let img_background, img_brush, img_rake, bLayer, pLayer; // all images
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

let audio;

function preload() {
  //load all brush assets and background
  img_brush = loadImage('assets/brushA.png');
  img_rake = loadImage('assets/rake1a.png');
  img_rake2 = loadImage('assets/rake2b.png');
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


    audio = loadSound('assets/audio3.mp3');


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bLayer = createGraphics(windowWidth, windowHeight);
  pLayer = createGraphics(windowWidth, windowHeight);
  pixelDensity(1); // effectively ignores retina displays

  colorMode(HSB, 360, 100, 100, 1.0);
  sizeWindow();

}

function sizeWindow() {
  resizeCanvas(windowWidth, windowHeight);
  image(img_background, 0, 0, width, height);

  var newbLayer = createGraphics(windowWidth, windowHeight);
  newbLayer.image(bLayer, 0, 0, windowWidth, windowHeight);
  bLayer = newbLayer;

  var newpLayer = createGraphics(windowWidth, windowHeight);
  newpLayer.image(pLayer, 0, 0, windowWidth, windowHeight);
  pLayer = newpLayer;



  segLength = width / 15;
  findLongEdge();
  // set brush sizes relative to width, must be below findLongEdge
  img_brush.resize(longEdge / 35, longEdge / 20);
  img_rake.resize(longEdge / 40, longEdge / 10);
  img_rake2.resize(longEdge / 30, longEdge / 9);
    button2 = createImg('assets/gui5.png'); // really need to make this better by adding another function.
  writeTextUI();
  writeTextUIAudio();
  bLayer.tint(255, 190);
}

function findLongEdge() {
  if (width > height) {
    longEdge = width;
  } else {
    longEdge = height;
  }
}

function draw() {

  imageMode(CORNER);

  blendMode(BLEND);

  image(img_background, 0, 0, width, height);


  //   // Always draw pebbles over the top of each layer
  // for (let k = 0; k < tempcount; k++) {
  //   pLayer.image(pebbleu[tempID[k]], tempX[k], tempY[k], randomScalar[k], randomScalar[k]);
  // }

  blendMode(OVERLAY);
  image(bLayer, 0, 0, windowWidth, windowHeight);

  blendMode(BLEND);
  image(pLayer, 0, 0, windowWidth, windowHeight);

}

function touchMoved() {





  bLayer.blendMode(BLEND);


  if (bool_button1 === 0) {

    ;

    dx = winMouseX - rake3X;
    dy = winMouseY - rake3Y;
    angle1 = atan2(dy, dx);
    rake3X = winMouseX - (cos(angle1) * (segLength / 2));
    rake3Y = winMouseY - (sin(angle1) * (segLength / 2));

    segment(rake3X, rake3Y, angle1, img_brush)
    // reference for brush offset at https://p5js.org/examples/interaction-follow-1.html
  }

  if (bool_button1 === 1) {



    dx = winMouseX - rakeX;
    dy = winMouseY - rakeY;
    angle1 = atan2(dy, dx);
    rakeX = winMouseX - (cos(angle1) * segLength);
    rakeY = winMouseY - (sin(angle1) * segLength);

    segment(rakeX, rakeY, angle1, img_rake)
  }

  if (bool_button1 === 2) {


    dx = winMouseX - rake2X;
    dy = winMouseY - rake2Y;
    angle1 = atan2(dy, dx);
    rake2X = winMouseX - (cos(angle1) * segLength);
    rake2Y = winMouseY - (sin(angle1) * segLength);

    segment(rake2X, rake2Y, angle1, img_rake2)
  }

  return false;
}

function segment(rakeX, rakeY, a, rake) {
  bLayer.imageMode(CENTER);
  bLayer.push();
  bLayer.translate(rakeX, rakeY);
  bLayer.rotate(a);
  bLayer.image(rake, 0, 0, 0, 0);
  bLayer.pop();
}

function resetTimeout() {
  setTimeout(reset, 50);
}

function reset() {

  blendMode(REPLACE);

  image(img_background, 0, 0, width, height);

  bLayer.clear();
  pLayer.clear();

  // basic random counter to determine how many pebbles will be present on the screen;
  tempcount = int(random(0, 3));

  // now a loop based on that random number, to place the pebbles on screen
  for (let k = 0; k < tempcount; k++) {
    randomScalar[k] = int(random(120, 180)); // scale
    tempID[k] = int(random(1, 7)); // which pebble iteration
    tempX[k] = int(random(0, width - randomScalar[k]));
    tempY[k] = int(random(0, height - randomScalar[k]));
    pLayer.image(pebble[tempID[k]], tempX[k], tempY[k], randomScalar[k], randomScalar[k]);
  }
}

function windowResized() {
  removeElements();

  sizeWindow();

  // resizeCanvas(windowWidth, windowHeight);
  //  bLayer.width = windowWidth;
  //  bLayer.height = windowHeight;
  //  pLayer.width = windowWidth;
  //  pLayer.height = windowHeight;
  //  findLongEdge();
  //  writeTextUI();
  //image(img_background, 0, 0, width, height);


}
