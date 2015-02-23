// Adventures In Code
// Listing 3.11
// http://jsbin.com/kidovo/edit?js,console

function log(player) {
    console.log(player.name + " is in " + player.location);

    if (player.items.length > 0) {
        console.log(player.name + " has: " + player.items.join(', ') + '.');
    }
}

var player1 = {
    name : "Brin",
    location : "The Library",
    items : [ "a sword" , "a lamp" ]
};

var player2 = {
    name : "Dax",
    location : "The Kitchen",
    items : []
};

log(player1);
log(player2);


/**
 * Adventures
 *
 * 1) Change the items for the two players.
 *
 * 2) Change the comma in the join function to " and ".
 *
 * 3) What happens if a player has no items property at all?
 *
 */