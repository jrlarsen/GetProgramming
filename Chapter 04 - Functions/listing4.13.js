/* Adventures in JavaScript
 * Listing 4.13
 * Updating our display function to add a blank line
 */

var player1 = {
    name: "Kandra",
    location: "The Old Library",
    health: 50
};

var player2 = {
    name: "Dax",
    location: "The Dungeon of Doom",
    health: 40
};

var player3 = {
    name: "Blinky",
    location: "The Maze",
    health: 2000
};

var player;

var showPlayerInfo = function () {
    console.log("Player information for " + player.name);
    console.log("------------------------------");
    console.log(player.name + " is in " + player.location);
    console.log(player.name + " has health " + player.health);
    console.log("------------------------------");
    console.log("");
};

player = player1;
showPlayerInfo();

player = player2;
showPlayerInfo();

player = player3;
showPlayerInfo();



/* Further Adventures
 *
 * 1) Create three objects to represent blog posts
 *
 * 2) Create a function to display the posts on the console
 *
 * 3) Can you find your own way of visually separating the different blog posts on the console?
 *
 */