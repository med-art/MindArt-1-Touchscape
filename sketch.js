function preload() {
 mySound = loadSound('assets/audio.mp3');
}

function setup() {
  mySound.setVolume(0.1);
  mySound.play();
}
