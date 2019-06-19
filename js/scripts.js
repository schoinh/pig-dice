// Business Logic
function Player(name, current, total) {
  this.name = name;
  this.current = current;
  this.total = total;
}
Player.prototype.rollDice = function() {
  var rollNumber;
  rollNumber = Math.floor(Math.random() * 6) + 1;   // Returns a random number between 1 and 6
  alert("You rolled a" + rollNumber);
  if (rollNumber !== 1) {
    this.current += rollNumber;    // Keeps a tally of current player's rolls
  } else {
    this.current = 0;    // Clears tally of rolls when 1 is rolled
    this.tallyUp();   // Rolling a one results in the turn passing to the next player
    switchPlayer();
  }
  alert("Your current tally is" + this.current);
  if (this.current + this.total >= 20) {    // Terminates game at 20
    alert(this.name + " is the winner!")
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

var player1 = new Player("Player 1", 0, 0);
var player2 = new Player("Player 2", 0, 0);

var currentPlayer = player1;
// User Interface Logic
$(function() {
  $("#roll").click(function() {
    currentPlayer.rollDice();
  });

  $("#pass").click(function() {   // Switches to other user upon passing turn
    // debugger;
    currentPlayer.tallyUp();
    alert("Your total score is" + currentPlayer.total);
    switchPlayer();
  })
})
