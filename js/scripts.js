//User Interface Logic
$(document).ready(function() {
  // get user input
  $("#submitButton").click(function() {
    var userInput = getUserInput();
    writeToAnswerAreaBasedOn(userInput);
  });
});



// Business logic
//create loop which runs until it reaches the number inputted
//add all those numbers to input number and create string
//display inputted number "resultZero"
//unless number includes a 1 = BEEP  "resultOne"
//unless number includes a 2 = BOOP  "resultTwo"
//unless number includes a 3 = I'm sorry...  "resultThree"

var getUserInput = function() {
  return $("#userInput").val().toString();
};

var writeToAnswerAreaBasedOn = function(input) {
  // write results to answer area
  $("#answerArea").html(generateHtmlBasedOn(input));
};

var generateHtmlBasedOn = function(numString) {
  // deal with the case where the user didn't enter anything
  if (numString == "") {
    // return an error message with instructions
    return [
      "<h1>I seem to have received nothing!</h1>",
      "<p>Please enter a number</p>"
    ];
  }

  var listOfHtmlElements = [];

  for (var currNum = 0; currNum <= numString; currNum++) {
    var htmlElt = "<p class=\"bbLine\">"
      .concat(getBeepBoopSorryOrNumFrom(currNum))
      .concat("</p>");
    listOfHtmlElements.push(htmlElt);
  }

  return listOfHtmlElements;
};

var getBeepBoopSorryOrNumFrom = function(numString) {
  var currNum = "" + numString;

  // deal with any 3 in the numString
  if (currNum.indexOf("3") != -1) {
    return "I'm sorry Dave, I can't do that.";
  }

  // deal with any 2
  if (currNum.indexOf("2") != -1) {
    return "Boop!";
  }
  // deal with any 1
  if (currNum.indexOf("1") != -1) {
    return "Beep!";
  }
  // otherwise just
  return numString;
};
