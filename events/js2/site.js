
// var maxXdelta = 100;
// var maxYdelta = 100;


var titleEl = document.getElementById("changeme");
console.log("heres the title element", titleEl);

var buttonEl = document.getElementById("my-button");
console.log("heres the button", buttonEl);

var betterEl = document.getElementById("better-button");
console.log("heres the button", betterEl);

var inputEl = document.getElementById("my-input");
console.log("heres the input", inputEl);

buttonEl.addEventListener("click", function(){
  var userInput = inputEl.value;
  //var userInput = prompt("Whaaas ya name?: ");
  titleEl.innerText = "hello, " + userInput;
  inputEl.value = "";
})

betterEl.addEventListener("click", function(){
  alert("hooray, you won!")
})
// //add mouseover event for button
// betterEl.addEventListener("mouseover", function(){
//   console.log("Mouseover");
// //pick random distance for x and y
// var xDelta = Math.floor(Math.random() * maxXdelta);
// var yDelta = Math.floor(Math.random() * maxYdelta);
// //pick random direction for x and y
// var xDir = Math.floor(Math.random() * 3) -1);
// var yDir = Math.floor(Math.random() * 3) -1);
// //create a vector
// var xDelta = xDelta * xDir;
// var yDelta = yDelta * yDir;
// //get current position
// var curX = betterEl.offsetLeft;
// var curY = betterEl.offsetTop;
// //calculate new position
// var newX = curX + xDelta;
// var newY = curY + yDelta;
// //set new position
// betterEl.style.left = newX + "px";
// betterEl.style.top = newY + "px";
//
// })
