//
// Lab 17 jquery thinggs
// Author: Brianna Sanchez Ortega
// Date: April 7, 2021
// License: Public


//Add a click event to each button
// In the event code, toggle a new class within the div
// Go into your css and style each of the classes
// Test each button
$("#info-button").click(function (){
  $("#challenge-button").toggleClass("jose");
});

$("#challenge-button").click(function (){
  $("#result-button").toggleClass("ana");
});

$("#result-button").click(function (){
  $("#info-button").toggleClass("bob");
});
