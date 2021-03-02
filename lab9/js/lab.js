//
// Author: Brianna Sanchez Ortega
// Date: Mar 2, 2021
// Lab: 9 - javascript for the web
// Licensce: Public Domain
//
window.onload = function () {

//Use getElementById() to find your output <div>
// and assign it to a variable outputEl
var outputEl = document.getElementById("output");
console.log("outputEl", outputEl);

// Create a new element with document.createElement("p")
// and assign it to a variable new1El
//Change the html attribute of new1El to say something new.
var new1El = document.createElement("p");
new1El.innerHTML = "Hello";

//Create another new element and assign it to a variable new2El
//Change the html attribute of new2El to say something else.
var new2El = document.createElement("p");
new2El.innerHTML = "Bye";

// Append both new elements one at a
// time using appendChild()
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//Change the css attributes
// of at least two elements of your page
new1El.style.fontSize = "30pt";
new2El.style.color = "blue";
}
