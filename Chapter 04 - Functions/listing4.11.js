/* Adventures in JavaScript
 * Listing 4.11
 * Using the same function with multiple objects
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
};

player = player1;
showPlayerInfo();

player = player2;
showPlayerInfo();

player = player3;
showPlayerInfo();



/* Further Adventures
 *
 * 1) Create an object to represent a multiple choice quiz question
 *
 * 2) Create two more quiz question objects
 *
 * 3) Create a function to show the question and answer options
 *
 * 4) Use the same variable assignment technique as above to display all three questions on the console
 *
 */