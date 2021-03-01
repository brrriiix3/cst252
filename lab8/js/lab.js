//
// Author: Brianna Sanchez Ortega
// Date: Feb 25, 2021
// Lab: 8 - anon and callbacks
// Licensce: Public Domain
//

setTimeout(function(){ alert("Hello, welcome to my website:) im glad you found me! Have a great time looking around:)"); }, 5000);

//function positive number checks to see
//what numbers of an array are positive
//returns either true or false
function positiveNumber(x){
    return (0 <= x);
}


//test function with inputs
document.writeln("Testing out my positiveNumber function","<br>");
document.writeln("Is 23 positive? ",positiveNumber(23),"<br>");
document.writeln("Is -38 positive? ",positiveNumber(-38),"<br>","<br>");


//declare an array variable - numberArray that
//consists of positive and negative
// numbers
document.writeln("Testing my numberArray","<br>");
var numberArray = [12,23,-34,-56,77,88,43,-56];
document.writeln("My numberArray: ", numberArray,"<br>","<br>");


//testing positiveNumber function
document.writeln("Testing my positiveNumber function with my numberArray","<br>");
var posNumbRes = numberArray.map(positiveNumber);
document.writeln("Testing if array is positive: ", posNumbRes,"<br>","<br>");


//create a variable that holds a Functions
//result of a squareroot the numbers in
// the numberArray
document.writeln("Testing my squareroot function with an array of numbers","<br>");
var numbArrayTwo = [64,56,321,64];
var result = numbArrayTwo.map(function(x){
  return x ** 0.5;
})

document.writeln("Squareroot of array: ", result,"<br>","<br>");


//function negative number checks to see
//what numbers of an array are negative
//returns either true or false
function negativeNumber(y){
    return (y <= 0);
}


//test negativeNumber function with inputs
document.writeln("Testing out my negativeNumber function","<br>");
document.writeln("Is 23 negative? ",negativeNumber(23),"<br>");
document.writeln("Is -38 negative? ",negativeNumber(-38),"<br>","<br>");
document.writeln("Using numberArray to test if they are negative","<br>");
document.writeln("My numberArray: ", numberArray,"<br>","<br>");


//testing positiveNumber function
var negNumbRes = numberArray.map(negativeNumber);
document.writeln("Testing if array is negative: ", negNumbRes,"<br>");
