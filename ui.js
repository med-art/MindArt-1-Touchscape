let vMax, vMin, vW;
let button1, button2, button3, button4, resetButton, saveButton, fsButton, selector;
let fsBool = 0;



function calcDimensions() {
  vW = width / 100;

  if (width > height) {
    vMax = width / 100;
    vMin = height / 100;
  } else {
    vMax = height / 100;
    vMin = width / 100;
  }
}





function writeTextUI() {

  // make these obsolete

    col = color(0, 0, 0, 0.1);
    colSelect = color(0, 0, 0, 1);
    colH2 = color(230, 20, 74);
    colH3 = color(355, 87, 74);

  textSize(longEdge / 50);
  fill(0);
  noStroke();



  button1 = createImg('assets/icon1-0.png');
  button1.style('width', '15vMax');
  button1.mousePressed(rake1);
  button1.position(0, windowHeight - vMax * 15);

  button2 = createImg('assets/icon2-0.png');
  button2.style('width', '15vMax');
  button2.mousePressed(rake2);
  button2.position(vMax*13, windowHeight - vMax * 15);

  button3 = createImg('assets/icon3-0.png');
  button3.style('width', '15vMax');
  button3.mousePressed(rake3);
  button3.position(vMax*26, windowHeight - vMax * 15);

  button4 = createImg('assets/icon4-0.png');
  button4.style('width', '15vMax');
  button4.mousePressed(rake4);
  button4.position(vMax*39, windowHeight - vMax * 15);

  selector = createImg('assets/selector.png');
  selector.style('width', '15vMax');
  selector.position(vMax*13, windowHeight - vMax * 15);

  // button2 = createButton('Full screen');
  resetButton = createButton('New');
    resetButton.position(windowWidth - (10 * vMax) - (vMax * 5), windowHeight - vMax * 6);


  saveButton = createButton("Save")
  saveButton.class("select");
  saveButton.style('font-size', '2.6vmax');
  saveButton.style('height', '4.5vmax');
  saveButton.position(width-(15 * vMax), height - (12.5 * vMax));
  saveButton.mousePressed(saveImg);

  resetButton.class("select");
  resetButton.style('font-size', '2.6vmax');
  resetButton.style('height', '4.5vmax');
  resetButton.position(width-(15 * vMax), height - (6.5 * vMax));
  resetButton.mousePressed(resetTimeout);


  fsButton = createImg('assets/enterFS.png');
  fsButton.style('height', '4.5vMax');
  fsButton.position(width-(7.5 * vMax), 1.5 * vMax);
  fsButton.mousePressed(fs);

}

function switchSound() {
  if (audio.isPlaying()) {
  audio.stop();




} else {
audio.loop();

}

return false; // is this needed
}

function fs(){


 if (!fsBool){
   fullscreen(1);
   fsBool = 1;
 }

 else{

   fullscreen(0);
   fsBool = 0;

 }



 // icon switcher
}


function removeAll(){

}


function rake1() {
  //removeAll();
  bool_button1 = 3;
  selector.position(0, windowHeight - vMax * 15);


}

// need to optimize below into set styles
function rake2() {
  //removeAll();
  bool_button1 = 0;
  selector.position(vMax*13, windowHeight - vMax * 15);


}


function rake3() {
  bool_button1 = 1;
  selector.position(vMax*26, windowHeight - vMax * 15);
}


function rake4() {
  bool_button1 = 2;
  selector.position(vMax*39, windowHeight - vMax * 15);
}


function saveImg() {




    save('touchscape' + month() + day() + hour() + second() + '.jpg');
}
