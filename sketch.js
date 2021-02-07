var gameState = 0;
var playerCount = 0;
var game, form, player;
var database;
var allPlayers;

var car1, car2, car1Image, car2Image;
var carsArray;

var backImg;

function preload(){
    car1Image = loadImage("IMAGES/car4.png")
    car2Image = loadImage("IMAGES/car2.png")

    backImg = loadImage("IMAGES/track.jpg")
}

function setup(){
  createCanvas(displayWidth, displayHeight)
  database = firebase.database();

  game = new Game()
  game.getGameState();
  game.start();

}

function draw(){

  if(playerCount === 2){
    game.updateGameState(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
}