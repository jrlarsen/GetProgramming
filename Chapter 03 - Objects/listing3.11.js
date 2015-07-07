/* Adventures in JavaScript
 * Listing 3.11
 * Using a property in a calculation
 */

var player1 = {
    name: "Kandra",
    health: 50
};

console.log(player1.name + " has health " + player1.health);

player1.health = player1.health + 10;

console.log(player1.name + " has health " + player1.health);



/* Further Adventures
 *
 * 1) Write code to increase player1's health by 10%.
 *
 * 2) Add a second player.
 *
 * 3) Use the players' properties to find the sum
 *    of their health scores and log it to the console,
 *    along with an appropriate message that includes
 *    their names.
 *
 */