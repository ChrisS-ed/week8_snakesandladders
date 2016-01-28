
var Board = function(){
  this.numberOfSquares = 64;
}

var Player = function(name){
  this.name = name;
}

var Game = function(board, players, counters){
  this.board = board;
  this.players = players;
  this.counters = counters;
}

Game.prototype = {
  addPlayer: function(player) {
    this.players.push(player);
  },
  checkEnoughPlayers: function(){
    if(this.players.length < 4){
      return false;
    }
    else {
      return true
    }
  }
}



module.exports.Board = Board;
module.exports.Player = Player;
module.exports.Game = Game;