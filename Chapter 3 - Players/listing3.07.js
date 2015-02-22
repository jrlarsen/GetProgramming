// Adventures In Code
// Listing 3.07
// http://jsbin.com/cuxava

function log(player) {
    console.log(player.name + " is in " + player.location);
}

var player1 = { name : "Kandra", location : "The Armoury" };
var player2 = { name : "Dax", location : "The Kitchen" };
var player3 = { name : "Brin", location : "The Library" };

log(player1);
log(player2);
log(player3);


/**
 * Adventures
 *
 * 1) Change some names and locations.
 *    Run the program again.
 *
 * 2) Add two more players.
 *    Display their details on the console.
 *
 */