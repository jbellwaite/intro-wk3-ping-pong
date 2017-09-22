//Back-End, Business Logic Section
var emptyArray = [""];

function pingPonger(input) {
  var inputNumber = parseInt(input)
  for (var i = inputNumber; i > 0; i = i - 1) {
    if (i % 3 === 0 && i % 15 != 0) {
      emptyArray.push("<li>" + "ping!" + "</li>")
    }else if (i % 5 === 0 && i % 15 != 0) {
      emptyArray.push("<li>" + "pong!" + "</li>")
    }else if (i % 15 === 0) {
      emptyArray.push("<li>" + "ping-pong!" + "</li>")
    }else {
    emptyArray.push("<li>" + i + "</li>");
    }
  }
}

//Front-End, User Interface Section
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var variableSpot = pingPonger(input);
    $("ul#output").append(emptyArray.reverse());
    $("ul#output").children("li").first().submit(function( {
      $(this).remove();
    }));
  });
});
