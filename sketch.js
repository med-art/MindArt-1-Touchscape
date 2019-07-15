function preload() {
 mySound = loadSound('assets/audio3.wav');
}

function setup() {
  mySound.setVolume(0.1);
  mySound.play();
}

function mousePressed(){
    mySound.play();
}
