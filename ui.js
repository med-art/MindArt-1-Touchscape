

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

function writeTextUIAudio() {
  textSize(longEdge / 50);
  fill(0);
  noStroke();
  let vmax = longEdge / 100; // suspect we may have issue here with IOS in terms of rotation and measuring height, etc
  let textMargin = longEdge / 100; // consolidate into above - no point having 2
button2.position(windowWidth - (10 * vmax) - (textMargin), vmax * 1);
button2.style('background-color', colH2);
button2.style('font-size', '1.75vmax');
button2.style('color', 'black');
button2.style('border-radius', '3.5vmax')
button2.style('width', '7vmax')
button2.mousePressed(switchSound);


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

  // button2 = createButton('Full screen');
  button3 = createButton('New drawing');

  button1A.position(textMargin, windowHeight - vmax * 10);
  button1B.position((vmax * 8) + textMargin, windowHeight - vmax * 10);
  button1C.position((vmax * 16) + textMargin, windowHeight - vmax * 10);

  button3.position(windowWidth - (10 * vmax) - (textMargin * 5), windowHeight - vmax * 6);

  col = color(0, 0, 0, 0.1);
  colSelect = color(0, 0, 0, 1);
  colH2 = color(230, 20, 74);
  colH3 = color(355, 87, 74);

  button1A.style('background-color', colSelect)
  button1A.style('font-size', '1.5vmax');
  button1A.style('color', 'white');
  button1A.style('width', '7vmax');
  button1A.style('border-radius', '0.5vmax')
  button1A.style('border', '3px solid white')
  button1A.mousePressed(rake0);
  button1B.style('background-color', col)
  button1B.style('font-size', '1.5vmax');
  button1B.style('color', 'grey');
  button1B.style('width', '7vmax');
  button1B.style('border-radius', '0.5vmax')
  button1B.mousePressed(rake1);
  button1C.style('background-color', col)
  button1C.style('font-size', '1.5vmax');
  button1C.style('color', 'grey');
  button1C.style('width', '7vmax');
  button1C.style('border-radius', '0.5vmax')
  button1C.mousePressed(rake2);


  button3.style('background-color', colH3);
  button3.style('font-size', '1.75vmax');
  button3.style('color', 'white');
  button3.style('border-radius', '0.5vmax')
  button3.style('width', '12vmax')
  button3.mousePressed(resetTimeout);



}

function enterFS() {

  let fs = fullscreen();
  fullscreen(!fs);


}

function switchSound() {
  if (audio.isPlaying()) {
  audio.stop();
  button2.remove();
button2 = createImg('assets/gui5.png');

writeTextUIAudio();



} else {
audio.loop();
// button2.remove();
// button2 = createImg('assets/gui4.png');
// writeTextUIAudio();

}

return false;
}
