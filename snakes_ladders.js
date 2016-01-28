
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



module.exports.Board = Board;
module.exports.Player = Player;
module.exports.Game = Game;