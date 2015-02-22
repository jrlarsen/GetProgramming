// Adventures In Code
// Listing 3.9

function log(player) {
    console.log(player.name + " is in " + player.location);
}

var players = [
    { name : "Kandra", location : "The Armoury" },
    { name : "Dax", location : "The Kitchen" },
    { name : "Brin", location : "The Library" }
];

players.forEach(log);


/**
 * Adventures
 *
 * 1) Change some names and locations.
 *    Run the program again.
 *
 * 2) Create two more players in the players list.
 *    Run the program again
 *
 * 3) Can the same player turn up more than once
 *    in the players list?
 *
 */