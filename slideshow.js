let introText = ["Look", "Touch", "Listen"];
let appCol = "#469ede"; // 70, 158, 222

let slide = 0;
let delayTime = 8000;
let introState = 0;
let noiseScale=2;


function slideShow() {

  if (slide === 0){
    background(246, 84, 96);
    introLayer.background(70, 158, 222, 255);
  }

  if (slide === introText.length) {
    textLayer.clear();
    introState = 3;
    writeTextUI();
    //restart();
    counter = 0;
  }

  else if (slide < introText.length) {

    textLayer.clear();
    textLayer.fill(255, 5);
    textLayer.textSize(vMax*8);
    textLayer.textAlign(CENTER, CENTER);
    textLayer.rectMode(CENTER);
    textLayer.text(introText[slide], width/2, (height/6)*(slide+2));


      slide++;
      console.log(slide);
      setTimeout(slideShow, delayTime);


  }
}
