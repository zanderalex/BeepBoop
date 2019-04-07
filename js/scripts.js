// Business logic
//var allNumbers = [0,1,2,3,4,5,6,7,8,9];
//create loop which runs until it reaches the number inputted
//add all those numbers to input number and create string
//display inputted number "resultZero"
//unless number includes a 1 = BEEP  "resultOne"
//unless number includes a 2 = BOOP  "resultTwo"
//unless number includes a 3 = I'm sorry...  "resultThree"

var mostNumbers = [0,4,5,6,7,8,9];

var isNumber = function(userInputArray){
  if (userInputArray >=0 || userInputArray <=0) {
    return false;
  }

var input = function(number) {
  if (number.includes(3)
  return #resultOne; {
  } else if (input.includes(2) console.log("Boop!"); {
  } else if (input.includes(1) console.log("Beep!"); {
  });
});



//User Interface Logic
$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = input(number);
    $("#result").text(result);
  });
});
