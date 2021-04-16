//
// Lab 19 api
// Author: Brianna Sanchez Ortega
// Date: April 16, 2021
// License: Public

//joke api - David Katz @15Dkatz
//
// Put a comment block at the top of your program
// Using jQuery, do the following:
// Add a click event to the button
// When a user clicks the button, use a jQuery AJAX call to fetch output from your API
// Put the output of the AJAX call in the output div.

$("#activate").click(function (){

// Using the core $.ajax() method
$.ajax({
    url: "https://official-joke-api.appspot.com/random_joke",
    type: "GET",
    dataType : "json",
})

  // If the request succeeds
  .done(function(data) {
      console.log(data);
      $("#output").append("<p> <b>JOKE:</b> " + data.setup);
      $("#output").append("<p> <b>PUNCHLINE</b>: " + data.punchline + "<br>");
})
// If the request fails
.fail(function( xhr, status, errorThrown ) {
    console.log(errorThrown + " Status:" + status );
})
});
