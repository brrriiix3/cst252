//
// tic-tac-toe game against computer
//
// Author: Wes Modes <wmodes@csumb.edu>
// Date: 2021
// License: MIT 2.0

// Print the board before each turn
// return string
function printBoard(board){
  // create string to store output
  var output ='';
  console.log(board);
  // Loop through each row
  for (row = 0; row < 3; row++){
    // Loop through each space
    for (space = 0; space < 3; space++){
      // Print X, O, or space
      console.log(row*3 + space]);
      // Print a | between
      if (space < 2) output += '|';
    }
    // Print a newline at the end
    output += '\n';
    // Print a horizontal line between
    if (row < 2) output += '-----\n';
  }
  return output;
}
