
var Board = function(){
  this.numberOfSquares = 64;
}

var Player = function(name){
  this.name = name;
  this.counter = "";
  this.turnOrder = 0;
  this.position = 0;
  this.points = 0;
}

Player.prototype = {
  roll: function() {
    return Math.floor(Math.random() * 6) + 1  
  },
  move: function(number){
    if (this.position + number <= 64) {
    this.position += number;
    }
  },
  checkForWin: function() {
    if (this.position === 64){
        this.points += 10;
        return true;
      }
    else
      {return false};
  },
  takeTurn: function(){
    var turnRoll = this.roll();
    // console.log(this.name + " rolls " + turnRoll);
    this.move(turnRoll);
    console.log(this.name + "'s position is now " + this.position);
    return this.checkForWin();
 
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
    return theNextPlayer;
  },
  gameTurn: function(){
    var currentPlayer = this.checkWhoPlaysNext();
    var won = currentPlayer.takeTurn();
    if(won){
      console.log("************" + currentPlayer.name + " has won! Game will be reset. *************")
      this.reset();
    }
    else if (currentPlayer.turnOrder < this.players.length) {
      this.nextPlayer += 1;
    }
    else {
      this.nextPlayer = 1;
    }
  },
  reset: function(){
    for(player of this.players){
      player.position = 0;
    }
  }

}

var myBoard = new Board();
var myGame = new Game(myBoard, [], ["red", "green", "blue", "yellow"]);
var player1 = new Player("Valerie");
var player2 = new Player("Chris");
var player3 = new Player("Stuart");
var player4 = new Player("Nick");
myGame.addPlayer(player1);
myGame.addPlayer(player2);
myGame.addPlayer(player3);
myGame.addPlayer(player4);
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();
myGame.gameTurn();





module.exports.Board = Board;
module.exports.Player = Player;
module.exports.Game = Game;