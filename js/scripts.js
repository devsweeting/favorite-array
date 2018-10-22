$(document).ready(function() {
  $("#favorites").submit(function(event) {
    var food = $("#food").val();
    var movie = $("#movie").val();
    var game = $("#game").val();
    var team = $("#team").val();
    var userInput = [food, movie, game, team];

    var newArray = [userInput[1], userInput[0], userInput[2]];
    console.log(userInput, newArray);
    console.log(newArray);
    event.preventDefault();
  });
});
