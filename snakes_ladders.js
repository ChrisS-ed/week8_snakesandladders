
var Board = function(){
  this.numberOfSquares = 64;
}

var Player = function(name){
  this.name = name;
  this.counter = "";
  this.turnOrder = 0;
  this.position = 0;
}

Player.prototype = {
  roll: function() {
    return Math.floor(Math.random() * 6) + 1  
  },
  move: function(number){
    this.position += number;
  },
  takeTurn: function(){
    var turnRoll = this.roll();
    console.log(this.name + " rolls " + turnRoll);
    this.move(turnRoll);
    console.log(this.name + "'s position is now " + this.position);
  }
}

var Game = function(board, players, counters){
  this.board = board;
  this.players = players;
  this.counters = counters;
  this.nextPlayer = 1;
}

Game.prototype = {
  addPlayer: function(player) {
    this.players.push(player);
    var counterToBeAllocated = this.counters.pop();
    player.counter = counterToBeAllocated; 
    player.turnOrder = this.players.length;
  },
  checkEnoughPlayers: function(){
    if(this.players.length < 4){
      return false;
    }
    else {
      return true
    }
  },
  checkWhoPlaysNext: function(){
    var theNextPlayer = this.players[this.nextPlayer - 1]
    return theNextPlayer.name
  }
}

// var player1 = new Player("Beth");

// player1.takeTurn();




module.exports.Board = Board;
module.exports.Player = Player;
module.exports.Game = Game;