//
// Author: Brianna Sanchez Ortega
// Date: Mar 9, 2021
// Lab: 11 writing if, else if, and else statements
// Licensce: Public Domain
//

// Create a function sortingHat()
// takes a string as an argument: function sortingHat(str)
// counts the letters in the str and assigns it to a variable len
// uses modulus to get the remainder with 4: mod = len % 4;
// mod will now be a value between 0 and 3
function sortingHat(str){
  var len = str.length;
  console.log("length: ", len);

  var mod = len % 4;
  console.log("Module: ", mod);

// create a conditional that will return Gryffindor,
// Ravenclaw, Slytherin, and Hufflepuff depending on
// whether the value of mod is 0, 1, 2, or 3
  if (mod == 0) {
    return "Gryfindor";
  } else if (mod == 1) {
    return "Ravenclaw";
  } else if (mod == 2) {
    return "Slytherin";
  } else if (mod == 3){
    return "Hufflepuff";
  } else {
    return "Wrong input. Try Again ;)"
  }
}

// Create an event listener attached to #button
// that gets the value of #input and assigns it to a variable name
// runs sortingHat(name) and stores the result in a variable house
// appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
  var myButton = document.getElementById("button");
  myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "The Sorting Hat has sorted you into " + house + " ";
  document.getElementById("output").innerHTML = newText;
}
