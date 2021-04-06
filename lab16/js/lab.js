//
// Lab 16 jquery thinggs
// Author: Brianna Sanchez Ortega
// Date: April 6, 2021
// License: Public


//add button with alert
$("#output").append("<button id=my-button>Click Me For Surpise 1");
$("#my-button").click(function (){
  alert("I did it :,). I am so Proud!<3");
})

//style alert button
$("#my-button").css("background-color", "#33691e");
$("#my-button").css("color", "snow");

//changes button 3 from green to black
$("#output").append("<button id=button-two>Click Me For Surprise 2");
$("#button-two").css("background-color", "#33691e");
$("#button-two").css("color","snow");
$("#button-two").click(function (){
    $("#button-three").css("background-color","pink");
})

//changes button 2 from green to white
$("#output").append("<button id=button-three>Click Me For Surprise 3");
$("#button-three").css("background-color", "#33691e");
$("#button-three").css("color","snow");
$("#button-three").click(function (){
    $("#button-two").css("background-color","cornflowerBlue");
})

//style buttons
$("button").css("padding","5px");
$("button").css("margin","5px");
