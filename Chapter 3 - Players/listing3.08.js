// Adventures In Code
// Listing 3.08
// http://jsbin.com/kamiri

function log(player) {
    console.log(player.name + " is in " + player.location);
}

var player1 = { name : "Kandra", location : "The Armoury" };
var player2 = { name : "Dax", location : "The Kitchen" };
var player3 = { name : "Brin", location : "The Library" };

var players = [ player1 , player2 , player3 ];

players.forEach(log);


/**
 * Adventures
 *
 * 1) Change some names and locations.
 *    Run the program again.
 *
 * 2) Create two more players.
 *    Add them to the players list.
 *    Run the program again
 *
 * 3) Can the same player turn up more than once
 *    in the players list?
 *
 */