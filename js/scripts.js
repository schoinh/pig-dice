function Player(current, total) {
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
    passDice();   // Rolling a one results in the turn passing to the next player
  }
  alert("Your current tally is" + this.current);
}

Player.prototype.passDice = function () {
  this.total += this.current;   // Adds current tally to total score when "pass" is clicked
  this.current = 0;
}


var player1 = new Player(0, 0);
var player2 = new Player(0, 0);

$(function() {
  $("#roll").click(function() {
    player1.rollDice();
  });

  $("#pass").click(function() {   // Switches to other user upon passing turn
    player2.passDice();
    alert("Your total score is" + player1.total);
  })
})
