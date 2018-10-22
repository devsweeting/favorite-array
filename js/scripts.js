$(document).ready(function() {
  $("#favorites").submit(function(event) {
    var food = $("#food").val();
    var movie = $("#movie").val();
    var game = $("#game").val();
    var team = $("#team").val();
    var userInput = [food, movie, game, team];

    var newArray = [userInput[1], userInput[0], userInput[2]];

    $("#favorite-list").append("<li>" + newArray[0] + "</li>");
    $("#favorite-list").append("<li>" + newArray[1] + "</li>");
    $("#favorite-list").append("<li>" + newArray[2] + "</li>");
    event.preventDefault();
  });

  $("#iceCream").click(function(){
    var iceCreams = ["vanilla", "chocolate", "rocky road", "cookie dough", "moose tracks", "neopolitan"];

    iceCreams.forEach(function(iceCream) {
      $("#loopingList").append("<li>" + iceCream.toUpperCase() + "</li>");
    });
  });
});
