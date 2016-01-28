
var Board = function(){
  this.numberOfSquares = 64;
}

var Player = function(name){
  this.name = name;
  this.counter = "";
  this.turnOrder = 0;
}

Player.prototype = {
  roll: function() {
    return Math.floor(Math.random() * 6) + 1  
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



module.exports.Board = Board;
module.exports.Player = Player;
module.exports.Game = Game;