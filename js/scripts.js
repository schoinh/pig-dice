var tally = 0;

var rollDice = function() {
  tally = Math.floor(Math.random() * 6) + 1;
}

$(function() {
  $("#roll").click(function() {
    rollDice();
    alert(tally);
  })
})
