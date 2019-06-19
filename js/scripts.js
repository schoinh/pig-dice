function Player(current, total) {
  this.current = current;
  this.total = total;
}

var rollDice = function() {
  var rollNumber;
  rollNumber = Math.floor(Math.random() * 6) + 1;
  alert("You rolled a" + rollNumber);
  if (rollNumber !== 1) {
    player1.current += rollNumber;
  } else {
    player1.current = 0;
    // insert something to switch to other player
  }
}

var passDice = function () {
  player1.total += player1.current;
  player1.current = 0;
}

var player1 = new Player(0, 0);
var player2 = new Player(0, 0);

$(function() {
  $("#roll").click(function() {
    rollDice();
    alert("Your current tally is" + player1.current);
  });

  $("#pass").click(function() {
    passDice();
    alert("Your total score is" + player1.total);
  })
})
