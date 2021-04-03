//
// Lab 14 create a JavaScript constructor
// Author: Brianna Sanchez Ortega
// Date: March 22, 2021
// License: Public

//PROTOTYPING METHOD
//constructor named vehicle that takes in the make,
// name, model, year, color, extras your vehicle has
// with a method info thst returns the information
// function Vehicle(make, name, model, year, color, extras) {
//   this.make = make;
//   this.name = name;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.extras = extras;
//   this.info = function () {
//     return this.color + " " + this.year + " " + this.make + " " + this.model + " with " + this.extras + " and called " + this.name;
//   }
// }

//NEW CLASS METHOD
class Vehicle {
  constructor(make, name, model, year, color, extras) {
    this.make = make;
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.extras = extras;
  }
  info () {
      return this.color + " " + this.year + " " + this.make + " " + this.model + " with " + this.extras + " and called " + this.name;
  }
 }


var vehicles = [];

vehicles.push(new Vehicle("Volkswagen", " him Green Car", "Jetta", 1993, "Forest Green", "Taped Windows & a Sunroof"));
vehicles.push(new Vehicle("Nissan"," her Caroline", "Sentra", 2018, "Dustyyy Black", "Midnight Edition"));


outputEl = document.getElementById("output");
for(var i = 0; i<vehicles.length; i++){
  var newEl = document.createElement("li");
  newEl.innerText = vehicles[i].info();
  outputEl.appendChild(newEl);
}
