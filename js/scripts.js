//Back-End, Business Logic Section






//Front-End, User Interface Section
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var variablespot = pingponger(input);
    var output = $("#output").text("<li>" + "###" + "</li>")
  })
})
