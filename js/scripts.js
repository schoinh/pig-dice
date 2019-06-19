// Business Logic
var rollNumber;
var winner = false;

function Player(name, current, total) {
  this.name = name;
  this.current = current;
  this.total = total;
}

Player.prototype.rollDice = function() {
  rollNumber = Math.floor(Math.random() * 6) + 1;   // Returns a random number between 1 and 6
  if (rollNumber !== 1) {
    this.current += rollNumber;    // Keeps a tally of current player's rolls
  } else {
    this.current = 0;    // Clears tally of rolls when 1 is rolled
    this.tallyUp();   // Rolling a one results in the turn passing to the next player
    totalOutput();
    switchPlayer();
    highlightPlayer();
  }
  if (this.current + this.total >= 100) {    // Terminates game at 100
    this.tallyUp();
    totalOutput();
    winner = true;
  }
}

Player.prototype.tallyUp = function () {
  this.total += this.current;   // Adds current tally to total score when "pass" is clicked
  this.current = 0;
}
var switchPlayer = function(){    // Switches to other user upon passing turn
  if (currentPlayer === player1){
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
}

// User Interface Logic ---------------------

var highlightPlayer = function() {    // Highlights the current player
  if (currentPlayer === player1) {
    $(".player2").removeClass("highlight");
    $(".player1").addClass("highlight");
  } else {
    $(".player1").removeClass("highlight");
    $(".player2").addClass("highlight");
  }
}

var totalOutput = function() {      // Display the cumulative total for each player
  if (currentPlayer === player1) {
    $("#player1-total").text(currentPlayer.total);
  } else {
    $("#player2-total").text(currentPlayer.total);
  }
}

var player1 = new Player("Player 1", 0, 0);
var player2 = new Player("Player 2", 0, 0);

var currentPlayer = player1;

$(function() {

highlightPlayer();

  $("#roll").click(function() {
    currentPlayer.rollDice();
    $(".roll-result").text("You rolled a " + rollNumber);
    $("#turn-tally").text(currentPlayer.current);   //shows current player's temp tally
    if (winner) {
      $("#winner").text(currentPlayer.name + " is the winner!");
    }
  });

  $("#pass").click(function() {   // Switches to other user upon passing turn
    currentPlayer.tallyUp();
    totalOutput();
    switchPlayer();
    $("#turn-tally").text(currentPlayer.current);   // resets and displays current player's temp tally
    highlightPlayer();
    $(".roll-result").empty();   // displays nothing when current player has yet to roll
  })
})
