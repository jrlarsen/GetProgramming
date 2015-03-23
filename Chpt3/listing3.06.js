// jsbin.com/caponu/edit?js,console
// Adventures In Code
// Listing 3.06

function log(player) {
  console.log(player.name + " is in " + player.location);
}

var player1 = {};
player1.name = "Kandra";
player1.location = "The Armoury";

log(player1);


/**
* Adventures
*
* 1) Change the name and location of player1.
*    Run the program again.
*
* 2) Add another player.
*    Use the log function to display their details.
*
*/