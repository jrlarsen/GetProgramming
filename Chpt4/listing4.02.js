/* Adventures in JavaScript
 * Listing 4.02
 * Displaying information from similar objects
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

console.log("Player information for " + player1.name);
console.log("------------------------------");
console.log(player1.name + " is in " + player1.location);
console.log(player1.name + " has health " + player1.health);
console.log("------------------------------");

console.log("Player information for " + player2.name);
console.log("------------------------------");
console.log(player2.name + " is in " + player2.location);
console.log(player2.name + " has health " + player2.health);
console.log("------------------------------");

console.log("Player information for " + player3.name);
console.log("------------------------------");
console.log(player3.name + " is in " + player3.location);
console.log(player3.name + " has health " + player3.health);
console.log("------------------------------");



/* Further Adventures
 *
 * 1) Add a fourth player and display their info
 *
 * 2) All the player info is in one big block on the console. Change the code to space out the different players
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */