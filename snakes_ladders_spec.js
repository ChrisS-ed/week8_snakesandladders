// 1. Create board object: has 64 squares, ladder positions (start & end squares), snake positions (start and end squares)

// 2. Create player object: name, counter(colour), score, position, turn_order
// 3. Create game object: board, list of players, list of counters
// 4. Initiate game: invite players to join, check if enough players to start (min 4), start game
// 5. Control turns: check whose turn it is, player rolls die (random 1-6), move player (check if within 6 spaces from end), check on player's new position (is is snake, ladder, final square), check for win
// 6. End game: give points to winner, end game, start new game?

var Board = require("./snakes_ladders.js").Board;
var Player = require("./snakes_ladders.js").Player;
var Game = require("./snakes_ladders.js").Game;

var assert =  require("assert");

describe('Board', function(){
  // 1. Create board object: has 64 squares
  it("should have 64 squares", function(){
    var myBoard = new Board();
    assert.equal(64, myBoard.numberOfSquares);
  })
})

describe('Player', function(){
  // 2. Create player object: name, counter(colour), score, position, turn_order
  it("should have name, counter(colour), score, position, turn_order", function(){
    var player1 = new Player("Valerie");
    assert.equal("Valerie", player1.name);
  })
})

describe('Game', function(){
  // 3. Create game object: board, list of players, list of counters
  it("should have board", function(){
    var myBoard = new Board();
    var myGame = new Game(myBoard, [], ["red", "green", "blue", "yellow"]);
    assert.equal(myGame.board, myBoard);
  });

  // 3. Create game object: board, list of players
  it("should have list of players", function(){
    var myBoard = new Board();
    var myGame = new Game(myBoard, [], ["red", "green", "blue", "yellow"]);
    assert.deepEqual(myGame.players, []);
  });

  // 3. Create game object: list of counters
  it("should have list of counters", function(){
    var myBoard = new Board();
    var myGame = new Game(myBoard, [], ["red", "green", "blue", "yellow"]);
    assert.deepEqual(myGame.counters, ["red", "green", "blue", "yellow"]);
  });

  it('should be able to add players to the game player list', function(){
    var myBoard = new Board();
    var myGame = new Game(myBoard, [], ["red", "green", "blue", "yellow"]);
    var player1 = new Player("Valerie");
    myGame.addPlayer(player1);
    assert.deepEqual(myGame.players, [player1]);
  }); 

  it("should check if there are enough players to start the game", function() {
    var myBoard = new Board();
    var myGame = new Game(myBoard, [], ["red", "green", "blue", "yellow"]);
    var player1 = new Player("Valerie");
    myGame.addPlayer(player1);
    myGame.checkEnoughPlayers();
    assert.deepEqual(myGame.checkEnoughPlayers(), false);
    var player2 = new Player("Chris");
    var player3 = new Player("Stuart");
    var player4 = new Player("Nick");
    myGame.addPlayer(player2);
    myGame.addPlayer(player3);
    myGame.addPlayer(player4);
    myGame.checkEnoughPlayers();
    assert.deepEqual(myGame.checkEnoughPlayers(), true);
  });

})

