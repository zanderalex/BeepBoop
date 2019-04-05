// Business logic
function isNumber(character) {

}



$(document).ready(function() {
  $("form#beepBoop").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#number").val());
    var result = isNumber(number);
    $("#result").text(result);
  });
});
