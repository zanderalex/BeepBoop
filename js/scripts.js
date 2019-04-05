// Business logic
var allNumbers = [0,1,2,3,4,5,6,7,8,9];
var mostNumbers = [0,4,5,6,7,8,9];
var specialOne = "1"
var specialTwo = "2"
var specialThree = "3"
var numberInput = function(number) {
  if ((number === 3)
  return ("I'm sorry, Dave. I'm afraid I can't do that."); {
  else if (numberInput === 2) console.log("Boop!"); {
  else if (numberInput === 1) console.log("Beep!"); {
  });
});


$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = numberInput(number);
    $("#result").text(result);
  });
});
