/* Adventures in JavaScript
 * Listing 4.06
 * Calling the showPlayerInfo function
 */

var player1 = {
    name: "Kandra",
    location: "The Old Library",
    health: 50
};

var showPlayerInfo = function () {
    console.log("Player information for " + player.name);
    console.log("------------------------------");
    console.log(player.name + " is in " + player.location);
    console.log(player.name + " has health " + player.health);
    console.log("------------------------------");
};

var player = player1;

showPlayerInfo();



/* Further Adventures
 *
 * 1) Without creating a player2, assign player2 to the player variable. What happens when you call showPlayerInfo?
 *
 * 2) Create an empty object and assign it to a player2 variable. What happens when you call showPlayerInfo now?
 *
 * 3) Fill out player2 with the properties needed by showPlayerInfo. What happens when you call showPlayerInfo now?
 *
 */