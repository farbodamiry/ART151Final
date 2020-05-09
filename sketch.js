let intro;
let begin;
let large;
let swimming;
let backg;
let tfont;
let state = 0;
let nextState = 0;
let counter = 0;
let typed = "";
let story = "";
let mhealth =100;
let dhealth = 100;
let hasDied = false;
let hasKilled = false;
let hasGreen = false;
let imagex;
let healthx;
let mhealthx;


function preload() {

  intro = loadImage('Merauder.gif'); //0
  begin = loadImage('MerauderShield.png'); // 1
  attack = loadImage('MerauderGreen.jpg'); // 2
  udead = loadImage('Marauder2.jpg'); // 3
  hisdead = loadImage('MerauderDead.jpg'); // 4
  backg = loadImage('Demon.jpg');
  tfont = loadFont('amazdoom/AmazDooMLeft.ttf')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(tfont);
  textSize(57);
  fill(255,165,0);

}

function draw() {
  background(backg);
  imagex = 670 + random(3,-3);
  healthx = 1400 + random(5,-5)
  mhealthx = 0 + random(5,-5);
  text("Merauder Demon V.S DoomGuy", 680, 100, 500, 500);
  text("COMMANDS = Intro, Begin, Shoot, Dash", 2, 20, 500, 200);
  if(mhealth == 100){
  text("Merauder Health: 100" , 0, 800, 500,200);
  }
  if(dhealth == 100){
    text("DoomGuy Health: 100" , 1400, 800, 500,200);
  }
  if(mhealth == 75){
  text("Merauder Health: 75" , 0, 800, 500,200);
  }
  if(mhealth == 50){
  text("Merauder Health: 50" , 0, 800, 500,200);
  }
  if(mhealth == 25){
  text("Merauder Health: 25" , mhealthx, 800, 500,200);
  }
  if(mhealth == 0){
  text("Merauder Health: 0" , mhealthx, 800, 500,200);
  nextState = 4;
  }
  if(dhealth == 75){
    text("DoomGuy Health: 75" , 1400, 800, 500,200);
  }
  if(dhealth == 50){
    text("DoomGuy Health: 50" , 1400, 800, 500,200);
  }
  if(dhealth == 25){
    text("DoomGuy Health: 25" , healthx, 800, 500,200);
  }
  if(dhealth == 0){
    text("DoomGuy Health: 0" , healthx, 800, 500,200);
    nextState = 3;
  }
  if (state == nextState) {
    if (state == 0) {
      image(intro, imagex, 300);
    } else if (state == 1) {
      image(begin, 670, 300);
    } else if (state == 2) {
      image(attack,imagex , 300);
    } else if (state == 3) {
      image(udead, 670, 300);
    }
      else if(state == 4){
      image(hisdead,670,300);
    }
  } else {
    counter++;
    if (counter == 30) {
      state = nextState;
      counter = 0;
    }

    let a = map(counter, 0, 30, 0, 255);
    tint(255, a);
    if (nextState == 0) {
      image(intro, 670, 300);
    } else if (nextState == 1) {
      image(begin, 670, 300);
    } else if (nextState == 2) {
      image(attack, 670, 300);
    } else if (nextState == 3) {
      image(udead, 670, 300);
    }
      else if (nextState == 4) {
      image(hisdead, 670, 300);
    }
    tint(255, 255 - a);
    if (state == 0) {
      image(intro, 670, 300);
    } else if (state == 1) {
      image(begin, 670, 300);
    } else if (state == 2) {
      image(attack, 670, 300);
    } else if (state == 3) {
      image(udead, 670, 300);
    }
    else if (nextState == 4) {
      image(hisdead, 670, 300);
    }
  }

  text(typed, -5, 840, width, 300);
  textAlign(CENTER, BASELINE);
  text(story, imagex, 600, 500, 200);
}

function keyPressed() {
  if (keyCode == BACKSPACE) {
    typed = '';
  }
}

function keyTyped() {
  if (key == '0') {
    nextState = 0;
  } else if (key == '1') {
    nextState = 1;
  } else if (key == '2') {
    nextState = 2;
  } else if (key == '3') {
    nextState = 3;
  } else if (key == '4') {
    nextState = 4;

  } else if (keyCode == RETURN) {


    if(typed == 'intro'){
      nextState = 0;
      hasDied = false;
      hasKilled = false;
      hasGreen = false;
      dhealth = 100;
      mhealth = 100;
      typed = '';
      story = "Shoot the Merdauder When His Eyes Are Green";
    }
    else if(typed == 'begin'){
      nextState = 1;
      typed = '';
      story = "Merauder Has Put Up His Shield.";
    }
    else if(typed == 'shoot' && nextState == 1){
      if( dhealth != 0){
      typed = '';
      nextState = 1;
      story = "Merauder Has Put Up His Shield.";
      dhealth = dhealth - 25;
       }
       if(dhealth == 0){
         nextState = 4;
         typed = '';
         story = "The Merauder Has Killed You, Type 'intro' to Restart";
       }
    }
    else if(typed == 'shoot' && nextState == 2){
      if(mhealth != 0){
      hasKilled == false;
      typed ='';
      nextState = 1;
      story = "Merauder Has Put Up His Shield.";
      mhealth = mhealth - 25;
      }
      if(mhealth == 0){
        nextState = 3;
        typed = '';
        story = "You have Killed The Merauder";
      }
    }
    else if(typed == 'dash' && nextState == 1){
      nextState = 2;
      typed = '';
      story = 'The Merdauder is Attacking'
    }
    else if(typed == 'dash' && nextState == 2){
      nextState = 1;
      typed = '';
      story = "Merauder Has Put Up His Shield.";
    }

  } else {
    typed += key;
  }
}
