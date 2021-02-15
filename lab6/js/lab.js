//
// Author: Brianna Sanchez Ortega
// Date: Feb 15, 2021
// Lab: 6: Arrays and Objects
// Licensce: Public Domain
//

//Variables
myTransport = ["car", " legs", " bike", " scooter", " train"];

myMainRide = {
    make: "Nissan",
    model: "Sentra",
    year: 2018,
    color: "Black",
    extras: "Midnight Edition, Bad Bluetooth Pairing",
    age: function() {
      return 2021 - age;
    }
}

//output
document.writeln("Kinds of transportation: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
