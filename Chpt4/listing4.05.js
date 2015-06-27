/* Adventures in JavaScript
 * Listing 4.05
 * Using a function to display object properties
 */

var showPlayerInfo = function () {
    console.log("Player information for " + player.name);
    console.log("------------------------------");
    console.log(player.name + " is in " + player.location);
    console.log(player.name + " has health " + player.health);
    console.log("------------------------------");
};



/* Further Adventures
 *
 * 1) Add a call to showPlayerInfo and run the program. What happens?
 *
 * 2) Declare a player variable but don't assign it a value. Run the program. What happens now?
 *
 * 3) Create an empty object and assign it to the player variable. Run the program again. Does the output change?
 *
 * 4) Add name, location and health properties to the player object. Run one more time. Is the output as expected?
 *
 */