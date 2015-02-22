// Adventures In Code
// Listing 3.10

function log(player) {
    console.log(player.name + " is in " + player.location);
    console.log(player.name + " has: " + player.items.join(', ') + '.');
}

var player1 = {
    name : "Brin",
    location : "The Library",
    items : [ "a sword" , "a lamp" ]
};

log(player1);


/**
 * Adventures
 *
 * 1) Add some more items to the items array.
 *
 * 2) Change the way the items are displayed.
 *
 * 3) What happens if there are no items in the items array?
 *
 */