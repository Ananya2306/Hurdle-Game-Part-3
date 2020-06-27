var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var hurdle1, hurdle2;
var form, player, game;

var cars, car1, car2, car3;
var c1Img,c2Img,c3Img;
var track;

function preload(){
  track = loadImage("Image/tracks.jpg");
  c1Img = loadImage("Image/car (1).png");
  c2Img = loadImage("Image/car (2).png");
  c3Img = loadImage("Image/car (3).png");
 
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
