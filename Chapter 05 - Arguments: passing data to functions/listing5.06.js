/* Adventures in JavaScript
 * Listing 5.06
 * Passing an object as an argument to a function
 */

var player1 = {
    name: "Kandra",
    location: "The Old Library",
    health: 50
};

var showPlayerInfo = function (player) {
    console.log("Player information for " + player.name);
    console.log("------------------------------");
    console.log(player.name + " is in " + player.location);
    console.log(player.name + " has health " + player.health);
    console.log("------------------------------");
    console.log("");
};

showPlayerInfo(player1);



/* Further Adventures
 *
 * 1) Create a second player object
 *
 * 2) Add a second call to showPlayerInfo so both players' info is displayed
 *
 * 3) Create an object to represent a book with at least author and title properties
 *
 * 4) Create a function to display the details of a book object passed to the function
 *
 */